const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
  let connection;
  
  try {
    console.log('🔄 Connecting to MySQL...');
    
    // First connect without database to create it
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
    });
    
    console.log('✅ Connected to MySQL server');
    
    // Create database
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'knocker_db'}`);
    console.log(`✅ Database '${process.env.DB_NAME || 'knocker_db'}' created/verified`);
    
    // Use the database
    await connection.execute(`USE ${process.env.DB_NAME || 'knocker_db'}`);
    
    // Create tables
    console.log('🔄 Creating tables...');
    
    // Users table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password TEXT NOT NULL
      )
    `);
    
    // Messages table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        is_read BOOLEAN DEFAULT FALSE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      )
    `);
    
    // Content table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS content (
        id INT AUTO_INCREMENT PRIMARY KEY,
        page_key VARCHAR(50) NOT NULL UNIQUE,
        data JSON NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
      )
    `);
    
    console.log('✅ Tables created successfully');
    
    // Insert default content
    console.log('🔄 Inserting default content...');
    
    const defaultContent = [
      ['home', JSON.stringify({
        hero: {
          tagline: "Professional Web Solutions",
          heading: "Build Amazing Websites",
          description: "We create modern, responsive websites that drive results for your business."
        },
        stats: [
          { label: "Projects Completed", value: "50+" },
          { label: "Happy Clients", value: "30+" },
          { label: "Years Experience", value: "5+" },
          { label: "Team Members", value: "10+" }
        ]
      })]
    ];
    
    for (const [pageKey, data] of defaultContent) {
      await connection.execute(
        'INSERT IGNORE INTO content (page_key, data) VALUES (?, ?)',
        [pageKey, data]
      );
    }
    
    console.log('✅ Default content inserted');
    console.log('🎉 Database setup completed successfully!');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

setupDatabase();