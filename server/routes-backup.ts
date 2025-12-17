import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";

// Validation schemas
const messageSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000)
});

const pageKeySchema = z.enum(["home", "about", "services", "portfolio", "contact"]);

export async function registerRoutes(app: Express): Promise<Server> {
  // Content Management API
  
  // Get all content
  app.get("/api/content", async (req, res) => {
    try {
      const content = await storage.getAllContent();
      res.json(content);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch content",
        error: "DATABASE_ERROR",
        timestamp: new Date().toISOString()
      });
    }
  });

  // Get specific page content
  app.get("/api/content/:pageKey", async (req, res) => {
    try {
      const pageKey = pageKeySchema.parse(req.params.pageKey);
      const content = await storage.getContentByPage(pageKey);
      
      if (!content) {
        return res.status(404).json({
          success: false,
          message: "Page content not found",
          error: "CONTENT_NOT_FOUND",
          timestamp: new Date().toISOString()
        });
      }
      
      res.json(content);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid page key",
          error: "INVALID_PAGE_KEY",
          timestamp: new Date().toISOString()
        });
      }
      res.status(500).json({
        success: false,
        message: "Failed to fetch page content",
        error: "DATABASE_ERROR",
        timestamp: new Date().toISOString()
      });
    }
  });

  // Save page content
  app.post("/api/content/:pageKey", async (req, res) => {
    try {
      const pageKey = pageKeySchema.parse(req.params.pageKey);
      const data = req.body;
      
      if (!data || typeof data !== 'object') {
        return res.status(400).json({
          success: false,
          message: "Invalid content data",
          error: "VALIDATION_FAILED",
          timestamp: new Date().toISOString()
        });
      }
      
      await storage.saveContent(pageKey, data);
      
      res.json({
        success: true,
        message: "Content saved successfully",
        pageKey,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid page key",
          error: "INVALID_PAGE_KEY",
          timestamp: new Date().toISOString()
        });
      }
      res.status(500).json({
        success: false,
        message: "Failed to save content",
        error: "DATABASE_ERROR",
        timestamp: new Date().toISOString()
      });
    }
  });

  // Messages API
  
  // Get all messages
  app.get("/api/messages", async (req, res) => {
    try {
      const messages = await storage.getMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch messages",
        error: "DATABASE_ERROR",
        timestamp: new Date().toISOString()
      });
    }
  });

  // Submit new message
  app.post("/api/messages", async (req, res) => {
    try {
      const validatedData = messageSchema.parse(req.body);
      const message = await storage.createMessage({
        ...validatedData,
        subject: validatedData.message.substring(0, 50) + "..." // Auto-generate subject
      });
      
      res.status(201).json({
        success: true,
        message: "Message submitted successfully",
        id: message.id,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          error: "VALIDATION_FAILED",
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
            code: err.code
          })),
          timestamp: new Date().toISOString()
        });
      }
      res.status(500).json({
        success: false,
        message: "Failed to submit message",
        error: "DATABASE_ERROR",
        timestamp: new Date().toISOString()
      });
    }
  });

  // Mark message as read
  app.put("/api/messages/:id/read", async (req, res) => {
    try {
      await storage.markMessageAsRead(req.params.id);
      res.json({
        success: true,
        message: "Message marked as read",
        id: req.params.id,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to mark message as read",
        error: "DATABASE_ERROR",
        timestamp: new Date().toISOString()
      });
    }
  });

  // Legacy endpoints for backward compatibility
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Invalid data" });
    }
  });

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
