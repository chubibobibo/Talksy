import Mailgun from "mailgun.js";
import dotenv from "dotenv";
import { createWelcomeEmailTemplate } from "./welcomeEmail.js";
dotenv.config();

export const mailSender = async (
  dest: string,
  sender: string,
  subject: string,
  name: string
) => {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API || "API_KEY",
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net"
  });
  try {
    const data = await mg.messages.create(
      "sandboxe08ba2ff8de34d639b971225b8f6ac64.mailgun.org",
      {
        from: sender,
        to: [dest],
        subject: subject,
        text: "Congratulations chubibobibo, you just sent an email with Mailgun! You are truly awesome!",
        html: createWelcomeEmailTemplate(name, "http://localhost:5173/login"),
      }
    );
    console.log(data); // logs response data
  } catch (error) {
    console.log(error); //logs any error
  }
};
