const express = require("express");
const cors = require('cors');

const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/instagram', (req, res) => {
    res.send('this is the instagram way');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
