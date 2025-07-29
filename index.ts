import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/instagram', (req, res) => {
    res.json({
        message: "This is hello from instagram"
    })
})

app.get('/', (req, res) => {
    res.send("This is the working!!!");
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
