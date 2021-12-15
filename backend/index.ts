import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors';

const app = express();
const PORT = 4000;

// setting up mongodb
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/soccerDB');

// bodyparser setup
app.use(bodyparser.urlencoded({extended : true}))
app.use(bodyparser.json())

// CORS Setup
app.use(cors());

routes(app);

app.get('/', (req, res) => {
    res.send(`Backend running on port: ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})