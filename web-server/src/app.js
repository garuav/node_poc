const express = require('express');
const path = require('path');
const app = express();

const publicDirPath = path.join(__dirname,'../public');

console.log('publicDirPath' ,publicDirPath);
app.use(express.static(publicDirPath))
app.set('view engine', 'hbs');


app.get('' ,(req, res) => {
    res.render('index', {
        title: 'Index HBS file',
        name: 'Gaurav'
    })
})


app.get('/about', (req, res) => {
    
    res.render('about', {
        title: 'About Page HBS'
    })
});

app.get('/weather', (req, res) => {
    res.send({location: 'BTM', forecaste: '27 degree C'})
})

app.listen(3000, () => {
    console.log('Server is running in Port 3000');
}) 