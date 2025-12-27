import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/profile", (req, res) => {
  res.setHeader("Set-Cookie", ["login=true", `name=${req.body.name}`]);

  return res.redirect("/profile");
});

app.get("/profile", (req, res) => {
  const cookieHeaer = req.headers.cookie;
  let name = null;

  if (cookieHeaer) {
    cookieHeaer.split(";").forEach((cookie) => {
      const [key, value] = cookie.split("=");
      if (key.trim() === "name") {
        name = value;
      }
    });
  }
  res.render('profile',{ name })
});

app.get("/", (req, res) => {
  const cookieHeaer = req.headers.cookie;
  let name=null

  if (cookieHeaer) {
    cookieHeaer.split(";").forEach((cookie) => {
      const [key, value] = cookie.split("=");
      if (key.trim() === "name") {
        name = value;
      }
    });
  }
  res.render("home", { name });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
