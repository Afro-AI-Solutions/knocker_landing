<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    private const PAGE_KEYS = ['home', 'about', 'services', 'portfolio', 'contact'];

    public function index(): JsonResponse
    {
        try {
            $content = Content::query()
                ->get()
                ->mapWithKeys(fn (Content $item) => [$item->page_key => $item->data])
                ->all();

            return response()->json($content);
        } catch (\Throwable) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch content',
                'error' => 'DATABASE_ERROR',
                'timestamp' => now()->toIso8601String(),
            ], 500);
        }
    }

    public function show(string $pageKey): JsonResponse
    {
        if (! in_array($pageKey, self::PAGE_KEYS, true)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid page key',
                'error' => 'INVALID_PAGE_KEY',
                'timestamp' => now()->toIso8601String(),
            ], 400);
        }

        try {
            $content = Content::query()->where('page_key', $pageKey)->first();

            if (! $content) {
                return response()->json([
                    'success' => false,
                    'message' => 'Page content not found',
                    'error' => 'CONTENT_NOT_FOUND',
                    'timestamp' => now()->toIso8601String(),
                ], 404);
            }

            return response()->json($content->data);
        } catch (\Throwable) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch page content',
                'error' => 'DATABASE_ERROR',
                'timestamp' => now()->toIso8601String(),
            ], 500);
        }
    }

    public function store(Request $request, string $pageKey): JsonResponse
    {
        if (! in_array($pageKey, self::PAGE_KEYS, true)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid page key',
                'error' => 'INVALID_PAGE_KEY',
                'timestamp' => now()->toIso8601String(),
            ], 400);
        }

        $data = $request->json()->all();

        if (! is_array($data)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid content data',
                'error' => 'VALIDATION_FAILED',
                'timestamp' => now()->toIso8601String(),
            ], 400);
        }

        try {
            Content::query()->updateOrCreate(
                ['page_key' => $pageKey],
                ['data' => $data],
            );

            return response()->json([
                'success' => true,
                'message' => 'Content saved successfully',
                'pageKey' => $pageKey,
                'timestamp' => now()->toIso8601String(),
            ]);
        } catch (\Throwable) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to save content',
                'error' => 'DATABASE_ERROR',
                'timestamp' => now()->toIso8601String(),
            ], 500);
        }
    }
}
