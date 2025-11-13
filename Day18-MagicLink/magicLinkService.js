//Writing token generator logic

const { v4: uuidv4 } = require("uuid");

//store tokekns in memeory (in a real app, this would be a database)
const activeTokekns = [];

function createMagicLink(email) {
  const token = uuidv4();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  //Expires in 5 minutes

  //store with expiry
  activeTokekns.push({ token, email, expiresAt });

  const link = `http://localhost:3000/login/${token}`;

  return link;
}

function verifyMagicLink(token) {
  const recordIndex = activeTokekns.findIndex(t => t.token === token);

  // Fix this line 👇
  if (recordIndex === -1) return { valid: false, message: "❌ Invalid token" };

  const record = activeTokekns[recordIndex];

  if (Date.now() > record.expiresAt.getTime()) {
    activeTokekns.splice(recordIndex, 1); // Remove expired token
    return { valid: false, message: "⏰ Token expired" };
  }

  // Valid token
  activeTokekns.splice(recordIndex, 1);
  return { valid: true, email: record.email };
}


function cleanExpiredTokens(){
  const now=Date.now();
  activeTokekns=activeTokekns.filter(t=>t.expiresAt.getTime()>now);
}
setInterval(cleanExpiredTokens,60*3000);//Run every 1 minute

module.exports = { createMagicLink, verifyMagicLink, activeTokekns };
