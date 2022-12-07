//Importazioni
require('dotenv').config()
const express = require('express');
const app = express();

const util = require('util');

console.log("ciao a tutti")

const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for Api
const routerUtente = require('./routes/utente');
app.use('/', routerUtente);

const routerAnnuncio = require('./routes/annuncio');
app.use('/api/a', routerAnnuncio);

//Aggiungere FE
app.use('/', express.static(process.env.FRONTEND || '../static'));
app.use('/', express.static('../static'));

//Server UP

const listener = app.listen(process.env.PORT || 8080, () =>
    console.log('Web server listening on port ' + listener.address().port),
);

//Database UP
const mongoose = require('mongoose');
const Annuncio = require('./models/annuncio');
const exp = require('constants');

mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);
