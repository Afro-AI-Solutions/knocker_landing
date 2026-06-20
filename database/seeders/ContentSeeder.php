<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $pages = [
            'home' => [
                'hero' => [
                    'tagline' => 'Professional Web Solutions',
                    'heading' => 'Build Amazing Websites',
                    'description' => 'We create modern, responsive websites that drive results for your business.',
                    'image' => '/hero-image.jpg',
                    'buttons' => [
                        ['text' => 'Get Started', 'href' => '/contact', 'variant' => 'primary'],
                        ['text' => 'View Portfolio', 'href' => '/portfolio', 'variant' => 'secondary'],
                    ],
                ],
                'stats' => [
                    ['label' => 'Projects Completed', 'value' => '50+'],
                    ['label' => 'Happy Clients', 'value' => '30+'],
                    ['label' => 'Years Experience', 'value' => '5+'],
                    ['label' => 'Team Members', 'value' => '10+'],
                ],
                'techStack' => [
                    'title' => 'Technologies We Use',
                    'technologies' => [
                        ['name' => 'React', 'icon' => 'react', 'color' => '#61DAFB'],
                        ['name' => 'TypeScript', 'icon' => 'typescript', 'color' => '#3178C6'],
                        ['name' => 'PHP', 'icon' => 'php', 'color' => '#777BB4'],
                        ['name' => 'MySQL', 'icon' => 'mysql', 'color' => '#4479A1'],
                    ],
                ],
            ],
            'about' => [
                'hero' => [
                    'title' => 'About Us',
                    'description' => 'We are passionate developers creating digital solutions.',
                ],
                'story' => [
                    'title' => 'Our Story',
                    'paragraphs' => [
                        'Founded with a vision to transform businesses through technology.',
                        'We combine creativity with technical expertise to deliver exceptional results.',
                    ],
                ],
            ],
            'services' => [
                'hero' => [
                    'title' => 'Our Services',
                    'description' => 'Comprehensive digital solutions for your business needs.',
                ],
                'services' => [
                    [
                        'title' => 'Web Development',
                        'description' => 'Custom websites and web applications',
                        'features' => ['React', 'TypeScript', 'Responsive Design'],
                        'price' => 'Starting at $2,999',
                    ],
                ],
            ],
            'portfolio' => [
                'hero' => [
                    'title' => 'Our Work',
                    'description' => 'Showcasing our latest projects and success stories.',
                ],
                'projects' => [
                    [
                        'title' => 'E-commerce Platform',
                        'description' => 'Modern online store with payment integration',
                        'image' => '/project1.jpg',
                        'tags' => ['React', 'Laravel', 'Stripe'],
                        'category' => 'web',
                    ],
                ],
            ],
            'contact' => [
                'hero' => [
                    'title' => 'Get In Touch',
                    'description' => "Ready to start your next project? Let's talk!",
                ],
                'contactInfo' => [
                    'email' => 'hello@knocker.ai',
                    'phone' => '+1 (555) 123-4567',
                    'address' => '123 Tech Street, Silicon Valley, CA',
                ],
            ],
        ];

        foreach ($pages as $pageKey => $data) {
            Content::query()->updateOrCreate(
                ['page_key' => $pageKey],
                ['data' => $data],
            );
        }
    }
}
