# 🔐 JWT Authentication Project

This project demonstrates a simple **Login and Dashboard** web application using **Node.js, Express, and JWT (JSON Web Tokens)** for authentication.  
It includes a **protected route** (`/dashboard`) that can only be accessed with a valid token.

---

## 🚀 Features

- ✅ User authentication using **JWT**
- ✅ Login page with HTML & JavaScript frontend
- ✅ Protected dashboard route
- ✅ Token stored in browser `localStorage`
- ✅ Logout functionality
- ✅ Frontend-backend connection using `fetch()`

---

## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript (vanilla)

**Backend:**
- Node.js
- Express.js
- jsonwebtoken (JWT)

---

## 📂 Project Structure

```
jwt-auth-project/
│
├── server.js              # Main backend server file
├── package.json           # Node dependencies
├── public/
│   ├── login.html         # Login page
│   ├── dashboard.html     # Protected dashboard
│   ├── style.css          # Optional styles
│   └── script.js          # Frontend JS logic
└── README.md              # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Malihafatima1/Day15-TokenBasedAuth.git
cd jwt-auth-project
```

### 2️⃣ Install dependencies
```bash
npm install express jsonwebtoken body-parser
```

### 3️⃣ Run the server
```bash
node server.js
```

You should see:
```
Server running on http://localhost:3000
```

---

## 🧠 How It Works

### 🔹 Login

- Open [http://localhost:3000/](http://localhost:3000/)
- Enter credentials:
  ```
  Username: user
  Password: password
  ```
- On success:
  - Server generates a **JWT token**
  - Token is stored in browser’s `localStorage`
  - User is redirected to `/dashboard`

---

### 🔹 Dashboard (Protected)

- When user visits `/dashboard`, browser automatically sends:
  ```js
  Authorization: Bearer <token>
  ```
- Server verifies the token using `jwt.verify()`
- If valid → dashboard is shown  
- If invalid or missing → redirected to login page

---

### 🔹 Logout

- Clicking “Logout” removes the token from localStorage
- User is redirected back to login page

---

## 🧪 Testing the API (Optional)

### Login Endpoint
```bash
POST http://localhost:3000/login
Content-Type: application/json

{
  "username": "user",
  "password": "password"
}
```

### Protected Dashboard Endpoint
```bash
GET http://localhost:3000/dashboard
Authorization: Bearer <your_token_here>
```

---

## 🧰 Example Credentials

| Username | Password |
|-----------|-----------|
| user      | password  |

---

## 📸 Preview

**Login Page**
```
http://localhost:3000/
```

**Dashboard Page**
```
http://localhost:3000/dashboard
```

---

## 🧾 License

This project is for **learning purposes** and is **not production-ready**.  
You can freely modify and use it for educational or personal projects.