import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as logger from "firebase-functions/logger";
import nodemailer from "nodemailer";

initializeApp();

// 🔐 Déclarations des secrets
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

        // ✅ Preflight CORS
        if (req.method === "OPTIONS") {
            res.status(204).send("");
            return;
        }

        // 🔐 Vérification de la clé secrète
        const clientSecret = req.get("X-Secret-Key");
        const serverSecret = process.env.CONTACT_SECRET;

        logger.info("🔐 X-Secret-Key reçu :", clientSecret);
        logger.info("🔐 CONTACT_SECRET attendu :", serverSecret);

        if (clientSecret !== serverSecret) {
            logger.warn("⛔ Accès refusé : mauvaise clé ou clé absente");
            res.status(403).send("Accès refusé");
            return;
        }

        const { prenom, nom, email, telephone, message } = req.body;

        if (!prenom || !nom || !telephone || !message) {
            res.status(400).send("Données manquantes");
            return;
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_EMAIL,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_EMAIL,
            to: process.env.GMAIL_EMAIL,
            subject: "Prise de rendez-vous via le site",
            text: `Bonjour Nicole,\n\nVous avez reçu un message depuis le formulaire :\n\nNom : ${prenom} ${nom}\nEmail : ${email || "(non fourni)"}\nTéléphone : ${telephone}\n\nMessage :\n${message}`,
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
