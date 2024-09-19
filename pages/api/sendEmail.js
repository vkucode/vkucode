// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      phone,
      email,
      company,
      message,
      projectType,
      budgetRange,
      source,
    } = req.body;

    // Creează transportul Nodemailer
    let transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // De exemplu, smtp.your-mail-server.com
      port: 465,
      secure: true, // True pentru port 465, false pentru alte porturi
      auth: {
        user: "noreply@vkucode.com", // Contul tău de email
        pass: "noreplyVku23#", // Parola contului de email
      },
    });

    try {
      // Trimite emailul
      await transporter.sendMail({
        from: '"VKU Code" <noreply@vkucode.com>', // Expeditorul
        to: "admin@vkucode.com", // Destinatarul (poți adăuga mai mulți separați prin virgulă)
        subject: "Nou mesaj de contact", // Subiectul emailului
        text: `
                    Name: ${name}
                    Phone: ${phone}
                    Email: ${email}
                    Company: ${company}
                    Message: ${message}
                    Project Type: ${projectType}
                    Budget Range: ${budgetRange}
                    Source: ${source}
                `,
        html: `
                    <h3>Nou mesaj de contact</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company}</p>
                    <p><strong>Message:</strong> ${message}</p>
                    <p><strong>Project Type:</strong> ${projectType}</p>
                    <p><strong>Budget Range:</strong> ${budgetRange}</p>
                    <p><strong>Source:</strong> ${source}</p>
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
