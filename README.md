# 🎓 FutureAid - Server Side

This is the **backend/server** for the **FutureAid Scholarship Management System**, built with **Node.js**, **Express**, and **MongoDB**. It handles all core functionalities like authentication, applications, reviews, users, and admin management.

---

## ⚙️ Features

- ✅ JWT Authentication
- 🔐 Role-based access (admin, moderator, user)
- 🗃️ CRUD APIs for:
  - Users
  - Scholarships
  - Applications
  - Reviews
- 📊 Analytics endpoints for charts
- 📅 Application filters (by status, date, etc.)

---

## 📁 Folder Structure

```
future-aid-server/
├── config/            # (Optional) DB config or middleware
├── middleware/        # JWT verification, role checking
├── routes/            # Modular API route files
├── controllers/       # Logic separated from routes (if modularized)
├── .env
├── index.js           # Main server entry point
├── package.json
```

---

## 🔧 Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose or native driver)
- JWT (JSON Web Tokens)
- CORS
- dotenv
- Stripe (for payment integration)

---

## 🔑 Environment Variables

Create a `.env` file in the root of your project with:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jahid-jhb/future-aid-server.git
cd future-aid-server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm run dev
```

### 4. Server will run at:

```bash
http://localhost:3000
```

---

## 🔐 API Overview

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| POST   | `/auth/register`          | Register a new user                  |
| POST   | `/auth/login`             | Login and receive JWT token          |
| GET    | `/users`                  | Get all users (admin only)           |
| PATCH  | `/users/:id/role`         | Update user role                     |
| POST   | `/scholarships`           | Create new scholarship               |
| GET    | `/scholarships`           | Get all scholarships                 |
| GET    | `/scholarships/:id`       | Get scholarship by ID                |
| DELETE | `/scholarships/:id`       | Delete scholarship                   |
| POST   | `/applications`           | Submit an application                |
| GET    | `/applications`           | Get applications (admin/mod/user)    |
| PATCH  | `/applications/:id`       | Update application status            |
| DELETE | `/applications/:id`       | Delete application                   |
| GET    | `/my-applications`        | Get logged-in user's applications    |
| POST   | `/reviews`                | Submit a review                      |
| GET    | `/reviews`                | Get all reviews                      |
| GET    | `/reviews/user/:email`    | Get reviews by user email            |
| PATCH  | `/reviews/:id`            | Edit a review                        |
| DELETE | `/reviews/:id`            | Delete a review                      |
| GET    | `/analytics`              | Get statistics for admin dashboard   |

---

## ⚠️ Notes

- Use tools like Postman or Thunder Client to test endpoints.
- All protected routes require a valid JWT token in the `Authorization` header.

---

## 📚 Related Projects

- [FutureAid Client Repository](https://github.com/jahid-jhb/future-aid-client)

---

## 🙋‍♂️ Author

Developed by **MD Jahid Hasan**  
For suggestions or improvements, feel free to contribute!

---

## 📃 License

This project is licensed under the **MIT License**.
