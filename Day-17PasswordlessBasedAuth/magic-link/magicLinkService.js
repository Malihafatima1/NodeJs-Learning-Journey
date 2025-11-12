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
    const record = activeTokekns.find(t => t.token === token);

  if (!record) return { valid: false, message: "❌ Invalid token" };

  if (Date.now() > record.expiresAt.getTime()) {

    delete activeTokekns[token]; //cleanup expired tokens
    return { valid: false, message: "⏰ Token expired" };
  }

  return { valid: true, email: record.email };
}

module.exports = { createMagicLink, verifyMagicLink, activeTokekns };
