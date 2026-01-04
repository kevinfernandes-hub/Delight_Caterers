# 🍽️ Delight Caterers – Full Stack Catering Management System

Delight Caterers is a full-stack web application designed to manage catering operations such as orders, customers, menu items, billing, and invoice printing.  
The project includes a **customer-facing website**, an **admin dashboard**, and a **backend API with SQLite database**.

This project is built using **modern web technologies** and follows a clean, scalable folder structure.

---

## 🚀 Features Implemented (Till Now)

### 🌐 Frontend (Next.js)
- Customer Website
  - Home page
  - Menu page
  - Contact page (business details included)
- Admin Dashboard
  - Sidebar layout
  - Orders page
  - Bills page
  - Bill detail view
  - Invoice / Print page (A4 printable, no sidebar)
- Clean UI using **CSS Modules**
- Proper routing using **Next.js App Router**
- Print-friendly invoice layout

### 🔧 Backend (Node.js + Express)
- REST API built with Express
- SQLite database integration
- Modular backend structure:
  - Routes
  - Controllers
  - Models
- APIs implemented:
  - `/api/orders`
  - `/api/bills`
  - `/api/bills/:id`
  - `/api/customers`
  - `/api/menu`
- Sample data inserted into database

### 🗄️ Database
- SQLite database
- Tables created:
  - `orders`
  - `bills`
  - `customers`
  - `menu`
- Real sample data for testing UI and APIs

### 🧾 Invoice Printing
- Dedicated print route outside admin layout
- Clean A4 invoice format
- Sidebar and buttons hidden during print
- Auto `window.print()` support

---

## 🛠️ Tech Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **CSS Modules**
- React Hooks

### Backend
- **Node.js**
- **Express.js**
- **SQLite**
- CORS enabled for local development

### Tools
- Git & GitHub
- DB Browser for SQLite
- PowerShell (Windows)

---

## 📁 Project Structure

Delight_Caterers/
│
├── app/ # Next.js frontend (App Router)
│ ├── admin/ # Admin dashboard pages
│ ├── print/ # Invoice print pages (no layout)
│ └── ...
│
├── backend/ # Backend API
│ ├── server.js
│ ├── db/
│ │ └── database.sqlite
│ ├── config/
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── middleware/
│
├── components/ # Reusable frontend components
├── public/ # Static assets
├── package.json
└── README.md

yaml
Copy code

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/kevinfernandes-hub/Delight_Caterers.git
cd Delight_Caterers
2️⃣ Run Frontend (Next.js)
bash
Copy code
npm install
npm run dev
Frontend will start at:

arduino
Copy code
http://localhost:3000
3️⃣ Run Backend (Express)
Open a new terminal:

bash
Copy code
cd backend
npm install
node server.js
Backend will run at:

arduino
Copy code
http://localhost:5000
4️⃣ Test Backend APIs
Open in browser or Postman:

bash
Copy code
http://localhost:5000/api/orders
http://localhost:5000/api/bills
http://localhost:5000/api/customers
http://localhost:5000/api/menu
🧪 Database Setup
SQLite database file:

bash
Copy code
backend/db/database.sqlite
Tables created manually using SQL

Sample data inserted for testing

DB can be viewed/edited using DB Browser for SQLite

🔒 Environment Notes
No authentication implemented yet

No environment variables required for now

CORS enabled for local frontend-backend communication
 
 📌 Current Status

✅ UI completed
✅ Backend structure completed
✅ Database setup completed
✅ Sample data added
🔄 Frontend-backend integration in progress
🔒 Authentication pending
🚀 Deployment pending

🔜 Planned Enhancements

Connect frontend pages to live backend APIs

Add Admin authentication

Add create/update APIs (POST, PUT)

Improve validations & error handling

Deploy frontend and backend

Migrate SQLite → PostgreSQL (optional)


👨‍💻 Author

Kevin Fernandes
