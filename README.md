# Stockify – Inventory Management System

A full-stack inventory management web application built using the MERN stack. Stockify provides an admin interface to manage products, categories, orders, and inventory-related information.

## 🚀 Live Demo

- **Frontend:** [Stockify – Live Application](https://stockify-frontend-b2wb.onrender.com)
- **Backend:** [Stockify – Backend Service](https://stockify-backend-w3xb.onrender.com)
- **GitHub Repository:** [Stockify – Source Code](https://github.com/nachikethjanvekar/stockify-inventory-management-system)

> **Note:** The backend is hosted on Render's free tier and may take a little time to respond after a period of inactivity.

## 📌 Overview

Stockify is designed to simplify inventory management through a user-friendly web interface. The frontend communicates with a REST API built using Node.js and Express.js, while MongoDB Atlas stores the application's data.

The project demonstrates full-stack development concepts, including authentication, database integration, API communication, and deployment.

## ✨ Features

- Admin registration and login
- Inventory dashboard
- Product management
- Category management
- Order management
- Profile management
- MongoDB Atlas database integration
- REST API-based frontend and backend communication
- JWT-based authentication

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| CSS | Styling and layout |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| JSON Web Tokens (JWT) | Authentication |
| Git & GitHub | Version control |
| Render | Application deployment |

## 📂 Project Structure

```text
inventory-management/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── index.js
│   ├── package.json
│   └── .gitignore
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project locally:

- [Node.js and npm](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and database

### 1. Clone the repository

```bash
git clone https://github.com/nachikethjanvekar/stockify-inventory-management-system.git
cd stockify-inventory-management-system
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_strong_secret_key
PORT=5000
```

Replace the placeholder values with your own credentials. Keep this file private and never commit it to GitHub.

Ensure your MongoDB Atlas database user and network access settings are configured correctly.

### 4. Start the backend

From the `backend` directory, run:

```bash
node index.js
```

The backend will connect to MongoDB Atlas and start on port `5000`, unless another port is configured.

### 5. Install frontend dependencies

Open a new terminal in the project root and run:

```bash
cd frontend
npm install
```

### 6. Start the frontend

```bash
npm start
```

The React application will normally be available at:

http://localhost:3000

Keep both terminals running while using the locally hosted application.

**Note:** If the frontend is configured to use the deployed Render API, update its API base URL to `http://localhost:5000` when you want to run the backend locally.

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Private secret used for JWT authentication |
| `PORT` | Port on which the backend server runs |

## 🌐 Deployment

Stockify is deployed using Render:

- The React frontend is hosted as a Static Site.
- The Node.js and Express.js backend is hosted as a Web Service.
- MongoDB Atlas provides cloud database storage.

## 📚 Learning Outcomes

This project provides practical experience with:

- React frontend development
- REST API development using Express.js
- MongoDB Atlas integration
- JWT-based authentication
- Frontend and backend integration
- Environment variable configuration
- Git and GitHub version control
- Full-stack application deployment

## 🔒 Security

- Never commit `.env` files or database credentials.
- Use a strong, private JWT secret.
- Keep database passwords out of source code.
- Validate user input and protect sensitive API routes.

## 👨‍💻 Author

**Nachiketh Janvekar**

Full-Stack Web Development Project

---

If you find this project useful, feel free to explore the source code and suggest improvements.
