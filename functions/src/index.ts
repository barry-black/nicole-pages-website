import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";

admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nicolepages.therapie@gmail.com",
        pass: functions.config().gmail.pass,
    },
});

export const sendMail = functions
    .region("europe-west1")
    .runWith({ memory: "256MB", timeoutSeconds: 10 })
    .https.onCall(
        async (
            request: any
        ) => {
            const { prenom, nom, email, telephone, message } = request.data;

            const mailOptions = {
                from: "nicolepages.therapie@gmail.com",
                to: "nicolepages.therapie@gmail.com",
                subject: "Prise de rendez-vous via le site",
                text: `Bonjour Nicole,\n\nVous avez reçu un message depuis le formulaire :\n\nNom : ${prenom} ${nom}\nEmail : ${email}\nTéléphone : ${telephone}\n\nMessage :\n${message}`,
            };

            try {
                await transporter.sendMail(mailOptions);
                console.log("Email envoyé avec succès !");
                return { success: true };
            } catch (error) {
                console.error("Erreur d’envoi d’email :", error);
                throw new functions.https.HttpsError(
                    "internal",
                    "Erreur lors de l'envoi de l’e-mail."
                );
            }
        }
    );
