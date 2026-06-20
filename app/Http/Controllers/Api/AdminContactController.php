<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AdminContactController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $messages = Message::query()->orderBy('created_at')->get();
            $total = $messages->count();
            $unread = $messages->where('is_read', false)->count();

            return response()->json([
                'messages' => $messages,
                'stats' => [
                    'total' => $total,
                    'unread' => $unread,
                    'read' => $total - $unread,
                ],
            ]);
        } catch (\Throwable) {
            return response()->json(['error' => 'Failed to fetch messages'], 500);
        }
    }

    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'email', 'max:255'],
                'subject' => ['required', 'string'],
                'message' => ['required', 'string'],
            ]);

            Message::query()->create([
                ...$validated,
                'is_read' => false,
                'created_at' => now(),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Message sent successfully!',
            ]);
        } catch (ValidationException) {
            return response()->json(['success' => false, 'message' => 'Invalid data'], 400);
        } catch (\Throwable) {
            return response()->json(['success' => false, 'message' => 'Invalid data'], 400);
        }
    }

    public function markAsRead(int $id): JsonResponse
    {
        try {
            Message::query()->whereKey($id)->update(['is_read' => true]);

            return response()->json(['success' => true]);
        } catch (\Throwable) {
            return response()->json(['error' => 'Failed to mark message as read'], 500);
        }
    }
}
