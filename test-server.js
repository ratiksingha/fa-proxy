import express from 'express';
import swiggyHandler from './api/index.js';

const app = express();

app.get('/api/swiggy', swiggyHandler);

app.listen(3000, () => console.log('Listening on http://localhost:3000'));
