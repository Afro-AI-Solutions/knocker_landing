import { config } from 'dotenv';
config();

import mysql from 'mysql2/promise';

async function testConnection() {
  try {
    console.log('Testing database connection...');
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '***' : 'empty');
    console.log('DB_NAME:', process.env.DB_NAME);
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'knocker_db',
    });
    
    console.log('✅ Database connection successful!');
    
    // Test query
    const [rows] = await connection.execute('SELECT 1 as test');
    console.log('✅ Query test successful:', rows);
    
    await connection.end();
    console.log('✅ Backend will work with database');
    
  } catch (error) {
    console.log('❌ Database connection failed:', error.message);
    console.log('❌ Backend will NOT work with database');
  }
}

testConnection();