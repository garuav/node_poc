const express = require('express');
const path = require('path');
const app = express();

const publicDirPath = path.join(__dirname,'../public');

console.log('publicDirPath' ,publicDirPath);
app.use(express.static(publicDirPath))


app.get('/about', (req, res) => {
    // console.log(req.query);
    // res.send(publicDirPath.)
    res.sendFile(publicDirPath+'/about.html')
});

app.get('/weather', (req, res) => {
    res.send({location: 'BTM', forecaste: '27 degree C'})
})

app.listen(3000, () => {
    console.log('Server is running in Port 3000');
}) 