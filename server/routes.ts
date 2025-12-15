import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Invalid data" });
    }
  });

  // Admin routes for messages
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const messages = await storage.getMessages();
      const stats = await storage.getMessageStats();
      res.json({ messages, stats });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  app.patch("/api/admin/contacts/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markMessageAsRead(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to mark message as read" });
    }
  });

  // Content management routes
  app.get("/api/content", async (req, res) => {
    try {
      const allContent = await storage.getAllContent();
      const contentMap: Record<string, any> = {};

      allContent.forEach(item => {
        try {
          contentMap[item.pageKey] = JSON.parse(item.data);
        } catch (e) {
          contentMap[item.pageKey] = {};
        }
      });

      res.json(contentMap);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch content" });
    }
  });

  app.get("/api/content/:pageKey", async (req, res) => {
    try {
      const content = await storage.getContent(req.params.pageKey);
      if (content) {
        res.json(JSON.parse(content.data));
      } else {
        res.status(404).json({ error: "Content not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch content" });
    }
  });

  app.post("/api/content/:pageKey", async (req, res) => {
    try {
      const result = await storage.setContent(req.params.pageKey, req.body);
      res.json({ success: true, updatedAt: result.updatedAt });
    } catch (error) {
      res.status(500).json({ error: "Failed to save content" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
