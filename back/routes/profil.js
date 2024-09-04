const express = require('express');
const router = express.Router();
require('dotenv').config();
const connectToDb = require('../db');

// Route POST pour ajouter un quiz
router.post('/add', async (req, res) => {
    try {
        // Connexion à la base de données
        db = await connectToDb();
        if (!db) {
            return res.status(500).json({ message: 'Erreur de connexion à la base de données' });
        }

        // Récupération des données de la requête
        const { nom, theme, questions } = req.body;

        // Vérification des données nécessaires
        if (!nom || !theme || !Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ message: 'Données manquantes ou invalides' });
        }

        // Insertion du quiz dans la table 'quiz'
        const sqlQuiz = 'INSERT INTO quiz (nom, theme) VALUES (?, ?)';
        const [quizResult] = await db.query(sqlQuiz, [nom, theme]); // Exécution de la requête SQL
        const quizId = quizResult.insertId; // Récupération de l'ID du quiz inséré

        // Préparation des requêtes d'insertion pour les questions
        const sqlQuestions = 'INSERT INTO question (question, reponses, bonne_reponse, id_quiz) VALUES (?, ?, ?, ?)';

        // Traitement des questions
        for (const question of questions) {
            // Convertir les réponses en JSON
            const reponsesJson = JSON.stringify(question.reponses);

            // Insertion de la question avec les réponses sous forme de JSON
            await db.query(sqlQuestions, [question.question, reponsesJson, question.bonneReponse, quizId]);
        }

        return res.status(201).json({ message: 'Quiz ajouté avec succès' });

    } catch (error) {
        console.error('Erreur lors de l\'ajout du quiz:', error);
        return res.status(500).json({ message: 'Erreur lors de l\'ajout du quiz' });
    }
});


module.exports = router;
