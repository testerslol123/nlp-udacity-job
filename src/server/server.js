const path = require('path');
const express = require('express');
var favicon = require('serve-favicon');
const app = express();
const axios = require('axios');


const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Serving Static
app.use(express.static(path.join(__dirname, '../client/views')));
app.use(favicon(path.join(__dirname, '../client/views', 'favicon.ico')));

app.post('/api', async (req, res) => {

  const sent_url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${req.body.url}&model=general`;
  console.log(sent_url);


  await axios
    .get(sent_url)
    .then((data) => {
      //console.log(data.data);
      const dataPackage = createPackage(data.data);
      console.log(dataPackage);
      res.send(dataPackage);
    })
    //res.json(data);})
    .catch((error) => {
      console.log('ERROR');
      console.log(error);
    });
});

app.get('/', (req, res) => {
  res.send({});
});

function createPackage(data) {

  const package = {
    agreement: data.agreement,
    subjectivity: data.subjectivity,
    confidence: data.confidence,
    irony: data.irony,
  };

  return package;
}

app.listen(port, () => console.log(`listening on port ${port}`));
