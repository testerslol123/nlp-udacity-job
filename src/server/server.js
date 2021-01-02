const express = require('express');
const app = express();
const axios = require('axios');

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

// app.get('/weather', (req, res) => {
//     res.send(entries)
// });

app.post('/api', (req, res) => {
    console.log(req.body)
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=1bdf1b7435842042c123f1b3fe57a74e&lang=en&url=${req.body.url}&model=general`
    console.log(url)
    // const url = `https://api.meaningcloud.com/sentiment-2.1?key=1bdf1b7435842042c123f1b3fe57a74e&lang=en&url=https://www.archives.gov/founding-docs/declaration-transcript&model=general`
    
    axios.get(url)
        .then(data => {
            console.log(data.data);
            //const dataPackage = createPackage(data.data);
            //console.log(dataPackage);
            res.json(data.data);})
        .catch(error => {
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
