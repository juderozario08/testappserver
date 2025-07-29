const express = require("express");
const cors = require('cors');
const xhub = require('express-x-hub')

const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

var token = process.env.TOKEN || 'token';
var received_updates = [];

const app = express();

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'));

app.use(cors());
app.use(xhub({ algorithm: 'sha1', secret: process.env.APP_SECRET }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(req);
    res.send('<pre>' + JSON.stringify(received_updates, null, 2) + '</pre>');
});

app.get('/instagram', (req, res) => {
    if (req.query['hub.mode'] == 'subscribe' && req.query['hub.verify_token'] == token) {
        res.send(req.query['hub.challenge']);
    } else {
        res.sendStatus(400);
    }
});

app.post('/instagram', function(req, res) {
    console.log('Instagram request body:');
    console.log(req.body);
    received_updates.unshift(req.body);
    res.sendStatus(200);
});

app.listen(() => {
    console.log("Connected to port: ", app.get('port'));
});
