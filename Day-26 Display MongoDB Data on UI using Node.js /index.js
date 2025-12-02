import express from "express";
import { MongoClient } from "mongodb";

const url =
  "mongodb://admin:admin123@127.0.0.1:27017/School?authSource=admin";
const dbName = "School";

const client = new MongoClient(url);
const app = express();
let db;



// 1️⃣ Connect to MongoDB once
async function connectDB() {
  await client.connect();
  console.log("Connected to MongoDB");
  db = client.db(dbName);
}
connectDB();

// 2️⃣ Body parser (must be here)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 3️⃣ EJS
app.set("view engine", "ejs");

//   

app.get('/add-student',(req,res)=>{
  res.render('add-student')
})

app.post('/add-student', async (req, res) => {
    
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    console.log("❌ Data missing!");
    return res.send("Form data missing");
  }

  try {
    const result = await db.collection("students").insertOne(req.body
);

    console.log("Insert Result:", result);
  } catch (err) {
    console.log("❌ Insert Error:", err);
  }

  res.redirect("/display");
});


// 4️⃣ Home route (GET)
app.get("/display", async (req, res) => {
  const students = await db.collection("students").find().toArray();
  res.render("student", { students });
});


  

// 6️⃣ Server
app.listen(3000, () => console.log("Server running on 3000"));
