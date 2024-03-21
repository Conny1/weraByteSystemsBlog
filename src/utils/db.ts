import mysql from "mysql2";

// Create the connection to database
export  const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port:3306,
  password:'123456789',
  database: 'blog',
});
