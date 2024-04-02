import mysql from "mysql2";

// development
const dbConfig = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "123456789",
  database: "blog",
};

const connection = mysql.createConnection(dbConfig);

function handleDisconnect() {
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
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Reconnect if the MySQL connection is lost
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

// Call handleDisconnect function to establish initial connection
handleDisconnect();

export default connection;
