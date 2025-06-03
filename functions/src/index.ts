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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #fff; color: #333; padding: 20px; border-radius: 8px; box-shadow: 0 0 5px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://nicolepages-website.web.app/favicon.ico" alt="Nicole Pages" style="height: 60px;" />
        </div>

        <h2 style="color: #13abc4; margin-top: 0;">Message de ${prenom} ${nom}</h2>

        <p><strong>Souhaitez-vous rappeler ${prenom} ?</strong></p>
        <div style="text-align: center; margin: 16px 0;">
          <a href="tel:${telephone}" style="display: inline-block; padding: 12px 20px; background: #13abc4; color: white; text-decoration: none; border-radius: 6px; font-size: 16px;">
            📞 Appeler ${telephone}
          </a>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; background: #f5f5f5; font-weight: bold;">Nom</td>
            <td style="padding: 8px;">${prenom} ${nom}</td>
          </tr>
          <tr>
            <td style="padding: 8px; background: #f5f5f5; font-weight: bold;">Téléphone</td>
            <td style="padding: 8px;">${telephone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; background: #f5f5f5; font-weight: bold;">Email</td>
            <td style="padding: 8px;">${email || "<i>(non fourni)</i>"}</td>
          </tr>
        </table>

        <p style="font-weight: bold;">Message :</p>
        <div style="white-space: pre-wrap; background: #f9f9f9; padding: 12px; border-radius: 4px; margin-bottom: 20px;">
          ${message}
        </div>

        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999; text-align: center;">
          Ce message a été envoyé via le formulaire de contact du site
          <a href="https://nicolepages-website.web.app" style="color: #13abc4;">Nicole Pages</a>
        </p>
      </div>
    `;

        // ✅ Contenu du mail
        const mailOptions = {
            from: process.env.GMAIL_EMAIL,
            to: process.env.GMAIL_EMAIL,
            subject: `Message de ${prenom} ${nom} via le site Nicole Pages`,
            text: `Bonjour Nicole,\n\nNom : ${prenom} ${nom}\nTéléphone : ${telephone}\nEmail : ${email || "(non fourni)"}\n\nMessage :\n${message}`,
            html: htmlContent,
        };

        // ✅ Envoi du mail
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
