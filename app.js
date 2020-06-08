const express = require('express')
const app = express()
const port = 3000
const Twitter = require('./api/helpers/twitter')
const twitter = new Twitter();
//const axios = require('axios');
require('dotenv').config()

app.get('/', (req, res) => {
    res.send("Hello World")
})

//Allow access to Access-control-Origin
app.use((req, res, next) => {
    res.setHeader('Access-control-Allow-Origin', '*');
    next();
})

app.get('/tweets', (req, res) => {
    //console.log(req.query)
    const query = req.query.q;
    const count = req.query.count;
    //console.log(process.env.TWITTER_API_TOKEN);
    twitter.get(query, count).then((response) => {
        res.status(200).send(response.data);

    }).catch((error) => {res.status(400).send(error)});

})

app.listen(port, () => console.log(`Twitter APP listening on port ${port}!`))