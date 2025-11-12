# Magic Link Authentication (Token Listing)

## 📘 Overview
This challenge extends the passwordless authentication system built on previous days.  
We introduced a new route `/view-tokens` that lists all **active tokens** and their **expiry times**.  
This helps developers debug and verify tokens in a secure, test-only environment.

---

## ⚙️ Features
- Generate a **magic link** using a unique token (`uuidv4`).
- Verify a token’s validity and expiry time.
- Add a route `/view-tokens` to view all **active tokens** with their expiration timestamps.
- Automatically handle expired tokens.

---

## 🧩 Folder Structure
```
Day3-MagicLink/
│
├── server.js
├── magicLink.js
├── package.json
└── README.md
```

---

## 🧠 How It Works
1. **Generate a Token**
   - When a user enters their email, a unique token is generated.
   - The token expires after **5 minutes**.
   - The magic link is sent (or displayed in console for testing).

2. **Verify the Token**
   - When the user clicks the link, the token is validated:
     - ✅ If valid → login success.
     - ⏰ If expired → login fails.
     - ❌ If not found → invalid token.

3. **View Active Tokens**
   - Visit the `/view-tokens` route in your browser to see all active tokens and their expiry times.
   - Example:  
     ```
     [
       {
         "token": "a1b2c3d4-uuid",
         "email": "test@example.com",
         "expiresAt": "2025-11-10T10:30:00.000Z"
       }
     ]
     ```

---

## 🚀 How to Run
1. Install dependencies:
   ```bash
   npm install express uuid
   ```

2. Start the server:
   ```bash
   node server.js
   ```

3. Open your browser and test:
   - Generate a magic link → `http://localhost:3000/magic-link?email=test@example.com`
   - Verify a token → click the link displayed in the console.
   - View all active tokens → `http://localhost:3000/view-tokens`

---

## 🧪 Example Test Cases
| Test Case | Input | Expected Output |
|------------|--------|----------------|
| Generate Magic Link | `email=test@example.com` | Returns link with UUID token |
| Verify Valid Token | Click link before 5 mins | ✅ Login success |
| Verify Expired Token | Click link after 5 mins | ⏰ Token expired |
| Invalid Token | Random or deleted token | ❌ Invalid token |
| View Tokens | `/view-tokens` route | Displays all active tokens with expiry time |

---

## 🧰 Technologies Used
- **Node.js**
- **Express.js**
- **UUID (for unique tokens)**

---

👩‍💻 **Author:** Maliha Fatima  