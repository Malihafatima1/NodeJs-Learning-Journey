# 🌟 JavaScript Promises — Detailed Notes

## 🧠 What is a Promise?

A **Promise** in JavaScript is an object that represents the eventual **completion** or **failure** of an asynchronous operation.  
It acts as a placeholder for a value that will be available **sometime in the future**.

A Promise can be in one of **three states**:
1. **Pending** → The initial state (the operation is still running).
2. **Fulfilled** → The operation completed successfully (resolved).
3. **Rejected** → The operation failed (error occurred).

---

## 🕒 Why Promises?

JavaScript executes code **synchronously** by default.  
But many tasks like fetching data, file reading, or timers are **asynchronous** — they take time.

Before Promises, developers used **callbacks**, but callbacks often caused **callback hell** (nested callbacks that are hard to read).  
Promises make async code more readable and maintainable.

---

## ⚙️ Syntax

```javascript
let promise = new Promise((resolve, reject) => {
  // async operation
  if (/* success */) {
    resolve("Success!");
  } else {
    reject("Error occurred");
  }
});
```

---

## 📦 Using Promises

You handle the result of a promise using `.then()`, `.catch()`, and `.finally()`.

### ✅ Example

```javascript
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task completed!");
  }, 2000);
});

myPromise
  .then(result => console.log(result))       // Runs when resolved
  .catch(error => console.log(error))        // Runs when rejected
  .finally(() => console.log("Done!"));      // Runs no matter what
```

---

## 🔗 Promise Chaining

Chaining allows multiple async operations to run **in sequence**, where each `.then()` receives the result of the previous one.

```javascript
new Promise((resolve) => {
  resolve(10);
})
  .then(num => {
    console.log(num);  // 10
    return num * 2;
  })
  .then(result => {
    console.log(result);  // 20
    return result + 5;
  })
  .then(finalResult => console.log(finalResult)); // 25
```

---

## ⚡ Combining Multiple Promises

Sometimes you need to run several async tasks together. JavaScript provides built-in methods for that.

### 1. `Promise.all()`
Waits for **all** promises to resolve, or rejects if **any one fails**.

```javascript
Promise.all([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30)
])
.then(values => console.log(values))  // [10, 20, 30]
.catch(err => console.log(err));
```

### 2. `Promise.race()`
Returns the result of **the first promise** that resolves or rejects.

```javascript
Promise.race([
  new Promise(resolve => setTimeout(resolve, 100, "Fast")),
  new Promise(resolve => setTimeout(resolve, 200, "Slow"))
])
.then(result => console.log(result)); // "Fast"
```

### 3. `Promise.allSettled()`
Waits for **all promises** to finish, whether resolved or rejected.

```javascript
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed")
]).then(results => console.log(results));
```

### 4. `Promise.any()`
Returns the **first fulfilled** promise (ignores rejections).

```javascript
Promise.any([
  Promise.reject("Error!"),
  Promise.resolve("First Success"),
  Promise.resolve("Second Success")
]).then(result => console.log(result)); // "First Success"
```

---

## 🧩 Example: Using Promises with Fetch API

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error fetching data:", error))
  .finally(() => console.log("Request complete"));
```

---

## 🧭 Advantages of Promises

✅ Makes async code cleaner and easier to manage  
✅ Avoids callback hell  
✅ Provides better error handling with `.catch()`  
✅ Allows chaining and parallel operations  

---

## ⚠️ Common Mistakes

❌ Forgetting to `return` inside `.then()`  
❌ Mixing callbacks and promises unnecessarily  
❌ Not handling errors with `.catch()`  
❌ Thinking Promises are synchronous (they’re not!)  

---

## 🚀 Summary

| Concept | Description |
|----------|--------------|
| Promise States | Pending, Fulfilled, Rejected |
| Handlers | `.then()`, `.catch()`, `.finally()` |
| Chaining | Executes promises sequentially |
| Parallel Execution | Use `Promise.all()` or `Promise.allSettled()` |
| Error Handling | Always handle rejections with `.catch()` |

---

### ✨ In Short:
> A Promise is a modern way to handle asynchronous tasks in JavaScript — more readable, cleaner, and far better than callback hell!

---

**Author:** *Maliha Fatima*  
**Topic:** *Promises*  
**Date:** *Day 6 — Node.js Learning Journey*
