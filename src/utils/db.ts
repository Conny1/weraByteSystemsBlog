import mysql from "mysql2";

// Create the connection to database == Production
export const dbConfig = {
  host: "localhost",
  user: "efeedbac_root",
  port: 3306,
  password: "eq$Z)1h*h#st",
  database: "efeedbac_blog",
};

const connection = mysql.createConnection(dbConfig);

export function handleDisconnect() {
  // Create a new MySQL connection

  // Connect to MySQL
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
    } else {
      console.log("Connected to MySQL");
    }
  });

  // Handle MySQL connection errors
  connection.on("error", (err) => {
    console.error("MySQL connection error:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST" || err.code === "ECONNRESET") {
      // Reconnect if the MySQL connection is lost
      return handleDisconnect();
    } else {
      throw err;
    }
  });
}

// Call handleDisconnect function to establish initial connection
handleDisconnect();

export default connection;
