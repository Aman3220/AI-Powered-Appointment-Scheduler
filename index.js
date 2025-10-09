import express from 'express';
import dotenv from 'dotenv';

import Routes from './routes/route.js';

dotenv.config();

const app = express(); 

app.use(express.json());
app.use('/api',Routes);

app.get('/', (req, res) => {
    res.send('AI Appointment Schedular API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 