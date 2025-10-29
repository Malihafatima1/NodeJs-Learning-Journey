

## 🧠 1. Introduction to Axios
**Axios** is a promise-based HTTP client used to make HTTP requests from Browser or Node.js.
It helps you send or receive data from APIs easily.

### Why Use Axios?
Axios makes your code simpler, cleaner, and easier to manage asynchronous requests.

---

## ⚙️ 2. Installing Axios
Install using npm:
```bash
npm install axios
```
Import in your Node.js file:
```js
const axios = require('axios'); // CommonJS
// or
import axios from 'axios'; // ES Module
```

---

## 🚀 3. Making Your First GET Request
```js
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .catch(error => console.error(error.message));
```

Axios automatically converts JSON data — no need for `response.json()`.

---

## 📤 4. Sending POST Requests
```js
const axios = require('axios');
const newPost = { title: 'Learning Axios', body: 'Axios makes HTTP requests easy!', userId: 1 };

axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
  .then(response => console.log('Post created:', response.data))
  .catch(error => console.error('Error:', error.message));
```

---

## 🧩 5. Using async/await
```js
const axios = require('axios');
async function getData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
getData();
```

---

## ⚙️ 6. Adding Configuration Options
```js
axios.get('https://jsonplaceholder.typicode.com/posts', {
  params: { userId: 1 },
  headers: { 'Accept': 'application/json' },
  timeout: 5000
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

---

## 🔐 7. Sending Authorization Headers
```js
axios.get('https://api.example.com/user', {
  headers: { 'Authorization': 'Bearer your_token_here' }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));
```

---

## 🧱 8. Creating an Axios Instance
```js
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

api.get('/posts').then(res => console.log(res.data));
```

---

## 🔁 9. Interceptors
```js
axios.interceptors.request.use(config => {
  console.log('Request sent to:', config.url);
  config.headers.Authorization = 'Bearer my_token';
  return config;
});
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Response Error:', error.response?.status);
    return Promise.reject(error);
  }
);
```

---

## ⚠️ 10. Error Handling
```js
try {
  const res = await axios.get('https://invalidurl.com');
} catch (error) {
  if (error.response) console.log('Server error:', error.response.status);
  else if (error.request) console.log('No response received:', error.request);
  else console.log('Error:', error.message);
}
```

---

## 🧾 11. Common HTTP Methods
| Method | Description | Example |
|--------|--------------|---------|
| get() | Fetch data | axios.get(url) |
| post() | Send new data | axios.post(url, data) |
| put() | Update data completely | axios.put(url, data) |
| patch() | Update partially | axios.patch(url, data) |
| delete() | Delete data | axios.delete(url) |

---

## 🌐 12. Real-world Use Cases
- Fetching data from REST APIs  
- Sending forms or JSON data  
- Handling authentication tokens  
- Connecting Node.js backend to APIs  
- Making API calls in React or Express apps

---

## 🧠 13. Summary
| Feature | Description |
|----------|--------------|
| Type | Promise-based HTTP Client |
| Works In | Node.js and Browser |
| Handles | GET, POST, PUT, PATCH, DELETE |
| Supports | Interceptors, Headers, Timeouts |
| Install | npm install axios |

---

## 🧰 14. Practice Idea
- Build a Weather App using Axios  
- Create a GitHub User Finder  
- Make a Todo App using jsonplaceholder API

---

## ✅ 15. Final Tips
- Always use try...catch for errors  
- Prefer async/await for readability  
- Use Axios instances for reusability  
- Add interceptors for global logic