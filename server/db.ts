import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import * as schema from "@shared/schema";

// MySQL connection configuration
const connectionConfig = {
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "knocker_db",
  multipleStatements: true,
};

// Create MySQL connection pool
const connection = mysql.createPool(connectionConfig);

// Create Drizzle instance
export const db = drizzle(connection, { schema, mode: "default" });

// Run migrations on startup
try {
    await migrate(db, { migrationsFolder: "./migrations" });
    console.log("✅ Database migrations completed");
} catch (error) {
    console.warn("⚠️ No migrations found or migration failed:", error);
}
