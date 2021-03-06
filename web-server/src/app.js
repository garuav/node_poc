const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecaste = require('./utils/forecaste');
const port = process.env.PORT || 300;

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
    if(!req.query.address) {
        return res.send({
            status: 'failure',
            error: 'Please pass the address as that is mandatory'
        });
    }
    geocode.getGeoCode(req.query.address, (error, {latitude, longitude, location_name} = {}) => {
        if(error) {
            return res.send({error});
        }
        forecaste.getForecaste(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({error});
            }
            return res.send({
                forecast: forecastData,
                location: req.query.address,
                locationDetails: location_name
            })
        })
    })
})
app.get('/help/*', (req, res) => {
    
    res.render('404', {
        title: 'Help Subroute not found ',
        createdBy: 'Gaurav'
    })
});
app.get('*' ,(req, res) => {
    res.render('404', {
        title: 'Page Not found ',
        createdBy: 'Gaurav'
    })
})

app.listen(port, () => {
    console.log('Server is running in Port ' + port);
}) 