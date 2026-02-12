import { config } from "dotenv";
config();

import { eq } from "drizzle-orm";
import { db } from "./database";
import { users } from "@shared/schema";
import bcrypt from "bcrypt";

async function initializeDatabase() {
  try {
    console.log("Initializing database...");
    
    // Create admin user if not exists
    const existingAdmin = await db.select().from(users).where(eq(users.username, "admin")).limit(1);
    
    if (existingAdmin.length === 0) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await db.insert(users).values({
        username: "admin",
        password: hashedPassword,
      });
      console.log("Admin user created successfully");
    } else {
      console.log("Admin user already exists");
    }
    
    console.log("Database initialization completed");
  } catch (error) {
    console.error("Database initialization failed:", error);
    process.exit(1);
  }
}

initializeDatabase();