<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class ResetAdminPassword extends Command
{
    protected $signature = 'admin:reset-password {password? : The new password}';
    protected $description = 'Reset the admin panel password and update .env';

    public function handle(): int
    {
        $password = $this->argument('password')
            ?? $this->secret('Enter new admin password');

        if (strlen($password) < 8) {
            $this->error('Password must be at least 8 characters.');
            return 1;
        }

        $hash = Hash::make($password);

        // Update .env file directly
        $envPath = base_path('.env');
        $envContent = file_get_contents($envPath);

        if (str_contains($envContent, 'ADMIN_PASSWORD=')) {
            $envContent = preg_replace(
                '/^ADMIN_PASSWORD=.*/m',
                'ADMIN_PASSWORD=' . $hash,
                $envContent
            );
        } else {
            $envContent .= "\nADMIN_PASSWORD=" . $hash;
        }

        file_put_contents($envPath, $envContent);

        $this->info('Admin password updated successfully.');
        $this->line('Hash: ' . $hash);

        return 0;
    }
}
