import { type User, type InsertUser, type Message, type InsertMessage, type Content, type InsertContent } from "@shared/schema";
import { randomUUID } from "crypto";


// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
  markMessageAsRead(id: number): Promise<void>;
  getMessageStats(): Promise<{ total: number; unread: number; read: number }>;
  getAllContent(): Promise<Record<string, any>>;
  getContentByPage(pageKey: string): Promise<any | undefined>;
  saveContent(pageKey: string, data: any): Promise<Content>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private messages: Map<string, Message>;
  private content: Map<string, Content>;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.content = new Map();
    this.initializeDefaultContent();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return db.select().from(users).where(eq(users.username, username)).get();
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = db.insert(users).values(insertUser).returning().get();
    return result;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const result = db.insert(messages).values({
      ...insertMessage,
      isRead: false,
      createdAt: new Date(),
    }).returning().get();
    return result;
  }

  async getMessages(): Promise<Message[]> {
    return db.select().from(messages).orderBy(desc(messages.createdAt)).all();
  }

  async markMessageAsRead(id: number): Promise<void> {
    db.update(messages).set({ isRead: true }).where(eq(messages.id, id)).run();
  }

  async getMessageStats(): Promise<{ total: number; unread: number; read: number }> {
    const allMessages = await this.getMessages();
    const total = allMessages.length;
    const unread = allMessages.filter(m => !m.isRead).length;
    const read = allMessages.filter(m => m.isRead).length;
    return { total, unread, read };
  }

  async getAllContent(): Promise<Record<string, any>> {
    const result: Record<string, any> = {};
    for (const [pageKey, content] of this.content.entries()) {
      result[pageKey] = content.data;
    }
    return result;
  }

  async getContentByPage(pageKey: string): Promise<any | undefined> {
    const content = this.content.get(pageKey);
    return content?.data;
  }

  async saveContent(pageKey: string, data: any): Promise<Content> {
    const id = randomUUID();
    const content: Content = {
      id,
      pageKey,
      data,
      updatedAt: new Date(),
    };
    this.content.set(pageKey, content);
    return content;
  }

  private initializeDefaultContent() {
    const defaultContent = {
      home: {
        hero: {
          tagline: "Revolutionizing Digital Solutions",
          heading: "We Knock. You Win.",
          description: "Empowering your business with intelligent solutions that unlock growth, automate processes, and elevate performance—effortlessly.",
          buttons: { primary: "Start Your Project", secondary: "View Our Work" }
        },
        stats: [
          { label: "Projects Delivered", value: "100+" },
          { label: "Happy Clients", value: "50+" },
          { label: "Team Experts", value: "25+" },
          { label: "Years Experience", value: "5+" }
        ],
        techStack: {
          title: "Powered by Modern Tech",
          technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "TensorFlow", "AWS", "Docker", "Tailwind", "OpenAI"]
        },
        features: {
          title: "Why Choose Knocker AI?",
          subtitle: "We combine technical expertise with creative innovation to deliver exceptional results.",
          items: [
            { title: "Web Development", description: "Custom, responsive websites using modern frameworks.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" },
            { title: "AI Solutions", description: "Intelligent automation and custom LLM integrations.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" },
            { title: "Cloud Systems", description: "Scalable cloud infrastructure on AWS, Azure, or GCP.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" },
            { title: "Digital Growth", description: "SEO, performance marketing, and conversion optimization.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
            { title: "ERP Systems", description: "Enterprise resource planning to streamline operations.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" }
          ]
        },
        projects: {
          title: "Featured Projects",
          subtitle: "A glimpse into our recent success stories.",
          buttonText: "View All Projects",
          items: [
            { title: "AI-Powered Analytics", desc: "Predictive market trends for retail.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", tag: "AI & ML" },
            { title: "EduTech Platform", desc: "Interactive LMS with real-time video.", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80", tag: "Web Dev" },
            { title: "FinTech Wallet", desc: "Secure mobile digital wallet.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", tag: "Mobile App" }
          ]
        },
        process: {
          title: "DEVELOPMENT PROCESS",
          subtitle: "Agile methodology that delivers high-quality solutions",
          steps: [
            { title: "PLANNING", desc: "Requirements analysis and project roadmap", hex: "0x01" },
            { title: "DESIGN", desc: "UI/UX design and system architecture", hex: "0x02" },
            { title: "DEVELOPMENT", desc: "Agile coding sprints with continuous integration", hex: "0x03" },
            { title: "DEPLOYMENT", desc: "Production launch with monitoring", hex: "0x04" }
          ]
        },
        testimonials: {
          title: "What Our Clients Say",
          subtitle: "Real feedback from companies who trusted us",
          items: [
            { quote: "Knocker AI transformed our outdated system into a modern platform.", author: "Sarah J.", role: "CTO, TechFlow" },
            { quote: "Our new landing page conversion rate doubled within a month.", author: "Michael R.", role: "Marketing Director, GrowthCo" },
            { quote: "Professional, timely, and incredibly skilled.", author: "Emily T.", role: "Founder, StartUp X" }
          ]
        },
        cta: {
          title: "Ready to Transform Your Business?",
          description: "Let's collaborate to build something extraordinary.",
          buttons: { primary: "Get in Touch", secondary: "Learn About Us" }
        },
        newsletter: {
          title: "Stay Ahead of the Curve",
          description: "Subscribe for the latest insights on AI and Tech trends.",
          buttonText: "Subscribe"
        }
      },
      about: {
        hero: {
          title: "About Us",
          description: "We are passionate developers creating digital solutions."
        },
        story: {
          title: "Our Story",
          paragraphs: [
            "Founded with a vision to transform businesses through technology.",
            "We combine creativity with technical expertise to deliver exceptional results."
          ]
        }
      },
      services: {
        hero: {
          title: "Our Services",
          description: "Comprehensive digital solutions for your business needs."
        },
        services: [
          {
            title: "Web Development",
            description: "Custom websites and web applications",
            features: ["React/Next.js", "TypeScript", "Responsive Design"],
            price: "Starting at $2,999"
          }
        ]
      },
      portfolio: {
        hero: {
          title: "Our Work",
          description: "Showcasing our latest projects and success stories."
        },
        projects: [
          {
            title: "E-commerce Platform",
            description: "Modern online store with payment integration",
            image: "/project1.jpg",
            tags: ["React", "Node.js", "Stripe"],
            category: "web"
          }
        ]
      },
      contact: {
        hero: {
          title: "Get In Touch",
          description: "Ready to start your next project? Let's talk!"
        },
        contactInfo: {
          email: "hello@knocker.ai",
          phone: "+1 (555) 123-4567",
          address: "123 Tech Street, Silicon Valley, CA"
        }
      }
    };

    for (const [pageKey, data] of Object.entries(defaultContent)) {
      const content: Content = {
        id: randomUUID(),
        pageKey,
        data,
        updatedAt: new Date(),
      };
      this.content.set(pageKey, content);
    }
  }
}

export const storage = new MemStorage();

