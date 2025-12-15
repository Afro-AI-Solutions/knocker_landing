import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import * as schema from "@shared/schema";
import { existsSync, mkdirSync } from "fs";
import { dirname } from "path";

const dbPath = "./data/knocker.db";

// Ensure the data directory exists
const dir = dirname(dbPath);
if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
}

// Create SQLite database connection
const sqlite = new Database(dbPath);
sqlite.pragma("journal_mode = WAL");

// Create Drizzle instance
export const db = drizzle(sqlite, { schema });

// Run migrations on startup
try {
    migrate(db, { migrationsFolder: "./migrations" });
    console.log("✅ Database migrations completed");
} catch (error) {
    console.warn("⚠️ No migrations found or migration failed:", error);
}
