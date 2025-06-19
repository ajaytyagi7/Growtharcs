const { poolPromise } = require('../connection');
const sql = require('mssql');

// ✅ Create or update the Users table
async function initializeTable() {
  const createTableQuery = `
    IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Users')
    BEGIN
      CREATE TABLE Users (
        id INT IDENTITY(1,1) PRIMARY KEY,
        FirstName NVARCHAR(255) NOT NULL,
        LastName NVARCHAR(255) NOT NULL,
        Email NVARCHAR(255) NOT NULL,
        Phone NVARCHAR(50) NOT NULL,
        SalonName NVARCHAR(255) NOT NULL,
        Password NVARCHAR(255) NOT NULL,
        CreatedAt DATETIME DEFAULT GETDATE(),
        IsActive BIT DEFAULT 1
      )
    END
  `;

  try {
    const pool = await poolPromise;
    await pool.request().query(createTableQuery);
    console.log("✅ Users table initialized");
  } catch (error) {
    console.error("❌ Error initializing table:", error.message);
    throw error;
  }
}

// ✅ Get all users
async function getAllUsers() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Users');
    return result.recordset;
  } catch (error) {
    console.error("❌ Error fetching users:", error.message);
    throw error;
  }
}

// ✅ Add a new customer (with correct field names)
async function addCustomer(data) {
  try {
    const pool = await poolPromise;
    const request = pool.request();

    // 🧠 Make sure these names match exactly with frontend (case-sensitive)
     request.input('FirstName', sql.NVarChar, data.firstName);
    request.input('LastName', sql.NVarChar, data.lastName);
    request.input('Email', sql.NVarChar, data.email);
    request.input('Phone', sql.NVarChar, data.phone);
    request.input('SalonName', sql.NVarChar, data.salonName);
    request.input('Password', sql.NVarChar, data.password);

    await request.query(`
      INSERT INTO Users (FirstName, LastName, Email, Phone, SalonName, Password)
      VALUES (@FirstName, @LastName, @Email, @Phone, @SalonName, @Password)
    `);

    return { success: true, message: "User added successfully" };
  } catch (error) {
    console.error("❌ Error adding user:", error.message);
    throw error;
  }
}

// ✅ Optional: Get user by email
async function getUserByEmail(email) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('Email', sql.NVarChar, email)
      .query('SELECT * FROM Users WHERE Email = @Email');
    return result.recordset[0];
  } catch (error) {
    console.error("❌ Error fetching user by email:", error.message);
    throw error;
  }
}

module.exports = {
  initializeTable,
  getAllUsers,
  addCustomer,
  getUserByEmail
};
