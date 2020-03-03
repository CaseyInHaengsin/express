const path = require('path');
const express = require('express');

console.log(__dirname);

const public = path.join(__dirname, '../public');

const app = express();


app.set('view engine', 'hbs');
app.use(express.static(public));

app.get('', (req,res) => {
    res.render('index', {title: 'Weather App'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'about page'});
});

app.get('/help', (req, res) => {
    res.render('help', {title: 'Help Page', helpText: "what up, what up?"})
});





app.get('/weather', (req,res) => {
    res.send({
        forecast: "Sunny with a chance of.. pain",
        location: "Provo, Utah"
    });
});



app.listen(3000, () => {
    console.log('server is up!')
});






