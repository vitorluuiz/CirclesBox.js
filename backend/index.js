const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const roomsController = require('./controllers/roomsController');
const leaderboardController = require('./controllers/leaderboardController');

const app = express();
const port = process.env.API_PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/rooms', roomsController);
app.use('/leaderboard', leaderboardController);

app.listen(port, () => {
    console.log(`Servidor Express rodando em ${process.env.API_URL || `http://127.0.0.1:${port}`}`);
});