import { sql } from "drizzle-orm";
import { mysqlTable, varchar, text, int, boolean, timestamp } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const messages = mysqlTable("messages", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const content = mysqlTable("content", {
  id: int("id").primaryKey().autoincrement(),
  pageKey: varchar("page_key", { length: 50 }).notNull().unique(), // 'home', 'about', 'services', 'portfolio', 'contact'
  data: text("data").notNull(), // JSON string of page content
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMessageSchema = createInsertSchema(messages).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export const insertContentSchema = createInsertSchema(content).pick({
  pageKey: true,
  data: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertContent = z.infer<typeof insertContentSchema>;
export type Content = typeof content.$inferSelect;
