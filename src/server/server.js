const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();



// const port = process.env.PORT; // 8626
// const key = process.env.API_KEY;
// const root_url = process.env.API_URL; 


const port = 3000;
const key = '81c30a80ddd5b3a82bcf35083a43ed9c';

app.use(express.static('C:/repos/nlp/src/views'));
app.use(express.json());
app.use(express.urlencoded( {extended: true}));



app.post('/api', (req, res) => {
    console.log(`Request is ${req.body.fullurl}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${req.body.fullurl},us&appid=${key}`;
    
    axios.get(url)
        .then(data => {
            //console.log(data.data);
            const dataPackage = createPackage(data.data);
            console.log(dataPackage);
            //res.send(dataPackage)})
            res.json(dataPackage);})
        .catch(error => {
            console.log('ERROR')
            console.log(error);
        })

});

function createPackage(data){
    let date = new Date();
    // console.log(date.toDateString());

    const package = {
        "date" : date.toDateString(),
        "city" : data.name,
        "icon" : data.weather[0].icon,
        "wind" : data.wind.speed,
        "temp" : data.main.temp,
        "long" : data.coord.lon,
        "lat" : data.coord.lat,
    };

    return package;
}


app.listen(port, () => console.log(`listening on port ${port}`));

