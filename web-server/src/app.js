const express = require('express');

const app = express();

app.get('', (req, res) => {
        res.send('Hello Express')
});

app.get('/about', (req, res) => {
    res.send('Welcome about page')
})

app.listen(3000, () => {
    console.log('Server is running in Port 3000');
})