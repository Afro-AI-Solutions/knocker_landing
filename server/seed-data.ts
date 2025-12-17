import { db } from "./database";
import { services, projects, teamMembers, testimonials, pageContent } from "@shared/schema";

export async function seedDatabase() {
  try {
    console.log("Seeding database with initial data...");

    // Seed Services
    await db.insert(services).values([
      {
        title: "Web Development",
        description: "Custom, responsive websites built with modern technologies",
        features: JSON.stringify(["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"]),
        icon: "🌐",
        price: "Starting at $2,999"
      },
      {
        title: "AI Solutions",
        description: "Intelligent automation and machine learning integration",
        features: JSON.stringify(["Custom AI Models", "Data Analytics", "Process Automation", "API Integration"]),
        icon: "🤖",
        price: "Starting at $4,999"
      },
      {
        title: "Cloud Infrastructure",
        description: "Scalable cloud solutions on AWS, Azure, and GCP",
        features: JSON.stringify(["Cloud Migration", "DevOps Setup", "Monitoring", "Security"]),
        icon: "☁️",
        price: "Starting at $1,999"
      }
    ]);

    // Seed Projects
    await db.insert(projects).values([
      {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        category: "Web Development",
        tags: JSON.stringify(["React", "Node.js", "Stripe", "MongoDB"]),
        projectUrl: "https://example.com",
        githubUrl: "https://github.com/example"
      },
      {
        title: "AI Chatbot",
        description: "Intelligent customer service chatbot with NLP",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        category: "AI Solutions",
        tags: JSON.stringify(["Python", "OpenAI", "FastAPI", "Docker"]),
        projectUrl: "https://example.com",
        githubUrl: "https://github.com/example"
      },
      {
        title: "Cloud Analytics Dashboard",
        description: "Real-time analytics dashboard with cloud integration",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        category: "Cloud Solutions",
        tags: JSON.stringify(["AWS", "React", "D3.js", "Lambda"]),
        projectUrl: "https://example.com",
        githubUrl: "https://github.com/example"
      }
    ]);

    // Seed Team Members
    await db.insert(teamMembers).values([
      {
        name: "John Smith",
        position: "CEO & Founder",
        bio: "10+ years experience in tech leadership and product development",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        email: "john@knocker.ai",
        linkedin: "https://linkedin.com/in/johnsmith"
      },
      {
        name: "Sarah Johnson",
        position: "CTO",
        bio: "Full-stack developer with expertise in AI and cloud technologies",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
        email: "sarah@knocker.ai",
        linkedin: "https://linkedin.com/in/sarahjohnson"
      },
      {
        name: "Mike Chen",
        position: "Lead Developer",
        bio: "Specialized in React, Node.js, and modern web technologies",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        email: "mike@knocker.ai",
        linkedin: "https://linkedin.com/in/mikechen"
      }
    ]);

    // Seed Testimonials
    await db.insert(testimonials).values([
      {
        name: "Emily Rodriguez",
        position: "Marketing Director",
        company: "TechCorp Inc.",
        testimonial: "Knocker AI transformed our digital presence completely. The team's expertise and attention to detail is unmatched.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
      },
      {
        name: "David Wilson",
        position: "Startup Founder",
        company: "InnovateLab",
        testimonial: "Working with Knocker AI was a game-changer. They delivered beyond our expectations and on time.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
      },
      {
        name: "Lisa Thompson",
        position: "Product Manager",
        company: "GrowthCo",
        testimonial: "The AI solutions they built for us increased our efficiency by 300%. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
      }
    ]);

    // Seed Page Content
    const defaultContent = {
      home: JSON.stringify({
        hero: {
          title: "We Knock. You Win.",
          subtitle: "Revolutionizing Digital Solutions",
          description: "We knock with next-generation digital innovation you win with results that matter."
        },
        stats: [
          { label: "Projects Delivered", value: "100+" },
          { label: "Happy Clients", value: "50+" },
          { label: "Team Experts", value: "25+" },
          { label: "Years Experience", value: "5+" }
        ]
      }),
      about: JSON.stringify({
        hero: {
          title: "About Knocker AI",
          description: "We are a team of passionate developers and AI specialists dedicated to transforming businesses through technology."
        },
        mission: "To democratize AI and make cutting-edge technology accessible to businesses of all sizes.",
        vision: "A world where every business can leverage the power of AI to achieve extraordinary results."
      }),
      services: JSON.stringify({
        hero: {
          title: "Our Services",
          description: "Comprehensive digital solutions tailored to your business needs."
        }
      }),
      portfolio: JSON.stringify({
        hero: {
          title: "Our Work",
          description: "Showcasing our latest projects and success stories."
        }
      }),
      contact: JSON.stringify({
        hero: {
          title: "Get In Touch",
          description: "Ready to start your next project? Let's talk!"
        },
        info: {
          email: "hello@knocker.ai",
          phone: "+1 (555) 123-4567",
          address: "123 Tech Street, Silicon Valley, CA 94000"
        }
      })
    };

    for (const [page, content] of Object.entries(defaultContent)) {
      await db.insert(pageContent).values({ page, content });
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

if (require.main === module) {
  seedDatabase();
}