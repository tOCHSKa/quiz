
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const connectToDb = require('./db.js');
require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(bodyParser.json());

// Utiliser CORS pour toutes les routes
app.use(cors());

connectToDb();

const userRoutes = require('./routes/users')
const profilRoutes = require('./routes/profil')

app.use('/api/users', userRoutes);
app.use('/api/users/register', userRoutes);
app.use('/api/users/login', userRoutes)


app.use('/api/profil/', profilRoutes);
app.use('/api/profil/add', profilRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})