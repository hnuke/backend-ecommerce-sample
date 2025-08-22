import express from 'express';

const app = express();
const port = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('OK! 200');
});



app.listen(port);