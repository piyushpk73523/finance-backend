💰 Finance Data Processing and Access Control Backend
📌 Overview

This project is a backend system for a finance dashboard that manages financial records, user roles, and access control. It is built using the MERN stack (Node.js, Express, MongoDB).

The system demonstrates backend architecture, API design, role-based access control (RBAC), and data aggregation for analytics.

🚀 Features

👤 User and Role Management
Create and manage users
Assign roles:
Viewer → Read-only access
Analyst → View records + dashboard insights
Admin → Full access (CRUD + user management)
Manage user status (active/inactive)

🔐 Authentication & Authorization
JWT-based authentication
Secure API access using tokens
Role-based access control using middleware

💰 Financial Records Management
Create, read, update, delete records
Record fields:
Amount
Type (income/expense)
Category
Date
Notes
Filtering by type and category
Pagination support

📊 Dashboard Summary APIs
Total income
Total expenses
Net balance
Category-wise aggregation
Recent transactions

🛠️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JWT (Authentication)

🌐 API Endpoints
🔑 Auth
POST /api/auth/register
POST /api/auth/login

👤 Users (Admin Only)
GET /api/users
PATCH /api/users/:id

💰 Records
GET /api/records
POST /api/records (Admin)
PUT /api/records/:id (Admin)
DELETE /api/records/:id (Admin)

📊 Dashboard
GET /api/dashboard/summary
⚙️ Setup Instructions
1️⃣ Clone the repository
git clone (https://github.com/piyushpk73523/finance-backend.git)
cd finance-backend
2️⃣ Install dependencies
npm install
3️⃣ Create .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
4️⃣ Run the server
npm run dev
🧪 Example API Request
Create Record
POST /api/records
Authorization: Bearer <JWT_TOKEN>
{
  "amount": 1000,
  "type": "income",
  "category": "salary",
  "notes": "Monthly salary"
}

📌 Assumptions
Only Admin can create, update, and delete records
Analyst can view records and dashboard data
Viewer has read-only access
MongoDB is used as the primary database


⭐ Optional Enhancements
Swagger API documentation
Deployment (Render / Railway)
Unit & integration testing
Rate limiting


🎯 Conclusion

This project focuses on clean backend design, proper API structuring, and role-based access control. It demonstrates how financial data can be managed securely and efficiently for a dashboard system.