Node.js File Creation — Synchronous & Asynchronous
   🔹 Overview

Node.js provides the fs (File System) module to work with files.
You can use it to create, read, write, delete, and update files — synchronously or asynchronously.

⚙️ Importing the fs Module
const fs = require('fs');

🧩 1. Creating Files Synchronously
📌 Method: fs.writeFileSync(path, data, options)

Blocks execution until the file is completely written.

Best used for small files or scripts where performance is not critical.

✅ Example:
const fs = require('fs');

// Creating (or overwriting) a file synchronously
try {
  fs.writeFileSync('syncFile.txt', 'This is created synchronously.');
  console.log('✅ File created successfully (synchronously)');
} catch (error) {
  console.error('❌ Error creating file:', error);
}

⚡ Notes:

If the file doesn’t exist → it creates it.

If the file exists → it overwrites it.

To append instead, use fs.appendFileSync().

🧠 2. Creating Files Asynchronously
📌 Method: fs.writeFile(path, data, options, callback)

Non-blocking — the program continues executing while the file is written.

Recommended for servers and large-scale apps.

✅ Example:
const fs = require('fs');

// Creating (or overwriting) a file asynchronously
fs.writeFile('asyncFile.txt', 'This is created asynchronously.', (error) => {
  if (error) {
    console.error('❌ Error creating file:', error);
    return;
  }
  console.log('✅ File created successfully (asynchronously)');
});

console.log('This will run first while file is being created...');

⚡ Notes:

Uses a callback function to handle success or error.

Does not block the event loop.

🧱 3. Appending Data to a File
🔹 Synchronous
fs.appendFileSync('syncFile.txt', '\nAdditional content (Sync)');
console.log('✅ Data appended synchronously');

🔹 Asynchronous
fs.appendFile('asyncFile.txt', '\nAdditional content (Async)', (error) => {
  if (error) throw error;
  console.log('✅ Data appended asynchronously');
});

🧾 Summary Table
Operation Type	Method	Blocking	Use Case
Synchronous	fs.writeFileSync()	Yes	Small scripts or initialization
Asynchronous	fs.writeFile()	No	Servers, APIs, performance-critical apps
🚀 Tips

Always handle errors using try...catch (for sync) or callbacks (for async).

Prefer asynchronous methods in real-world apps.

Use Promises or async/await (with fs.promises) for modern, cleaner syntax.

🧰 Example Using Promises
const fs = require('fs').promises;

async function createFile() {
  try {
    await fs.writeFile('promiseFile.txt', 'File created using Promises');
    console.log('✅ File created successfully (Promise)');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

createFile();


nodejs-file-handling-demo/
│
├── README.md              # (this markdown file)
├── syncFileExample.js     # synchronous example
├── asyncFileExample.js    # asynchronous example
└── promiseExample.js      # promise-based example


Would you like me to generate these .js files (synchronous, asynchronous, and promise examples) too so you can upload them along with the .md file?

You said:
yes
ChatGPT said:

Perfect 👍
Here’s the full set of files you can directly upload to your GitHub repo:


# 📘 Node.js File Handling — Synchronous & Asynchronous

## ⚙️ Importing the `fs` Module
```js
const fs = require('fs');

🧩 1. Creating Files Synchronously
📌 Method: fs.writeFileSync(path, data, options)

Blocks execution until file is written.

Good for small scripts or setup tasks.

✅ Example
const fs = require('fs');

try {
  fs.writeFileSync('syncFile.txt', 'This is created synchronously.');
  console.log('✅ File created successfully (synchronously)');
} catch (error) {
  console.error('❌ Error creating file:', error);
}

🧠 2. Creating Files Asynchronously
📌 Method: fs.writeFile(path, data, options, callback)

Non-blocking.

Ideal for large or performance-heavy applications.

✅ Example
const fs = require('fs');

fs.writeFile('asyncFile.txt', 'This is created asynchronously.', (error) => {
  if (error) {
    console.error('❌ Error creating file:', error);
    return;
  }
  console.log('✅ File created successfully (asynchronously)');
});

console.log('This runs first while the file is being written...');

🧱 3. Appending Data to Files
🔹 Synchronous
fs.appendFileSync('syncFile.txt', '\nAdditional content (Sync)');
console.log('✅ Data appended synchronously');

🔹 Asynchronous
fs.appendFile('asyncFile.txt', '\nAdditional content (Async)', (error) => {
  if (error) throw error;
  console.log('✅ Data appended asynchronously');
});

🧰 4. Using Promises (Modern Approach)
const fs = require('fs').promises;

async function createFile() {
  try {
    await fs.writeFile('promiseFile.txt', 'File created using Promises');
    console.log('✅ File created successfully (Promise)');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

createFile();

🧾 Summary Table
Type	Method	Blocking	Use Case
Synchronous	fs.writeFileSync()	Yes	Small scripts or setup
Asynchronous	fs.writeFile()	No	Web servers, APIs
Promise-based	fs.promises.writeFile()	No	Modern async/await syntax
🚀 Tips

Always handle errors.

Prefer async or promises in production.

Use fs.appendFile or fs.appendFileSync to add data instead of overwriting.

🗂️ Folder Structure
nodejs-file-handling-demo/
│
├── README.md
├── syncFileExample.js
├── asyncFileExample.js
└── promiseExample.js


---

## 💻 **2. syncFileExample.js**

```js
// syncFileExample.js
const fs = require('fs');

try {
  fs.writeFileSync('syncFile.txt', 'This is created synchronously.');
  console.log('✅ File created successfully (synchronously)');
} catch (error) {
  console.error('❌ Error creating file:', error);
}

// Append data synchronously
try {
  fs.appendFileSync('syncFile.txt', '\nAppended text (Sync)');
  console.log('✅ Data appended synchronously');
} catch (error) {
  console.error('❌ Error appending data:', error);
}

💻 3. asyncFileExample.js
// asyncFileExample.js
const fs = require('fs');

// Create file asynchronously
fs.writeFile('asyncFile.txt', 'This is created asynchronously.', (error) => {
  if (error) {
    console.error('❌ Error creating file:', error);
    return;
  }
  console.log('✅ File created successfully (asynchronously)');

  // Append data asynchronously
  fs.appendFile('asyncFile.txt', '\nAppended text (Async)', (error) => {
    if (error) {
      console.error('❌ Error appending data:', error);
      return;
    }
    console.log('✅ Data appended asynchronously');
  });
});

console.log('This runs while the file is being created...');

💻 4. promiseExample.js
// promiseExample.js
const fs = require('fs').promises;

async function handleFile() {
  try {
    await fs.writeFile('promiseFile.txt', 'File created using Promises');
    console.log('✅ File created successfully (Promise)');

    await fs.appendFile('promiseFile.txt', '\nMore text using async/await');
    console.log('✅ Data appended (Promise)');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

handleFile();

✅ GitHub Repo Suggestion

Repository name:

nodejs-file-handling-demo

