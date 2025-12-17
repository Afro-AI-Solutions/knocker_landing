require('dotenv').config();
const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('✅ Database connection successful');
    
    // Test if tables exist and have data
    const [contentRows] = await connection.execute('SELECT COUNT(*) as count FROM content');
    const [messageRows] = await connection.execute('SELECT COUNT(*) as count FROM messages');
    const [userRows] = await connection.execute('SELECT COUNT(*) as count FROM users');
    
    console.log(`📊 Database Status:`);
    console.log(`   Content pages: ${contentRows[0].count}`);
    console.log(`   Messages: ${messageRows[0].count}`);
    console.log(`   Users: ${userRows[0].count}`);
    
    await connection.end();
    return true;
  } catch (error) {
    console.log('❌ Database connection failed:', error.message);
    return false;
  }
}

testConnection();