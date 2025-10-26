
## 🧠 What Are Callback Functions?

A **callback function** is a function passed as an argument to another function so that it can be executed later, once the operation is completed.

> Example: "Hey Node.js, go fetch the data. When you're done, call this function and give me the result."

---

## ⚡ Why Node.js Uses Callbacks

Node.js is **asynchronous**. It doesn’t wait for slow tasks like file reads or API calls. It moves on and comes back when the task is done using a **callback**.

This makes Node.js very fast for server applications.

---

## 🧩 Example 1: A Simple Callback

```js
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Maliha", sayBye);
```

**Output:**

```
Hi Maliha
Goodbye!
```

The function `sayBye` is the callback that runs _after_ `greet` finishes.

---

## 🌐 Example 2: Real Asynchronous Callback

```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
  if (err) {
    console.log("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});
```

**Explanation:**

- `readFile` is asynchronous.
    
- It calls the provided callback when the file read completes.
    
- The callback gets two arguments: `err` (error if any) and `data` (file contents).
    

---

## 💡 Node.js Callback Pattern

The standard callback pattern is:

```js
function(err, result) {
  if (err) {
    // handle the error
  } else {
    // process the result
  }
}
```

This is called an **error-first callback**.

---

## ☁️ Example 3: Callback with HTTP Request (Weather Example)

### `weather.js`

```js
const https = require('https');

function getCurrentWeather(location, resultCallback) {
  const url = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`;

  https.get(url, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const weather = JSON.parse(data);
        const temp_f = weather.current.temp_f;
        resultCallback(null, temp_f);
      } catch (error) {
        resultCallback(error, null);
      }
    });
  }).on("error", (error) => {
    resultCallback(error, null);
  });
}

module.exports = { getCurrentWeather };
```

### `app.js`

```js
const weather = require('./weather');

weather.getCurrentWeather("London", function(error, temp_f) {
  if (error) {
    console.log("Error fetching weather:", error);
  } else {
    console.log(`The current weather in London is ${temp_f}°F`);
  }
});
```

**Flow:**

1. The main app calls the module’s function.
    
2. The module performs the HTTP request.
    
3. When the response arrives, the module calls the callback function with either an error or the result.
    
4. The main app’s callback prints the result.
    

---

## 🔗 Callback Flow (Visual)

```
Main App
   ↓ calls
Weather Module
   ↓ calls
HTTP Request
   ↓ response
Weather Module Callback
   ↓ calls
Main App Callback
```

Each layer handles its own async operation and calls the next callback in the chain.

---

## ⚠️ Callback Hell

When callbacks are nested inside callbacks, code becomes hard to read:

```js
doSomething(function(result1) {
  doSomethingElse(result1, function(result2) {
    anotherThing(result2, function(result3) {
      console.log("Done!");
    });
  });
});
```

Later, this problem was solved using **Promises** and **async/await**.

---

## 📝 Summary Notes

|Concept|Explanation|Example|
|---|---|---|
|**Callback function**|Function passed as argument to another function.|`greet('Maliha', sayBye)`|
|**Asynchronous**|Node.js doesn’t wait; callback runs later.|`fs.readFile()`|
|**Error-first callback**|First argument is always error, second is result.|`(err, data)`|
|**Chained callbacks**|Callback inside callback connects modules.|`HTTP → weather → app`|
|**Alternative**|Use Promises or async/await for cleaner code.|`await getWeather()`|

---

**In short:**

> Callbacks are the foundation of asynchronous Node.js programming. They allow you to execute code only after an operation finishes — without blocking the main thread.
