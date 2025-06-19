const sql = require("mssql");
require("dotenv").config();

// Correct Configuration for SQL Server Named Instance
const config = {
  user: process.env.DB_USER || "sa", // SQL Server username
  password: process.env.DB_PASSWORD || "Ajaytyagi8887@", // SQL Server password
  server: "localhost", // Do NOT include instance name here
  database: process.env.DB_NAME || "AjayDB",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

// Create SQL Connection Pool
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("✅ Connected to MSSQL Database");
    return pool;
  })
  .catch((err) => {
    console.error("❌ Database Connection Failed: ", err.message);
    console.error(err);
    process.exit(1); // Stop app if connection fails
  });

module.exports = {
  sql,
  poolPromise,
};