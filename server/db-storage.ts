import { eq } from "drizzle-orm";
import { db } from "./database";
import { users, messages, content } from "@shared/schema";
import { type User, type InsertUser, type Message, type InsertMessage, type Content, type InsertContent } from "@shared/schema";
import { type IStorage, MemStorage } from "./storage";

export class DatabaseStorage implements IStorage {
  private fallback = new MemStorage();
  private dbConnected = false;

  constructor() {
    this.testConnection();
  }

  private async testConnection() {
    try {
      await db.select().from(users).limit(1);
      this.dbConnected = true;
      console.log('✅ MySQL Database connected successfully');
    } catch (error: any) {
      console.log('❌ Database connection failed:', error.message);
      console.log('Using memory storage as fallback');
      this.dbConnected = false;
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    if (!this.dbConnected) return this.fallback.getUser(id);
    try {
      const result = await db.select().from(users).where(eq(users.id, parseInt(id))).limit(1);
      return result[0];
    } catch (error) {
      return this.fallback.getUser(id);
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!this.dbConnected) return this.fallback.getUserByUsername(username);
    try {
      const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
      return result[0];
    } catch (error) {
      return this.fallback.getUserByUsername(username);
    }
  }

  async createUser(user: InsertUser): Promise<User> {
    if (!this.dbConnected) return this.fallback.createUser(user);
    try {
      const result = await db.insert(users).values(user);
      const newUser = await db.select().from(users).where(eq(users.id, result[0].insertId)).limit(1);
      return newUser[0];
    } catch (error) {
      return this.fallback.createUser(user);
    }
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    if (!this.dbConnected) return this.fallback.createMessage(message);
    try {
      const result = await db.insert(messages).values(message);
      const newMessage = await db.select().from(messages).where(eq(messages.id, result[0].insertId)).limit(1);
      return newMessage[0];
    } catch (error) {
      return this.fallback.createMessage(message);
    }
  }

  async getMessages(): Promise<Message[]> {
    if (!this.dbConnected) return this.fallback.getMessages();
    try {
      return await db.select().from(messages).orderBy(messages.createdAt);
    } catch (error) {
      return this.fallback.getMessages();
    }
  }

  async markMessageAsRead(id: string): Promise<void> {
    if (!this.dbConnected) return this.fallback.markMessageAsRead(id);
    try {
      await db.update(messages).set({ isRead: true }).where(eq(messages.id, parseInt(id)));
    } catch (error) {
      return this.fallback.markMessageAsRead(id);
    }
  }

  async getMessageStats(): Promise<{ total: number; unread: number; read: number }> {
    if (!this.dbConnected) return this.fallback.getMessageStats();
    try {
      const allMessages = await db.select().from(messages);
      const total = allMessages.length;
      const unread = allMessages.filter(m => !m.isRead).length;
      const read = allMessages.filter(m => m.isRead).length;
      return { total, unread, read };
    } catch (error) {
      return this.fallback.getMessageStats();
    }
  }

  async getAllContent(): Promise<Record<string, any>> {
    if (!this.dbConnected) return this.fallback.getAllContent();
    try {
      const allContent = await db.select().from(content);
      const result: Record<string, any> = {};
      for (const item of allContent) {
        result[item.pageKey] = item.data;
      }
      return result;
    } catch (error) {
      return this.fallback.getAllContent();
    }
  }

  async getContentByPage(pageKey: string): Promise<any | undefined> {
    if (!this.dbConnected) return this.fallback.getContentByPage(pageKey);
    try {
      const result = await db.select().from(content).where(eq(content.pageKey, pageKey)).limit(1);
      return result[0]?.data;
    } catch (error) {
      return this.fallback.getContentByPage(pageKey);
    }
  }

  async saveContent(pageKey: string, data: any): Promise<Content> {
    if (!this.dbConnected) return this.fallback.saveContent(pageKey, data);
    try {
      // Try to update first
      const existing = await db.select().from(content).where(eq(content.pageKey, pageKey)).limit(1);
      
      if (existing.length > 0) {
        await db.update(content).set({ data, updatedAt: new Date() }).where(eq(content.pageKey, pageKey));
        const updated = await db.select().from(content).where(eq(content.pageKey, pageKey)).limit(1);
        return updated[0];
      } else {
        // Insert new
        const result = await db.insert(content).values({ pageKey, data });
        const newContent = await db.select().from(content).where(eq(content.id, result[0].insertId)).limit(1);
        return newContent[0];
      }
    } catch (error) {
      return this.fallback.saveContent(pageKey, data);
    }
  }
}