const express = require('express');
const fs = require("fs");
const path = require('path');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug ||
app.set('views', path.join(__dirname, 'views')); // set the views directory

//ENDPOINTS
app.get('/', (req, res) => {
    const con = 'This is the best content on internet so far so use it wisely';
    const params = { 'title': 'PubG is the best Game', 'content': con };
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res) => {
    // console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    const more = req.body.more;
    let outPutToWrite = `Client name is ${name}. Age is ${age}. Gender ${gender}. Lives in ${address}. More about client: ${more}`;

    fs.writeFileSync("output.txt", outPutToWrite);
    const params = { 'message': 'Your form is successfully submitted' };
    res.status(200).render('index.pug', params);
})

//START THE SERVER
app.listen(port, () => {
    console.log(`The aplication started successfully on ${port}`);
})