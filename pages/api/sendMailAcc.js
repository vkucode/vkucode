// pages/api/sendMailAcc.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    // Creează transportul Nodemailer
    let transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Poate fi smtp.your-mail-server.com
      port: 465,
      secure: true, // True pentru port 465, false pentru alte porturi
      auth: {
        user: process.env.EMAIL, // Contul tău de email
        pass: process.env.PASS, // Parola contului de email
      },
    });

    try {
      // Trimite emailul
      await transporter.sendMail({
        from: '"VKU Code" <admin@vkucode.com>', // Expeditorul
        to: "admin@vkucode.com", // Destinatarul
        subject: "Nou mesaj de contact", // Subiectul emailului
        text: `
          Name: ${name}
          Phone: ${phone}
          Email: ${email}
          Message: ${message}
        `,
        html: `
          <h3>Nou mesaj de contact</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      // Răspuns în caz de succes
      res.status(200).json({ message: "Email trimis cu succes!" });
    } catch (error) {
      // Răspuns în caz de eroare
      res.status(500).json({ error: "Eroare la trimiterea emailului." });
    }
  } else {
    // Metodă HTTP invalidă
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Metoda ${req.method} nu este permisă.`);
  }
}
