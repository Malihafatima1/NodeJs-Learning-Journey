# 🧑‍💻 Session-Based Login System

A simple Node.js and Express-based web application that implements
**user authentication** using **sessions**.\
It includes user login, session handling, and logout functionality, and
allows testing via REST Client or a simple HTML form.

------------------------------------------------------------------------

## 🚀 Features

✅ User login using POST request\
✅ Session management using `express-session`\
✅ Redirects users after successful login\
✅ Logout functionality that destroys the session\
✅ Static file handling for serving HTML, CSS, and JS\
✅ Can be tested using REST Client or browser UI

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Backend:** Node.js, Express.js\
-   **Session Management:** express-session\
-   **Frontend:** HTML, CSS (served via static files)\
-   **Testing:** REST Client / Browser

------------------------------------------------------------------------

## 📂 Project Structure

    SessionBasedLogin/
    │
    ├── public/
    │   ├── login.html
    │   ├── dashboard.html
    │   └── style.css
    │
    ├── sessionBased.js
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## ⚙️ Installation and Setup

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/your-username/SessionBasedLogin.git
cd SessionBasedLogin
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Run the application

``` bash
node sessionBased.js
```

### 4️⃣ Open in browser

Visit 👉 `http://localhost:3000`

------------------------------------------------------------------------

## 🧩 API Endpoints

  Method   Endpoint       Description
  -------- -------------- -----------------------------------------------
  `GET`    `/`            Serves the login page
  `POST`   `/login`       Authenticates user and creates a session
  `GET`    `/dashboard`   Displays the dashboard page (protected route)
  `GET`    `/logout`      Destroys the session and redirects to login

------------------------------------------------------------------------

## 💡 Example Test Using REST Client

If you're using VS Code REST Client extension, create a file `test.rest`
and add:

    POST http://localhost:3000/login
    Content-Type: application/json

    {
      "username": "admin",
      "password": "1234"
    }

------------------------------------------------------------------------

## 🧾 Notes

-   The login credentials are hardcoded for testing (`admin` / `1234`).
-   You can enhance this project by connecting it to a **database
    (MySQL, MongoDB, etc.)**.
-   The logout button should appear **only on dashboard.html**, not on
    the login page.

------------------------------------------------------------------------

## 🧑‍🏫 Author

**Maliha Fatima**\
📍 MCA Student \| Web Developer \| Passionate about backend development