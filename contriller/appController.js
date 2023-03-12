const nodemailer = require("nodemailer");
const mailgen = require("mailgen");
const { EMAIL, PASSWORD } = require("../env.js");
const Mailgen = require("mailgen");

/** send mail from testing account */
const signup = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "you message send to email",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  // res.status(201).json("Signup Successfully...!");
};

/** send mail from real gmail account */

let config = {
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
};

let transporter = nodemailer.createTransport(config);

let mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  },
});

let response = {
  body: name,
  intro: "bill has arrived!",
};

const getbill = (req, res) => {
  res.status(201).json("getbill Successfully...!");
};

module.exports = {
  signup,
  getbill,
};
