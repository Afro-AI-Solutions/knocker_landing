-- Create knocker_db database
CREATE DATABASE IF NOT EXISTS knocker_db;
USE knocker_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Create content table
CREATE TABLE IF NOT EXISTS content (
  id INT AUTO_INCREMENT PRIMARY KEY,
  page_key VARCHAR(50) NOT NULL UNIQUE,
  data JSON NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

-- Insert default admin user
INSERT IGNORE INTO users (username, password) VALUES ('admin', '$2b$10$rOzJqQZQJQZQJQZQJQZQJOzJqQZQJQZQJQZQJQZQJQZQJQZQJQZQJ');

-- Insert default content
INSERT IGNORE INTO content (page_key, data) VALUES 
('home', '{"hero":{"tagline":"Professional Web Solutions","heading":"Build Amazing Websites","description":"We create modern, responsive websites that drive results for your business.","image":"/hero-image.jpg","buttons":[{"text":"Get Started","href":"/contact","variant":"primary"},{"text":"View Portfolio","href":"/portfolio","variant":"secondary"}]},"stats":[{"label":"Projects Completed","value":"50+"},{"label":"Happy Clients","value":"30+"},{"label":"Years Experience","value":"5+"},{"label":"Team Members","value":"10+"}],"techStack":{"title":"Technologies We Use","technologies":[{"name":"React","icon":"react","color":"#61DAFB"},{"name":"TypeScript","icon":"typescript","color":"#3178C6"},{"name":"Node.js","icon":"nodejs","color":"#339933"},{"name":"MySQL","icon":"mysql","color":"#4479A1"}]}}'),
('about', '{"hero":{"title":"About Us","description":"We are passionate developers creating digital solutions."},"story":{"title":"Our Story","paragraphs":["Founded with a vision to transform businesses through technology.","We combine creativity with technical expertise to deliver exceptional results."]}}'),
('services', '{"hero":{"title":"Our Services","description":"Comprehensive digital solutions for your business needs."},"services":[{"title":"Web Development","description":"Custom websites and web applications","features":["React/Next.js","TypeScript","Responsive Design"],"price":"Starting at $2,999"}]}'),
('portfolio', '{"hero":{"title":"Our Work","description":"Showcasing our latest projects and success stories."},"projects":[{"title":"E-commerce Platform","description":"Modern online store with payment integration","image":"/project1.jpg","tags":["React","Node.js","Stripe"],"category":"web"}]}'),
('contact', '{"hero":{"title":"Get In Touch","description":"Ready to start your next project? Let\'s talk!"},"contactInfo":{"email":"hello@knocker.ai","phone":"+1 (555) 123-4567","address":"123 Tech Street, Silicon Valley, CA"}}');