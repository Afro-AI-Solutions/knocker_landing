import { type User, type InsertUser, type Message, type InsertMessage, type Content, type InsertContent } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
  markMessageAsRead(id: string): Promise<void>;
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
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = randomUUID();
    const message: Message = {
      ...insertMessage,
      id,
      isRead: false,
      createdAt: new Date(),
    };
    this.messages.set(id, message);
    return message;
  }

  async getMessages(): Promise<Message[]> {
    return Array.from(this.messages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async markMessageAsRead(id: string): Promise<void> {
    const message = this.messages.get(id);
    if (message) {
      message.isRead = true;
      this.messages.set(id, message);
    }
  }

  async getMessageStats(): Promise<{ total: number; unread: number; read: number }> {
    const messages = Array.from(this.messages.values());
    const total = messages.length;
    const unread = messages.filter(m => !m.isRead).length;
    const read = messages.filter(m => m.isRead).length;
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
          tagline: "Professional Web Solutions",
          heading: "Build Amazing Websites",
          description: "We create modern, responsive websites that drive results for your business.",
          image: "/hero-image.jpg",
          buttons: [
            { text: "Get Started", href: "/contact", variant: "primary" },
            { text: "View Portfolio", href: "/portfolio", variant: "secondary" }
          ]
        },
        stats: [
          { label: "Projects Completed", value: "50+" },
          { label: "Happy Clients", value: "30+" },
          { label: "Years Experience", value: "5+" },
          { label: "Team Members", value: "10+" }
        ],
        techStack: {
          title: "Technologies We Use",
          technologies: [
            { name: "React", icon: "react", color: "#61DAFB" },
            { name: "TypeScript", icon: "typescript", color: "#3178C6" },
            { name: "Node.js", icon: "nodejs", color: "#339933" },
            { name: "MySQL", icon: "mysql", color: "#4479A1" }
          ]
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
