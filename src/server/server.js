const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();


const port = process.env.port;
const key = process.env.API_KEY;


const viewsPath = path.join(__dirname, '../views')

app.use(express.static(viewsPath));
// app.use(express.static('C:/repos/nlp/src/views'));
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(cors());


app.post('/api', (req, res) => {
    console.log(req.body);
    res.send(req.body);

});



// app.post('/api', (req, res) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?zip=${req.body.zipcode},us&appid=${key}`;
    
//     axios.get(url)
//         .then(data => {
//             console.log(data.data);
//             //const dataPackage = createPackage(data.data);
//             //console.log(dataPackage);
//             res.json(data);})
//         .catch(error => {
//             console.log(error);
//         })


// });



app.listen(port, () => console.log(`Listening on port ${port}`));

