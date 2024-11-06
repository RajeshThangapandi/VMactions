const express = require('express');
const app = express();


app.get('/sayHello', (req, res) => {
    res.json({ message: 'Hello User' });
});

const PORT = 80;
app.listen(80, '0.0.0.0', () => {
    console.log('Server is running');
});
