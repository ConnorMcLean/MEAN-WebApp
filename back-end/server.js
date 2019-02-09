import express from 'express';

const app = express();

app.get('/', (req, res) => res.send("Hello world"));
app.listen(4000, () => console.log('express server running on port 4000...'));
