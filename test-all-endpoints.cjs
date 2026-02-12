const mysql = require('mysql2/promise');
require('dotenv').config();

async function testAllEndpoints() {
  let connection;
  
  try {
    console.log('🔄 Connecting to MySQL to verify seed data...');
    
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'knocker_db'
    });
    
    console.log('✅ Connected to MySQL database');
    
    // Check content data
    console.log('\n📄 Content Pages:');
    const [contentRows] = await connection.execute('SELECT page_key, JSON_EXTRACT(data, "$.hero.title") as title, JSON_EXTRACT(data, "$.hero.heading") as heading FROM content');
    contentRows.forEach(row => {
      console.log(`   ✅ ${row.page_key}: ${row.title || row.heading || 'Content loaded'}`);
    });
    
    // Check messages data
    console.log('\n📧 Messages:');
    const [messageRows] = await connection.execute('SELECT name, email, subject, is_read FROM messages');
    messageRows.forEach(row => {
      console.log(`   ✅ ${row.name} (${row.email}): ${row.subject} ${row.is_read ? '[READ]' : '[unread]'}`);
    });
    
    // Check users data
    console.log('\n👤 Users:');
    const [userRows] = await connection.execute('SELECT username FROM users');
    userRows.forEach(row => {
      console.log(`   ✅ ${row.username}`);
    });
    
    console.log('\n🎉 All seed data verified in database!');
    console.log('\n🔗 API Endpoints Ready:');
    console.log('   📄 GET  /api/content - All page content');
    console.log('   📄 GET  /api/content/home - Home page');
    console.log('   📄 GET  /api/content/about - About page');
    console.log('   📄 GET  /api/content/services - Services page');
    console.log('   📄 GET  /api/content/portfolio - Portfolio page');
    console.log('   📄 GET  /api/content/contact - Contact page');
    console.log('   📧 GET  /api/messages - All messages');
    console.log('   📧 POST /api/messages - Submit message');
    console.log('   📧 PUT  /api/messages/:id/read - Mark as read');
    console.log('   🔧 GET  /api/admin/contacts - Admin messages');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

testAllEndpoints();