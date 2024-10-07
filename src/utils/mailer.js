const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "leavleav00@gmail.com",
    pass: "from gmail",
  },
});

module.exports = transporter;
