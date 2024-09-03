const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
require('dotenv').config();
const connectToDb = require('../db');



router.post('/add', async (req, res) => {
    try {
        const db = await connectToDb(); // Se connecter à la base de données

        if (!db) {
            return res.status(500).json({ message: 'Erreur de connexion à la base de données' });
        }

        const { nom, theme } = req.body;

        const sql = 'INSERT INTO quiz (nom, theme, ) VALUES (?, ?)';

        const [results] = await db.query(sql, [nom, theme]); // Exécution de la requête SQL

        res.status(201).json({ message: 'quiz Créé' }); // Réponse avec succès et l'ID de l'utilisateur créé
    } catch (err) {
        console.error('Erreur lors de la création du quiz', err);
        res.status(500).send(err); // Gestion des erreurs
    }


});

module.exports = router;