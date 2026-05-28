# Fullstack Journey 🚀

A comprehensive learning journey through full-stack development, covering Node.js fundamentals, Express.js backend development, and REST API creation. This repository documents the progression from basic Node.js concepts to building production-ready Express.js applications with authentication and database integration.

**Author:** Uparjan Gautam  
**License:** MIT  
**Repository:** [GitHub - Fullstack-learning-journey](https://github.com/Gobler-code/Fullstack-learning-journey)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Modules](#project-modules)
- [Key Features](#key-features)

---

## Overview

This project is a self-paced learning journey designed to master full-stack development. It includes:

- **Node.js Core Concepts**: HTTP servers, URL parsing, core modules
- **Express.js Backend**: Routing, middleware, error handling
- **REST APIs**: CRUD operations, authentication flows
- **Database Integration**: MongoDB with Mongoose ODM
- **Security**: JWT-based authentication, password hashing with bcryptjs
- **API Testing**: Postman collections for testing endpoints

---

## Project Structure

```
fullstack-journey/
├── expressjs/                    # Express.js backend application
│   ├── server.js                # Main server file with Express app setup
│   ├── package.json             # Express dependencies (Express, Mongoose, JWT, bcryptjs)
│   ├── config/
│   │   └── db.js               # MongoDB connection configuration
│   ├── controllers/
│   │   ├── authController.js   # Authentication logic (register, login)
│   │   └── noteController.js   # Note CRUD operations
│   ├── models/
│   │   ├── user.js             # User schema and model
│   │   └── note.js             # Note schema and model
│   ├── routes/
│   │   ├── authRoutes.js       # Auth endpoints (register, login)
│   │   └── noteRoutes.js       # Note endpoints (CRUD)
│   ├── middleware/
│   │   ├── authMiddleware.js   # JWT token verification
│   │   └── errorMiddleware.js  # Global error handler
│   ├── expressServers/         # Multiple server examples
│   │   ├── server.js
│   │   ├── server2.js
│   │   └── server3.js
│   └── personal/
│       └── backend_learning_guide.md  # Comprehensive learning notes
│
├── nodejs/                       # Node.js core concepts and fundamentals
│   ├── calculator.js            # Basic calculator operations
│   ├── main.js                  # Entry point demonstrations
│   ├── messages.js              # String and message handling
│   ├── urlParsing.js            # URL parsing utilities
│   ├── core_task.js             # Core Node.js tasks
│   ├── httpsServers/            # HTTP/HTTPS server implementations
│   │   ├── http_server.js
│   │   ├── http_server2.js
│   │   └── http_server3.js
│   ├── postMethod/              # HTTP POST method examples
│   │   ├── postMethod.js
│   │   └── postMethod2.js
│   ├── todo-api/                # Simple TODO API implementation
│   │   └── server.js
│   └── texts/                   # Sample data and output files
│       ├── hello.txt
│       ├── learning.txt
│       └── output.txt
│
├── postman/                      # API testing and documentation
│   ├── collections/             # Postman request collections
│   ├── environments/             # Environment variables for different stages
│   ├── flows/                   # Postman flows
│   ├── globals/                 # Global variables
│   │   └── workspace.globals.yaml
│   ├── specs/                   # API specifications
│   └── mocks/                   # Mock servers
│
├── package.json                 # Root package with shared dependencies
└── README.md                    # This file
```

---

## Technologies Used

### Backend Framework
- **Express.js** (v5.2.1) - Web application framework for Node.js
- **Node.js** - JavaScript runtime environment

### Database & ODM
- **MongoDB** - NoSQL database
- **Mongoose** (v9.6.2) - MongoDB object data modeling

### Authentication & Security
- **jsonwebtoken** (v9.0.3) - JWT token generation and verification
- **bcryptjs** (v3.0.3) - Password hashing and comparison
- **dotenv** (v17.4.2) - Environment variable management

### Development Tools
- **nodemon** (v3.1.11) - Auto-restart server during development
- **axios** (v1.13.2) - HTTP client for requests
- **Postman** - API testing and documentation

---

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager
- Postman (optional, for API testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gobler-code/Fullstack-learning-journey.git
   cd fullstack-journey
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install Express.js dependencies**
   ```bash
   cd expressjs
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the `expressjs` directory:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/fullstack-journey
   JWT_SECRET=your-secret-key-here
   ```

5. **Start the development server**
   ```bash
   cd expressjs
   npm start
   # or with nodemon for auto-reload
   nodemon server.js
   ```

The server should now be running on `http://localhost:3000`

---

## Project Modules

### 📚 Node.js Core (`nodejs/`)
- **HTTP Servers**: Learn the fundamentals of creating HTTP/HTTPS servers
- **URL Parsing**: Understanding URL structure and parsing
- **POST Requests**: Handling POST method with data
- **TODO API**: Simple REST API without Express framework
- **Core Modules**: Working with Node.js core modules

### 🛠️ Express.js Backend (`expressjs/`)
- **Authentication System**: User registration and login with JWT tokens
- **Notes API**: Full CRUD operations for a notes application
- **Middleware Pipeline**: Understanding middleware flow and error handling
- **Database Models**: Mongoose schemas for users and notes
- **Security**: Password hashing and JWT-based authorization

### 🧪 API Testing (`postman/`)
- Pre-configured Postman collections for all endpoints
- Environment setup for development, staging, and production
- Mock servers for testing without a live backend
- Request/response examples and validation

---

## Key Features

✅ **RESTful API Design** - Standard HTTP methods and status codes  
✅ **User Authentication** - Secure registration and login with JWT  
✅ **Password Security** - Bcrypt hashing for secure password storage  
✅ **Error Handling** - Centralized error middleware for consistent responses  
✅ **Database Integration** - MongoDB with Mongoose for data persistence  
✅ **Middleware Architecture** - Request/response processing pipeline  
✅ **Learning Documentation** - Comprehensive guides and best practices  
✅ **API Testing Ready** - Complete Postman collection for all endpoints  

---

## API Endpoints

### Authentication Endpoints (`/api/auth`)
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login with credentials

### Notes Endpoints (`/api/notes`)
- `GET /api/notes` - Retrieve all notes for authenticated user
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

---

## Learning Path

This project follows a structured learning progression:

1. **Foundation** - Node.js core concepts and HTTP servers
2. **Framework** - Express.js routing and middleware
3. **Databases** - MongoDB integration with Mongoose
4. **Architecture** - Building scalable REST APIs
5. **Security** - Authentication and password management

---

## Resources & Notes

For detailed learning notes and backend engineering concepts, refer to:
- `expressjs/personal/backend_learning_guide.md` - Comprehensive guide covering Express.js fundamentals, middleware pipeline, and best practices

---

## Next Steps

- Implement user profile management
- Add note sharing and collaboration features
- Deploy to a cloud platform (Heroku, AWS, or DigitalOcean)
- Add frontend with React or Vue.js
- Implement real-time features with WebSockets
- Add comprehensive test suite with Jest or Mocha

---

## Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/Gobler-code/Fullstack-learning-journey/issues).

---

**Happy Learning! 🎓**
