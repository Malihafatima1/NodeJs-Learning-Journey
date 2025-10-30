# 🗂️ Node.js CRUD Operation using File System (fs)

This project demonstrates basic **CRUD (Create, Read, Update, Delete)** operations using the **File System (`fs`) module** in Node.js — without using any database.  
All data is stored and managed inside a JSON file (`data.json`).

---

## 📖 What is CRUD?

| Operation | Description |
|------------|--------------|
| **C - Create** | Add new data to a file |
| **R - Read** | Read existing data from the file |
| **U - Update** | Modify or add new data in the file |
| **D - Delete** | Remove specific data from the file |

---

## ⚙️ Technologies Used

- **Node.js**
- **File System Module (`fs`)**
- **JSON**

---

## 📁 Project Structure

```
NodeCRUD/
│
├── crud.js         # Main Node.js file with CRUD operations
├── data.json       # Data storage file (auto-created)
└── README.md       # Project documentation
```

---

## 🚀 How to Run

1. Initialize a Node.js project:
   ```bash
   npm init -y
   ```

2. Run the script:
   ```bash
   node crud.js
   ```

3. The script will:
   - Create a file named `data.json`
   - Write sample data
   - Read and display data
   - Update data (add a new record)
   - Delete a specific record

---

## 💻 Example Output

```bash
Read: [ { name: 'Maliha', age: 22 } ]
Updated: [ { name: 'Maliha', age: 22 }, { name: 'Fatima', age: 21 } ]
After Delete: [ { name: 'Fatima', age: 21 } ]
```

---

## 🧠 Key Concepts

- `fs.writeFileSync()` → Write data to a file  
- `fs.readFileSync()` → Read data from a file  
- `JSON.parse()` → Convert JSON string → JavaScript object  
- `JSON.stringify()` → Convert JavaScript object → JSON string  

---

## ✨ Author

**Maliha Fatima**  
Beginner Node.js Developer  
📍 Sharnbasva University, Kalaburagi

---

## 📜 License

This project is open-source and free to use for learning purposes.