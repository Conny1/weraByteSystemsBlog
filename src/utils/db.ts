import mysql from "mysql2";

// development
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "123456789",
  database: "blog",
});
