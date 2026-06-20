<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class MessageController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $messages = Message::query()->orderBy('created_at')->get();

            return response()->json($messages);
        } catch (\Throwable) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch messages',
                'error' => 'DATABASE_ERROR',
                'timestamp' => now()->toIso8601String(),
            ], 500);
        }
    }

    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'name' => ['required', 'string', 'min:2', 'max:100'],
                'email' => ['required', 'email'],
                'message' => ['required', 'string', 'min:10', 'max:1000'],
            ]);

            $message = Message::query()->create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'subject' => Str::limit($validated['message'], 50, '...'),
                'message' => $validated['message'],
                'is_read' => false,
                'created_at' => now(),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Message submitted successfully',
                'id' => $message->id,
                'timestamp' => now()->toIso8601String(),
            ], 201);
        } catch (ValidationException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'error' => 'VALIDATION_FAILED',
                'errors' => collect($exception->errors())->flatMap(
                    fn (array $messages, string $field) => collect($messages)->map(
                        fn (string $message) => [
                            'field' => $field,
                            'message' => $message,
                            'code' => 'validation',
                        ],
                    ),
                )->values(),
                'timestamp' => now()->toIso8601String(),
            ], 400);
        } catch (\Throwable) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to submit message',
                'error' => 'DATABASE_ERROR',
                'timestamp' => now()->toIso8601String(),
            ], 500);
        }
    }

    public function markAsRead(int $id): JsonResponse
    {
        try {
            Message::query()->whereKey($id)->update(['is_read' => true]);

            return response()->json([
                'success' => true,
                'message' => 'Message marked as read',
                'id' => (string) $id,
                'timestamp' => now()->toIso8601String(),
            ]);
        } catch (\Throwable) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to mark message as read',
                'error' => 'DATABASE_ERROR',
                'timestamp' => now()->toIso8601String(),
            ], 500);
        }
    }
}
