const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const port = 8000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', { useNewUrlParser: true, useUnifiedTopology: true });

//Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

var Contact = mongoose.model('Contact', contactSchema);

// EXPRESS SPECIFIC STUFFS
app.use('/static', express.static('static')); //for serving static files
app.use(express.urlencoded()); //It's a middleman. It helps to provide data from app to express

// PUG SPECIFIC STUFFS
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been successfully saved to the database!!");
    }).catch(() => {
        res.status(400).send("This item is not successfully saved to the database");
    })

});

// START THE SERVER
app.listen(port, () => {
    console.log(`The app is started successfully at port ${port}`);
})