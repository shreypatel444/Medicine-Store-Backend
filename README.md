# 💊 PharmaNet - Online Medicine Store

PharmaNet is a full-featured eCommerce web application for selling and managing medicines online. Built with the **MERN Stack**, it offers a seamless experience for users and admins with a clean UI, secure backend, and powerful features.

---

## 🚀 Features

### 🛒 User Features
- ✅ Responsive and user-friendly UI
- 🧾 Browse medicines with search and filters
- ➕ Add to cart functionality using Redux Toolkit
- 🔐 User authentication (signup/login)
- 👤 Profile view and edit
- 📦 View and manage orders
- 📬 Contact form messaging

### 🛠️ Admin Features
- 📋 Manage product listings (CRUD)
- 📊 View customer orders
- 🧑‍💼 Manage user roles
- 📦 Add, update, or delete medicines

---

## 🧰 Tech Stack

- **Frontend**: React.js, Redux Toolkit, HTML, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: RESTful APIs
- **Version Control**: Git, GitHub

---

## 🖥️ Backend Overview

The backend is built with **Node.js**, **Express.js**, and **MongoDB**, providing a secure and scalable REST API for the PharmaNet platform.

### 🔐 Backend Features
- User authentication with JWT and bcrypt
- Admin role-based access control
- API routes for medicines, users, orders, and messages
- MongoDB database models using Mongoose
- Error handling and middleware setup
- Environment variable support using `.env`

---

### ⚙️ Backend Setup

```bash
cd backend
npm install
npm run dev
```
---
## .env file
- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret

---

📸 Screenshots

![Screenshot 2025-04-08 083704](https://github.com/user-attachments/assets/2b1950ff-670f-49ab-b290-76e37fcd6de6)
![Screenshot 2025-04-08 083717](https://github.com/user-attachments/assets/b18161f7-96ab-47dc-ac4a-f38025ea4c27)
![Screenshot 2025-04-08 101148](https://github.com/user-attachments/assets/2f0f929e-2b3d-41dc-863a-8dfa67540b0e)


---

⚙️ Installation
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/Medicine-Store-Frontend.git
git clone https://github.com/your-username/Medicine-Store-Backend.git

cd frontend
npm install

cd ../backend
npm install

# In /backend
npm run dev

# In /frontend
npm start

---

📝 License
This project is licensed under the MIT License.
