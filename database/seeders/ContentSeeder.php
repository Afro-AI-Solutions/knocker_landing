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
                        'id' => 1,
                        'title' => 'AI-Powered Analytics Dashboard',
                        'description' => 'A comprehensive data visualization platform that uses machine learning to predict market trends and optimize inventory management for a large retail chain.',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                        'tags' => ['React', 'Python', 'TensorFlow', 'AWS'],
                        'category' => 'AI & ML',
                        'link' => '#',
                    ],
                    [
                        'id' => 2,
                        'title' => 'EduTech Learning Platform',
                        'description' => 'An interactive Learning Management System (LMS) with real-time video conferencing, student progress tracking, and gamified assessments.',
                        'image' => 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
                        'tags' => ['Next.js', 'Node.js', 'WebRTC', 'PostgreSQL'],
                        'category' => 'Web Development',
                        'link' => '#',
                    ],
                    [
                        'id' => 3,
                        'title' => 'FinTech Secure Wallet',
                        'description' => 'A secure mobile-first digital wallet application supporting multi-currency transactions, biometric authentication, and instant peer-to-peer transfers.',
                        'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
                        'tags' => ['React Native', 'Node.js', 'Blockchain', 'Security'],
                        'category' => 'Mobile App',
                        'link' => '#',
                    ],
                    [
                        'id' => 4,
                        'title' => 'Smart Home Automation Hub',
                        'description' => 'IoT dashboard allowing users to control smart devices, set automation routines, and monitor energy consumption in real-time.',
                        'image' => 'https://images.unsplash.com/photo-1558002038-109177381792?w=800&q=80',
                        'tags' => ['Vue.js', 'IoT', 'MQTT', 'Firebase'],
                        'category' => 'IoT',
                        'link' => '#',
                    ],
                    [
                        'id' => 5,
                        'title' => 'Healthcare Patient Portal',
                        'description' => 'HIPAA-compliant patient management system for scheduling appointments, viewing medical records, and secure doctor-patient messaging.',
                        'image' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
                        'tags' => ['React', 'Django', 'PostgreSQL', 'Docker'],
                        'category' => 'Web Development',
                        'link' => '#',
                    ],
                    [
                        'id' => 6,
                        'title' => 'E-commerce Recommendation Engine',
                        'description' => 'Custom AI engine that analyzes user behavior to provide personalized product recommendations, increasing conversion rates by 40%.',
                        'image' => 'https://images.unsplash.com/photo-1472851294608-41531b6574d4?w=800&q=80',
                        'tags' => ['Python', 'Scikit-learn', 'FastAPI','Redis'],
                        'category' => 'AI & ML',
                        'link' => '#',
                    ],
                    [
                        'id' => 7,
                        'title' => 'GYM Management System',
                        'description' => 'A complete gym management solution featuring member management, workout tracking, payment processing, class scheduling, and trainer assignment. Includes comprehensive reporting, mobile-responsive design, and real-time notifications for enhanced member experience.',
                        'image' => 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
                        'tags' => ['Laravel', 'React.js', 'REST API'],
                        'category' => 'Web Development',
                        'link' => '#',
                    ],
                    [
                        'id' => 8,
                        'title' => 'Inventory Management System',
                        'description' => 'A comprehensive inventory management system with real-time stock tracking, automated reorder alerts, barcode scanning, supplier management, and detailed reporting. Includes multi-location support, role-based access control, and integration with accounting systems.',
                        'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
                        'tags' => ['Laravel', 'React', 'MySQL', 'REST API'],
                        'category' => 'Web Development',
                        'link' => '#',
                    ],
                    [
                        'id' => 9,
                        'title' => 'Royal Candy & Chocolate',
                        'description' => 'A modern, elegant landing page for Royal Candy & Chocolate company featuring product showcase, company information, contact forms, and responsive design. Includes admin panel for content management and SEO optimization.',
                        'image' => 'https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=800&q=80',
                        'tags' => ['Laravel', 'React', 'MySQL', 'Bootstrap'],
                        'category' => 'Web Development',
                        'link' => '#',
                    ],
                    [
                        'id' => 10,
                        'title' => 'Hailemariam Melese Import & Export',
                        'description' => 'A professional business landing page showcasing Ethiopia\'s agricultural excellence and industrial potential to global markets. Features company services, product catalogs, contact information, and business inquiry forms.',
                        'image' => 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
                        'tags' => ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
                        'category' => 'Web Development',
                        'link' => '#',
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
