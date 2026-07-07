<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'password' => ['required', 'string'],
        ]);

        $adminPassword = config('app.admin_password', env('ADMIN_PASSWORD'));

        if (! $adminPassword || ! Hash::check($request->password, $adminPassword)) {
            throw ValidationException::withMessages([
                'password' => ['The provided password is incorrect.'],
            ]);
        }

        // Create a token for a virtual admin user (no DB user needed)
        $token = \Laravel\Sanctum\PersonalAccessToken::forceCreate([
            'tokenable_type' => 'admin',
            'tokenable_id'   => 1,
            'name'           => 'admin-token',
            'token'          => hash('sha256', $plain = \Illuminate\Support\Str::random(40)),
            'abilities'      => ['admin'],
            'expires_at'     => now()->addHours(8),
        ]);

        return response()->json([
            'token' => $plain,
            'expires_in' => 8 * 3600,
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        // Invalidate token by deleting it
        $bearer = $request->bearerToken();
        if ($bearer) {
            \Laravel\Sanctum\PersonalAccessToken::findToken($bearer)?->delete();
        }

        return response()->json(['message' => 'Logged out']);
    }

    public function verify(Request $request): JsonResponse
    {
        $bearer = $request->bearerToken();
        if (! $bearer) {
            return response()->json(['valid' => false], 401);
        }

        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($bearer);

        if (! $token || ($token->expires_at && $token->expires_at->isPast())) {
            return response()->json(['valid' => false], 401);
        }

        return response()->json(['valid' => true]);
    }
}
