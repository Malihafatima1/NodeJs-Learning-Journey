require('dotenv').config();
const nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    },
});


async function sendMagicLink(email,link) {
    const mailOptions={
        from: `"Magic Link Auth" <${process.env.EMAIL_USER}>`,       
        to:email,
        subject:"🔗 Your Magic Login Link",
        html:`
        <h3>Login to your account</h3>
        <p>Click below to log in. This  link is valid for <b>5 minutes</b>:</p>
        <a href="${link}" target="_blank">${link}</a>
        `
    };
    await transporter.sendMail(mailOptions);
    console.log(`📨 Magic link sent to ${email}`);
}
module.exports=sendMagicLink;