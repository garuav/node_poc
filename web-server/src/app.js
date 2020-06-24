const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
// Define paths for Express config
const publicDirPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('' ,(req, res) => {
    res.render('index', {
        title: 'Index HBS ',
        createdBy: 'Gaurav'
    })
})


app.get('/about', (req, res) => {
    
    res.render('about', {
        title: 'About Page ',
        createdBy: 'Gaurav'
    })
});

app.get('/help', (req, res) => {
    
    res.render('help', {
        title: 'Help Page ',
        createdBy: 'Gaurav'
    })
});

app.get('/weather', (req, res) => {
    res.send({location: 'BTM', forecaste: '27 degree C'})
})

app.listen(3000, () => {
    console.log('Server is running in Port 3000');
}) 