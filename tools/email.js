import nodemailer from "nodemailer";
import { createTestAccount } from "nodemailer";

const sendTestMail = async () => {
  const testAccount = await createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: '"Test App" <test@example.com>',
    to: "devendrabankey1234@gmail.com",
    subject: "Test Email",
    text: "This is a test message",
    html: "<b>This is a test message</b>",
  });

  console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
};

export { sendTestMail };
