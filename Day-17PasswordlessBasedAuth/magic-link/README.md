# 🔐 Passwordless Login System using Magic Links

This project demonstrates a **passwordless authentication system** built with **Node.js** and **Express.js**, where users can log in securely without entering a password. Instead, they receive a **magic link** via email — clicking it grants instant access.

---

## 🚀 Features

- ✅ Login without passwords  
- 📧 Magic link sent to user’s email  
- ⏳ Tokens expire automatically after 5 minutes  
- 🔐 Secure backend token verification  
- 🎨 Clean and simple UI (HTML + CSS)  
- 💬 Logout option included  

---

## 🛠️ Tech Stack

| Component | Technology |
|------------|-------------|
| **Backend** | Node.js, Express.js |
| **Frontend** | HTML, CSS |
| **Token Generation** | UUID |
| **Email Service** | Nodemailer (with Gmail SMTP) |
| **Environment Config** | dotenv |

---

## 📂 Project Structure

```
Passwordless-Login-System/
│
├── server.js
├── magicLinkService.js
├── mailer.js
├── .env
├── package.json
└── public/
    ├── index.html
    ├── success.html
    ├── dashboard.html
    ├── style.css
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Malihafatima1/NodeJs-Learning-Journey/edit/main/Day-17PasswordlessBasedAuth/magic-link
cd magic-link
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables  
Create a `.env` file in the root directory and add:
```
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your-app-password
PORT=3000
```

### 4️⃣ Start the Server
```bash
node server.js
```

### 5️⃣ Open in Browser  
Visit 👉 `http://localhost:3000`

---

## ✨ How It Works

1. User enters their email address.  
2. The backend generates a **unique token** and sends a **magic link** via email.  
3. When the user clicks the link, the server verifies the token.  
4. If valid and unexpired, the user is redirected to the dashboard.  
5. Token automatically expires after 5 minutes for security.  

---

## 🧠 What I Learned

- How to implement secure, passwordless authentication  
- How tokens work and how to manage their expiration  
- How backend and frontend communicate during login  
- How to design minimal yet effective UI  

---

## 🧑‍💻 Author

**Maliha Fatima**  
📍 MCA Student | Aspiring Web Developer  
🌐 [LinkedIn](https://linkedin.com/in/maliha-dev)  
💌 Email: malihafatima6360@gmail.com  

---

## 🏷️ Tags

`#NodeJS` `#Express` `#Authentication` `#MagicLink` `#PasswordlessLogin` `#WebDevelopment` `#Project`
