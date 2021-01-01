const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
let bodyParser = require('body-parser')

const dotenv = require('dotenv');
dotenv.config();



// const port = process.env.PORT; // 8626
// const key = process.env.API_KEY;
// const root_url = process.env.API_URL; 


const port = 3000;
const key = '81c30a80ddd5b3a82bcf35083a43ed9c';

app.use(express.static('C:/repos/nlp/src/views'));
app.use(express.json());
// app.use(express.urlencoded( {extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send({});
});

app.post('/api', (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${req.body.fullurl},us&appid=${key}`;
    const sent_url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${req.body.fullurl}&model=general`
    console.log(sent_url)
    
    axios.get(sent_url)
        .then(data => {
            //console.log(data.data);
            const dataPackage = createPackage(data.data);
            console.log(dataPackage);
            res.send(dataPackage)})
            //res.json(data);})
        .catch(error => {
            console.log('ERROR')
            console.log(error);
        })

});

function createPackage(data){
    let date = new Date();
    // console.log(date.toDateString());

    const package = {
        "agreement" : data.agreement,
        "subjectivity" : data.subjectivity,
        "confidence" : data.confidence,
        "irony:" : data.irony
    };

    return package;
}


app.listen(port, () => console.log(`listening on port ${port}`));

