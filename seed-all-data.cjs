const mysql = require('mysql2/promise');
require('dotenv').config();

async function seedAllData() {
  let connection;
  
  try {
    console.log('🔄 Connecting to MySQL...');
    
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'knocker_db'
    });
    
    console.log('✅ Connected to MySQL database');
    
    // Clear existing data
    console.log('🔄 Clearing existing data...');
    await connection.execute('DELETE FROM content');
    await connection.execute('DELETE FROM messages');
    await connection.execute('DELETE FROM users');
    
    // Seed Users
    console.log('🔄 Seeding users...');
    await connection.execute(`
      INSERT INTO users (username, password) VALUES 
      ('admin', '$2b$10$rOzJqQZQJQZQJQZQJQZQJOzJqQZQJQZQJQZQJQZQJQZQJQZQJQZQJ')
    `);
    
    // Seed Messages
    console.log('🔄 Seeding messages...');
    const messages = [
      ['John Doe', 'john@example.com', 'Project Inquiry', 'Hi, I am interested in your web development services. Can we schedule a call to discuss my project requirements?', false],
      ['Sarah Johnson', 'sarah@company.com', 'E-commerce Website', 'We need a complete e-commerce solution with payment integration. What would be the timeline and cost?', false],
      ['Mike Chen', 'mike@startup.io', 'AI Integration', 'Looking for AI chatbot integration for our customer support. Do you have experience with this?', true],
      ['Emily Rodriguez', 'emily@business.com', 'Website Redesign', 'Our current website needs a modern redesign. Can you help with responsive design and SEO optimization?', false],
      ['David Wilson', 'david@tech.org', 'Cloud Migration', 'We want to migrate our infrastructure to AWS. Do you provide cloud migration services?', true]
    ];
    
    for (const [name, email, subject, message, isRead] of messages) {
      await connection.execute(
        'INSERT INTO messages (name, email, subject, message, is_read) VALUES (?, ?, ?, ?, ?)',
        [name, email, subject, message, isRead]
      );
    }
    
    // Seed Content
    console.log('🔄 Seeding content...');
    
    // Home Page Content
    const homeContent = {
      hero: {
        tagline: "Revolutionizing Digital Solutions",
        heading: "We Knock. You Win.",
        description: "Empowering your business with intelligent solutions that unlock growth, automate processes, and elevate performance—effortlessly.",
        image: "/figmaAssets/illustration.png",
        buttons: [
          { text: "Start Your Project", href: "/contact", variant: "primary" },
          { text: "View Our Work", href: "/portfolio", variant: "secondary" }
        ]
      },
      stats: [
        { label: "Projects Delivered", value: "100+" },
        { label: "Happy Clients", value: "50+" },
        { label: "Team Experts", value: "25+" },
        { label: "Years Experience", value: "5+" }
      ],
      techStack: {
        title: "Powered by Modern Tech",
        technologies: [
          { name: "React", icon: "react", color: "#61DAFB" },
          { name: "Next.js", icon: "nextjs", color: "#000000" },
          { name: "TypeScript", icon: "typescript", color: "#3178C6" },
          { name: "Node.js", icon: "nodejs", color: "#339933" },
          { name: "Python", icon: "python", color: "#3776AB" },
          { name: "TensorFlow", icon: "tensorflow", color: "#FF6F00" },
          { name: "AWS", icon: "aws", color: "#FF9900" },
          { name: "Docker", icon: "docker", color: "#2496ED" },
          { name: "Tailwind", icon: "tailwind", color: "#06B6D4" },
          { name: "MySQL", icon: "mysql", color: "#4479A1" }
        ]
      },
      features: {
        title: "Why Choose Knocker AI?",
        subtitle: "We combine technical expertise with creative innovation to deliver exceptional results that drive real business value.",
        items: [
          {
            title: "Web Development",
            description: "Custom, responsive, and high-performance websites tailored to your brand using modern frameworks like React and Next.js.",
            image: "/figmaAssets/portfolio-image-1.png"
          },
          {
            title: "AI Solutions",
            description: "Intelligent automation, predictive analytics, and custom LLM integrations to optimize your operations.",
            image: "/figmaAssets/portfolio-image-2.png"
          },
          {
            title: "Cloud Systems",
            description: "Scalable, secure, and cost-effective cloud infrastructure design and management on AWS, Azure, or GCP.",
            image: "/figmaAssets/portfolio-image-3.png"
          },
          {
            title: "Digital Growth",
            description: "Strategic SEO, performance marketing, and conversion rate optimization to accelerate your market presence.",
            image: "/figmaAssets/portfolio-image-4.png"
          }
        ]
      },
      projects: {
        title: "Featured Projects",
        subtitle: "A glimpse into our recent success stories.",
        buttonText: "View All Projects",
        items: [
          {
            title: "AI-Powered Analytics",
            desc: "Predictive market trends for retail.",
            image: "/figmaAssets/portfolio-image-1.png",
            tag: "AI & ML"
          },
          {
            title: "EduTech Platform",
            desc: "Interactive LMS with real-time video.",
            image: "/figmaAssets/portfolio-image-2.png",
            tag: "Web Dev"
          },
          {
            title: "FinTech Wallet",
            desc: "Secure mobile digital wallet.",
            image: "/figmaAssets/portfolio-image-3.png",
            tag: "Mobile App"
          }
        ]
      },
      process: {
        title: "DEVELOPMENT PROCESS",
        subtitle: "Agile software development methodology that delivers high-quality solutions",
        steps: [
          {
            title: "PLANNING",
            desc: "Requirements analysis, user stories, and project roadmap creation",
            hex: "0x01"
          },
          {
            title: "DESIGN",
            desc: "UI/UX design, system architecture, and database modeling",
            hex: "0x02"
          },
          {
            title: "DEVELOPMENT",
            desc: "Agile coding sprints with continuous integration and testing",
            hex: "0x03"
          },
          {
            title: "DEPLOYMENT",
            desc: "Production launch with monitoring and ongoing maintenance",
            hex: "0x04"
          }
        ]
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Real feedback from companies who trusted us with their digital transformation",
        items: [
          {
            quote: "Knocker AI transformed our outdated system into a modern, efficient platform. The AI integration saved us hours of manual work every day.",
            author: "Sarah J.",
            role: "CTO, TechFlow"
          },
          {
            quote: "The team's attention to detail and design aesthetics is unmatched. Our new landing page conversion rate doubled within a month.",
            author: "Michael R.",
            role: "Marketing Director, GrowthCo"
          },
          {
            quote: "Professional, timely, and incredibly skilled. They didn't just build what we asked for; they improved upon our initial ideas.",
            author: "Emily T.",
            role: "Founder, StartUp X"
          }
        ]
      },
      cta: {
        title: "Ready to Transform Your Business?",
        description: "Let's collaborate to build something extraordinary. Whether you need a simple website or a complex AI system, we have the expertise to help.",
        buttons: [
          { text: "Get in Touch", href: "/contact", variant: "primary" },
          { text: "Learn About Us", href: "/about", variant: "secondary" }
        ]
      },
      newsletter: {
        title: "Stay Ahead of the Curve",
        description: "Subscribe to our newsletter for the latest insights on AI, Tech trends, and Knocker AI updates.",
        buttonText: "Subscribe"
      }
    };
    
    // About Page Content
    const aboutContent = {
      hero: {
        heading: "About Knocker AI",
        description: "We are a team of passionate innovators, developers, and strategists dedicated to redefining the digital landscape through Artificial Intelligence and modern web technologies."
      },
      story: {
        title: "Our Story",
        paragraphs: [
          "Founded in 2023, Knocker AI began with a simple idea: that advanced technology shouldn't be accessible only to tech giants. We saw a gap in the market where small to medium-sized businesses were struggling to adopt AI and modern web standards due to complexity and cost.",
          "What started as a small consultancy has grown into a full-service digital agency. We've helped over 50 startups launch their MVPs and assisted established enterprises in modernizing their legacy systems.",
          "Today, we continue to push the boundaries of what's possible, constantly exploring new technologies like Generative AI, Edge Computing, and Web3 to give our clients a competitive edge."
        ]
      },
      mission: {
        title: "Our Mission",
        description: "To democratize access to advanced technology, enabling startups and enterprises alike to leverage AI and modern web frameworks for sustainable growth. We believe in building tools that empower humans, not replace them."
      },
      vision: {
        title: "Our Vision",
        description: "A world where technology serves as a seamless catalyst for human creativity and business efficiency. We envision a future where every business, regardless of size, has the digital infrastructure to compete on a global scale."
      },
      values: {
        title: "Our Core Values",
        subtitle: "The principles that guide every decision we make.",
        items: [
          {
            title: "Innovation",
            description: "We constantly challenge the status quo and embrace cutting-edge technologies."
          },
          {
            title: "Integrity",
            description: "We are transparent, honest, and keep our promises to clients and partners."
          },
          {
            title: "Excellence",
            description: "We strive for perfection in every project, no matter how big or small."
          },
          {
            title: "Collaboration",
            description: "We work with you, not just for you, ensuring your vision becomes reality."
          }
        ]
      },
      team: {
        title: "Meet the Team",
        members: [
          { 
            name: "Alex Johnson", 
            position: "CEO & Founder", 
            image: "/figmaAssets/person-m-12-webp.png",
            bio: "10+ years in tech leadership and AI strategy"
          },
          { 
            name: "Sarah Chen", 
            position: "CTO", 
            image: "/figmaAssets/person-f-12-webp.png",
            bio: "Full-stack developer with expertise in AI and cloud"
          },
          { 
            name: "Mike Rodriguez", 
            position: "Lead Designer", 
            image: "/figmaAssets/person-m-8-webp.png",
            bio: "UI/UX specialist with 8+ years experience"
          },
          { 
            name: "Emily Davis", 
            position: "AI Engineer", 
            image: "/figmaAssets/person-f-9-webp.png",
            bio: "Machine learning expert and data scientist"
          }
        ]
      },
      cta: {
        title: "Join Us on Our Journey",
        description: "Whether you're a startup looking for your first MVP or an established enterprise seeking digital transformation, we're here to help.",
        buttonText: "Contact Us"
      }
    };
    
    // Services Page Content
    const servicesContent = {
      hero: {
        tagline: "Premium Services",
        heading: "Our Services",
        description: "Comprehensive technical solutions tailored to meet your unique business challenges. From concept to deployment, we handle it all."
      },
      services: [
        {
          title: "Custom Web Development",
          description: "We build fast, responsive, and SEO-friendly websites using the latest technologies.",
          features: [
            "React, Next.js, & Vue.js Development",
            "Progressive Web Apps (PWA)",
            "E-commerce Solutions (Shopify, WooCommerce)",
            "CMS Integration (Sanity, Contentful)",
            "API Design & Integration",
            "Performance Optimization"
          ],
          price: "Starting at $2,999",
          popular: false
        },
        {
          title: "AI & Machine Learning",
          description: "Leverage the power of AI to automate tasks and gain valuable insights.",
          features: [
            "Custom LLM Integration (GPT-4, Claude)",
            "Chatbots & Virtual Assistants",
            "Predictive Analytics Models",
            "Natural Language Processing (NLP)",
            "Computer Vision Solutions",
            "Process Automation (RPA)"
          ],
          price: "Starting at $4,999",
          popular: true
        },
        {
          title: "Cloud Infrastructure",
          description: "Scalable, secure, and cost-effective cloud solutions on AWS, Azure, or GCP.",
          features: [
            "Cloud Migration & Setup",
            "DevOps & CI/CD Pipelines",
            "Serverless Architecture",
            "Database Management",
            "Security & Monitoring",
            "Cost Optimization"
          ],
          price: "Starting at $1,999",
          popular: false
        }
      ],
      cta: {
        title: "Not sure what you need?",
        description: "Schedule a free consultation with our experts. We'll analyze your requirements and propose the best solution for your budget.",
        buttonText: "Book Free Consultation"
      }
    };
    
    // Portfolio Page Content
    const portfolioContent = {
      hero: {
        heading: "Our Portfolio",
        description: "Explore our latest projects and see how we've helped businesses transform their ideas into reality."
      },
      projects: [
        {
          title: "AI-Powered Analytics Dashboard",
          description: "A comprehensive data visualization platform that uses machine learning to predict market trends and optimize inventory management for a large retail chain.",
          image: "/figmaAssets/portfolio-image-1.png",
          tags: ["React", "Python", "TensorFlow", "AWS"],
          category: "AI & ML",
          link: "#",
          github: "#"
        },
        {
          title: "EduTech Learning Platform",
          description: "An interactive Learning Management System (LMS) with real-time video conferencing, student progress tracking, and gamified assessments.",
          image: "/figmaAssets/portfolio-image-2.png",
          tags: ["Next.js", "Node.js", "WebRTC", "PostgreSQL"],
          category: "Web Development",
          link: "#",
          github: "#"
        },
        {
          title: "FinTech Mobile Wallet",
          description: "A secure digital wallet application with biometric authentication, cryptocurrency support, and real-time transaction monitoring.",
          image: "/figmaAssets/portfolio-image-3.png",
          tags: ["React Native", "Blockchain", "Firebase", "Stripe"],
          category: "Mobile App",
          link: "#",
          github: "#"
        },
        {
          title: "E-commerce Marketplace",
          description: "A multi-vendor marketplace with advanced search, recommendation engine, and integrated payment processing for thousands of products.",
          image: "/figmaAssets/portfolio-image-4.png",
          tags: ["Vue.js", "Laravel", "Elasticsearch", "Redis"],
          category: "Web Development",
          link: "#",
          github: "#"
        },
        {
          title: "Healthcare Management System",
          description: "A comprehensive patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
          image: "/figmaAssets/portfolio-image-5.png",
          tags: ["Angular", "Spring Boot", "MySQL", "Docker"],
          category: "Enterprise",
          link: "#",
          github: "#"
        },
        {
          title: "Smart IoT Dashboard",
          description: "Real-time monitoring dashboard for IoT devices with predictive maintenance alerts and energy consumption analytics.",
          image: "/figmaAssets/portfolio-image.png",
          tags: ["React", "Node.js", "InfluxDB", "Grafana"],
          category: "IoT",
          link: "#",
          github: "#"
        }
      ],
      cta: {
        title: "Have a Project in Mind?",
        description: "We can help you build something similar or completely unique. Let's discuss your requirements.",
        buttonText: "Start Your Project"
      }
    };
    
    // Contact Page Content
    const contactContent = {
      hero: {
        heading: "Get in Touch",
        description: "Have a project in mind? We'd love to hear from you. Fill out the form below or reach out directly."
      },
      contactInfo: {
        email: "hello@knocker.ai",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Avenue,\nSilicon Valley, CA 94025",
        hours: "Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: By Appointment"
      },
      faq: [
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application or AI integration could take 2-6 months. We provide a detailed timeline during the proposal phase."
        },
        {
          question: "Do you provide ongoing support?",
          answer: "Yes! We offer various maintenance and support packages to ensure your software remains secure, up-to-date, and performs optimally after launch."
        },
        {
          question: "Can you work with our existing team?",
          answer: "Absolutely! We often collaborate with in-house teams, providing expertise in specific areas or augmenting your development capacity during peak periods."
        },
        {
          question: "What technologies do you specialize in?",
          answer: "We specialize in modern web technologies (React, Next.js, Node.js), AI/ML (Python, TensorFlow, OpenAI), cloud platforms (AWS, Azure, GCP), and mobile development (React Native, Flutter)."
        },
        {
          question: "Do you offer fixed-price projects?",
          answer: "We offer both fixed-price and time-and-materials pricing models. Fixed-price works best for well-defined projects, while T&M is ideal for ongoing development or projects with evolving requirements."
        }
      ]
    };
    
    // Insert all content
    const contentData = [
      ['home', JSON.stringify(homeContent)],
      ['about', JSON.stringify(aboutContent)],
      ['services', JSON.stringify(servicesContent)],
      ['portfolio', JSON.stringify(portfolioContent)],
      ['contact', JSON.stringify(contactContent)]
    ];
    
    for (const [pageKey, data] of contentData) {
      await connection.execute(
        'INSERT INTO content (page_key, data) VALUES (?, ?)',
        [pageKey, data]
      );
    }
    
    console.log('✅ All seed data inserted successfully!');
    console.log('📊 Summary:');
    console.log('   - 1 admin user created');
    console.log('   - 5 sample messages added');
    console.log('   - 5 pages of content seeded');
    console.log('🎉 Database is ready for use!');
    
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

seedAllData();