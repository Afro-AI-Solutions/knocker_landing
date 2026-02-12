import mysql from 'mysql2/promise';
import fs from 'fs';

async function setupMySQL() {
  const passwords = ['', 'root', 'password', '123456', 'admin', '0924475152@OS'];
  
  console.log('Trying to connect to MySQL with different passwords...');
  
  for (const password of passwords) {
    try {
      console.log(`Trying password: "${password || 'empty'}"`);
      
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: password,
        port: 3306
      });
      
      console.log('✅ Connected successfully!');
      
      // Create database
      await connection.execute('CREATE DATABASE IF NOT EXISTS knocker_db');
      console.log('✅ Database "knocker_db" created/verified');
      
      // Update .env file
      const envContent = `# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=${password}
DB_NAME=knocker_db

# Server Configuration
PORT=5001
NODE_ENV=development`;
      
      fs.writeFileSync('.env', envContent);
      console.log('✅ .env file updated');
      
      await connection.end();
      console.log('✅ Setup completed successfully!');
      console.log('Now run: npm run db:push');
      return;
      
    } catch (error) {
      console.log(`❌ Failed with password: "${password || 'empty'}"`);
    }
  }
  
  console.log('❌ Could not connect with any common passwords.');
  console.log('Please check your MySQL installation or reset the root password.');
}

setupMySQL().catch(console.error);