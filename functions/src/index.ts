import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as logger from "firebase-functions/logger";
import nodemailer from "nodemailer";

// 🔐 Initialisation Firebase
initializeApp();

// 🔐 Secrets
const GMAIL_EMAIL = defineSecret("GMAIL_EMAIL");
const GMAIL_PASS = defineSecret("GMAIL_PASS");
const CONTACT_SECRET = defineSecret("CONTACT_SECRET");

export const sendMail = onRequest(
  {
    region: "europe-west1",
    secrets: [GMAIL_EMAIL, GMAIL_PASS, CONTACT_SECRET],
    timeoutSeconds: 10,
    memory: "256MiB",
  },
  async (req, res) => {
    // ✅ CORS
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type, X-Secret-Key");

    // ✅ Préflight
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    // 🔐 Vérification de la clé secrète
    const clientSecret = req.get("X-Secret-Key");
    const serverSecret = process.env.CONTACT_SECRET;

    if (clientSecret !== serverSecret) {
      logger.warn("⛔ Accès refusé : mauvaise clé ou clé absente");
      res.status(403).send("Accès refusé");
      return;
    }

    // ✅ Extraction des données
    const { prenom, nom, email, telephone, message } = req.body;

    if (!prenom || !nom || !telephone || !message) {
      res.status(400).send("Données manquantes");
      return;
    }

    // ✅ Transporteur Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ✅ Contenu HTML du mail
    const htmlContent = `
  <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f2f8f9; padding: 40px 0;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.08);">
      
      <div style="background-color: #13abc4; padding: 24px; text-align: center;">
        <img src="https://nicolepages-website.web.app/assets/svg/papillon_blanc.png" alt="Nicole Pages" style="height: 60px;" />
      </div>
      
      <div style="padding: 32px;">
        <h2 style="color: #13abc4; margin-top: 0; font-size: 24px;">Message de ${prenom} ${nom}</h2>
        
        <p style="font-size: 16px; margin: 24px 0;">Vous avez reçu un message depuis le site <strong>Nicole Pages</strong>.</p>

        <div style="margin: 24px 0;">
          <p style="font-weight: bold; margin-bottom: 8px;">Souhaitez-vous rappeler ${prenom} ?</p>
            <a href="tel:${telephone}" style="
              display: inline-flex;
              align-items: center;
              gap: 10px;
              padding: 14px 28px;
              background-color: #108194;
              color: white;
              text-decoration: none;
              border-radius: 999px;
              font-size: 16px;
              font-weight: 600;
              font-family: 'Helvetica Neue', Arial, sans-serif;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            ">
              Appeler ${prenom}
            </a>
        </div>

        <table style="width: 100%; margin-top: 24px; font-size: 15px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #f2f2f2;">Nom</td>
            <td style="padding: 8px;">${prenom} ${nom}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #f2f2f2;">Téléphone</td>
            <td style="padding: 8px;">${telephone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #f2f2f2;">Email</td>
            <td style="padding: 8px;">${email || "<i>(non fourni)</i>"}</td>
          </tr>
        </table>

        <div style="margin-top: 24px;">
          <p style="font-weight: bold;">Message :</p>
          <div style="background-color: #f9f9f9; padding: 16px; border-radius: 6px; white-space: pre-wrap; color: #333;">
            ${message}
          </div>
        </div>
      </div>

      <div style="background: #13abc4; padding: 20px; text-align: center; color: white; font-size: 13px;">
        Ce message a été envoyé via le formulaire de contact du site<br />
        <a href="https://nicolepages-website.web.app" style="color: white; text-decoration: underline;">Nicole Pages</a>
      </div>
    </div>
  </div>
`;

    // ✅ Envoi du mail
    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `Message de ${prenom} ${nom} via le site Nicole Pages`,
      text: `Bonjour Nicole,\n\nNom : ${prenom} ${nom}\nTéléphone : ${telephone}\nEmail : ${
        email || "(non fourni)"
      }\n\nMessage :\n${message}`,
      html: htmlContent,
    };

    try {
      await transporter.sendMail(mailOptions);
      logger.info("✅ E-mail envoyé avec succès");
      res.status(200).send({ success: true });
    } catch (error) {
      logger.error("❌ Erreur d’envoi :", error);
      res.status(500).send({ error: "Erreur lors de l’envoi de l’e-mail" });
    }
  }
);
