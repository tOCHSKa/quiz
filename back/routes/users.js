const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
require('dotenv').config();
const connectToDb = require('../db');
const jwt = require('jsonwebtoken');



router.get('/', async (req, res) => {
    try {
        const db = await connectToDb(); // Attendre que la connexion à la base de données soit établie

        if (!db) {
            return res.status(500).json({ message: 'Erreur de connexion à la base de données' });
        }

        const [results] = await db.query('SELECT * FROM users'); // Exécuter la requête SQL
        res.status(200).json(results); // Envoyer les résultats au client
    } catch (err) {
        res.status(500).send(err); // Gestion des erreurs
    }
});


router.post('/register', async (req, res) => {
    try {
        const db = await connectToDb(); // Se connecter à la base de données

        if (!db) {
            return res.status(500).json({ message: 'Erreur de connexion à la base de données' });
        }

        const { username, password, name, firstname, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe

        const sql = 'INSERT INTO users (username, password, name, firstname, role) VALUES (?, ?, ?, ?, ?)';

        const [results] = await db.query(sql, [username, hashedPassword, name, firstname, role]); // Exécution de la requête SQL

        res.status(201).json({ message: 'Utilisateur créé' }); // Réponse avec succès et l'ID de l'utilisateur créé
    } catch (err) {
        console.error('Erreur lors de la création de l\'utilisateur :', err);
        res.status(500).send(err); // Gestion des erreurs
    }
});


router.post('/login', async (req, res) => {
    try {
        const db = await connectToDb(); // Se connecter à la base de données

        if (!db) {
            return res.status(500).json({ message: 'Erreur de connexion à la base de données' });
        }

        const { username, password } = req.body;

        const sql = 'SELECT username, password FROM users WHERE username = ?';
        const [results] = await db.query(sql, [username]); // Utilisation de 'await' pour exécuter la requête SQL

        if (results.length === 0) {
            return res.status(401).send('Utilisateur non trouvé');
        }

        const match = await bcrypt.compare(password, results[0].password); // Comparaison du mot de passe avec bcrypt

        if (!match) {
            return res.status(401).send({ message: 'Mot de passe incorrect' });
        }
        const token = jwt.sign({
            username: username
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        // Authentification réussi
        return res.status(200).send({ token });

    } catch (err) {
        console.error('Erreur lors de la connexion de l\'utilisateur :', err);
        res.status(500).send({ message: 'Erreur serveur' }); // Gestion des erreurs
    }
});



module.exports = router;