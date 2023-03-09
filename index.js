const nodeMailer = require("nodemailer");
const express = require("express");
const appRoute = require("./routes/route.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//* ROUTES */
app.use("/api", appRoute);

// const html = `<h1> Hello from nodeJS </h1>
// <p> body message </p>`;

// async function main() {
//   const transporter = nodeMailer.createTransport({
//     host: "mail.777tanchiki777@mail.ru",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "777tanchiki777@mail.ru",
//       pass: "fLun3zvQ08jFHFivLp8u",
//     },
//   });
//   const info = await transporter.sendMail({
//     from: "OpenJavaScript <777tanchiki777@mail.ru>",
//     to: "777tanchiki777@mail.ru",
//     subject: "test, qwe,123",
//     html: html,
//   });

//   console.log("message sent: " + info.messageId);
// }

// main().catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
