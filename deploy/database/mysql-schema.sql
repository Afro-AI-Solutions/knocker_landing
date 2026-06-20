-- Knocker Landing — MySQL schema for phpMyAdmin import
-- Run this if you cannot use `php artisan migrate` on the server.

CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text,
  `payload` longtext NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `messages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` text NOT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `content` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `page_key` varchar(50) NOT NULL,
  `data` json NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_page_key_unique` (`page_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Default page content
INSERT INTO `content` (`page_key`, `data`, `updated_at`) VALUES
('home', '{"hero":{"tagline":"Professional Web Solutions","heading":"Build Amazing Websites","description":"We create modern, responsive websites that drive results for your business.","image":"/hero-image.jpg","buttons":[{"text":"Get Started","href":"/contact","variant":"primary"},{"text":"View Portfolio","href":"/portfolio","variant":"secondary"}]},"stats":[{"label":"Projects Completed","value":"50+"},{"label":"Happy Clients","value":"30+"},{"label":"Years Experience","value":"5+"},{"label":"Team Members","value":"10+"}],"techStack":{"title":"Technologies We Use","technologies":[{"name":"React","icon":"react","color":"#61DAFB"},{"name":"TypeScript","icon":"typescript","color":"#3178C6"},{"name":"PHP","icon":"php","color":"#777BB4"},{"name":"MySQL","icon":"mysql","color":"#4479A1"}]}}', NOW()),
('about', '{"hero":{"title":"About Us","description":"We are passionate developers creating digital solutions."},"story":{"title":"Our Story","paragraphs":["Founded with a vision to transform businesses through technology.","We combine creativity with technical expertise to deliver exceptional results."]}}', NOW()),
('services', '{"hero":{"title":"Our Services","description":"Comprehensive digital solutions for your business needs."},"services":[{"title":"Web Development","description":"Custom websites and web applications","features":["React","TypeScript","Responsive Design"],"price":"Starting at $2,999"}]}', NOW()),
('portfolio', '{"hero":{"title":"Our Work","description":"Showcasing our latest projects and success stories."},"projects":[{"title":"E-commerce Platform","description":"Modern online store with payment integration","image":"/project1.jpg","tags":["React","Laravel","Stripe"],"category":"web"}]}', NOW()),
('contact', '{"hero":{"title":"Get In Touch","description":"Ready to start your next project? Let us talk!"},"contactInfo":{"email":"hello@knocker.ai","phone":"+1 (555) 123-4567","address":"123 Tech Street, Silicon Valley, CA"}}', NOW())
ON DUPLICATE KEY UPDATE `data` = VALUES(`data`);
