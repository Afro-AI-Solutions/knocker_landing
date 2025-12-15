import { type User, type InsertUser, type Message, type InsertMessage, type Content, type InsertContent, users, messages, content } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

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
  getContent(pageKey: string): Promise<Content | undefined>;
  setContent(pageKey: string, data: any): Promise<Content>;
  getAllContent(): Promise<Content[]>;
}

export class DbStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    return db.select().from(users).where(eq(users.id, id)).get();
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

  async getContent(pageKey: string): Promise<Content | undefined> {
    return db.select().from(content).where(eq(content.pageKey, pageKey)).get();
  }

  async setContent(pageKey: string, data: any): Promise<Content> {
    const existing = await this.getContent(pageKey);

    if (existing) {
      // Update existing
      const result = db.update(content)
        .set({
          data: JSON.stringify(data),
          updatedAt: new Date()
        })
        .where(eq(content.pageKey, pageKey))
        .returning()
        .get();
      return result;
    } else {
      // Insert new
      const result = db.insert(content)
        .values({
          pageKey,
          data: JSON.stringify(data),
          updatedAt: new Date()
        })
        .returning()
        .get();
      return result;
    }
  }

  async getAllContent(): Promise<Content[]> {
    return db.select().from(content).all();
  }
}

export const storage = new DbStorage();

