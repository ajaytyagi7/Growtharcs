const express = require('express');
const UserRouter = require('./Router/UserRouter');
require('dotenv').config();

const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    orgin: 'http://localhost:5173'
}));

app.use('/users', UserRouter);

app.listen(port, () => { console.log('Server Started !!') });