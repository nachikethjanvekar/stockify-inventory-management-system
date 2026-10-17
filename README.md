# Inventory Management System

A full-stack web application designed to manage inventory through a user-friendly interface. This project demonstrates full-stack web development using React, Node.js, Express.js, and MongoDB.

## Overview

The Inventory Management System provides a web interface for managing inventory-related data. It includes an admin authentication system and a frontend connected to a backend API.

## Tech Stack

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JSON Web Tokens (JWT)
- **API Communication:** HTTP requests

## Features

- Admin registration and login
- Inventory dashboard
- Product and category management
- Order management
- Profile management
- MongoDB database integration
- REST API-based frontend and backend communication

## Project Structure

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

*Note: The folder structure above is representative. Your actual project may contain additional files and folders.*

## Prerequisites

Before running the project, make sure you have installed:

- [Node.js and npm](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and database

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd inventory-management
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your repository's URL.

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` directory with the following variables:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_strong_secret_key
PORT=5000
```

Replace the placeholder values with your own MongoDB Atlas connection string and a strong, private JWT secret.

Ensure your MongoDB Atlas database user and network access settings are configured correctly.

### 4. Start the backend server

From the `backend` directory, run:

```bash
npm start
```

The backend should start on port `5000` after successfully connecting to MongoDB Atlas.

### 5. Install frontend dependencies

Open a **new terminal** in the project root and run:

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

Keep both the backend and frontend terminals running while using the application.

## Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret used for JWT authentication |
| `PORT` | Backend server port |

## Security

- Never commit your actual `.env` file or database credentials.
- Keep your JWT secret private and use a strong value.
- Do not expose database passwords in source code or public repositories.

## Learning Outcomes

This project provides practical experience with:

- React frontend development
- Backend API development using Express.js
- MongoDB Atlas integration
- Authentication and protected routes
- Frontend-backend communication
- Git and GitHub version control

## Future Improvements

- Deploy the application for public access.
- Add automated tests and stronger input validation.
- Improve inventory reporting and low-stock alerts.
- Enhance error handling and user experience.

## Author

**Nachiketh Janvekar**

Full-Stack Web Development Project

---

If you find this project useful, feel free to explore the code and suggest improvements.
