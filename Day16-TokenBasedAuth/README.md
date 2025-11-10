# JWT Login System

A simple and secure **JWT-based authentication system** built using **Node.js**, **Express**, and **Vanilla JavaScript**.  
It allows users to **sign up**, **log in**, and **access a protected dashboard** using **JSON Web Tokens (JWT)** for authentication.

---

## 🏗️ Project Structure

```
JWT-Login-System/
│
├── server.js           # Main backend server file
├── users.json          # Stores registered users with hashed passwords
├── package.json        # Node.js dependencies and scripts
└── public/
    ├── login.html      # Login page with custom alert
    ├── signup.html     # Signup page with custom alert
    └── dashboard.html  # Protected dashboard page
```

---

## 🚀 Features

- User Signup and Login using JWT authentication  
- Passwords hashed using **bcryptjs**
- Custom styled alerts for feedback  
- Access control for protected routes  
- Responsive and professional UI with animations  

---

## 🧰 Tech Stack

**Frontend:** HTML, CSS, JavaScript (Vanilla)  
**Backend:** Node.js, Express.js  
**Security:** JWT (jsonwebtoken), bcryptjs  
**Middleware:** CORS  

---

🎥 Watch the Full Project Video

👉 https://youtu.be/TAr9k1DhrzM

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Malihafatima1/NodeJs-Learning-Journey/JWT-Login-System
   cd JWT-Login-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server.js
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🧩 API Endpoints

| Method | Endpoint     | Description           |
|--------|---------------|-----------------------|
| POST   | `/signup`     | Register a new user   |
| POST   | `/login`      | Login and get JWT     |
| GET    | `/dashboard`  | Access protected data |

---

## 🔐 JWT Flow

1. User signs up or logs in.  
2. Server verifies credentials and issues a JWT token.  
3. Token is stored in `localStorage`.  
4. Dashboard page fetches protected data using the token in the header.  
5. Logout removes the token from localStorage.

---

## 📸 UI Highlights

- Gradient backgrounds and animated transitions  
- Clean layout with card-style containers  
- Modern alert notifications (Success & Error messages)  

---

## 👩‍💻 Author

**Maliha Fatima**  
Developed with 💻 and ❤️ for secure web applications.

---

## 📝 License

This project is open-source and available under the **MIT License**.