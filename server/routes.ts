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
      await storage.markMessageAsRead(req.params.id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to mark message as read" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
