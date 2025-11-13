const express=require('express');
const { createMagicLink, verifyMagicLink, activeTokekns }=require('./magicLinkService');
const bodyParser = require('body-parser');
const sendMagicLink = require('./mailer');
const app=express();
require('dotenv').config();



//just using a demo email for  now
const demoEmail="maliha@gmail.com";

//creating root fot the send-link
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.post('/send-link', async (req, res) => {
    const email = req.body.email;
    const link = createMagicLink(email);
    
    await sendMagicLink(email, link);
  
    res.sendFile(__dirname + '/public/success.html');

});

//Generate Magic Link
app.get('/generate-link',(req,res)=>{
    const link=createMagicLink(demoEmail);

   
    res.send(`
       <h2>✨ Magic Link Generated</h2>
       <p><a href="${link}" target="_blank">${link}</a></p>
       <p>Valid for <b>5 minutes</b> only.</p>
       <p><a href="/view-tokens">View Active tokens</a></p>
        `);
});

//view-tokens route
app.get('/view-tokens',(req,res)=>{
    if (activeTokekns.length === 0) {

        return res.send("<h3>No active tokens yet.</h3>");
    }

    const rows=activeTokekns
    .map(
        (t)=> 
            `<tr><td>${t.token}</td><td>${t.email}</td><td>${t.expiresAt.toISOString()}</td></tr>`

    )
    .join("");
    res.send(`
        <h2>Active Tokens</h2>
    <table border="1" cellpadding="8">
      <tr><th>Token</th><th>Email</th><th>Expires At</th></tr>
      ${rows}
    </table>
    <br><a href="/">⬅ Back</a>
        `)
})

//Verigy magic link
app.get('/login/:token', (req, res) => {
  const { valid, message, email } = verifyMagicLink(req.params.token);

  if (!valid) return res.send(`<h3>${message}</h3>`);

  res.sendFile(__dirname + '/public/dashboard.html');
});

//logout root
app.get('/logout',(req,res)=>{
    res.sendFile(__dirname + '/public/logout.html')
});



const PORT=3000;
app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`));




