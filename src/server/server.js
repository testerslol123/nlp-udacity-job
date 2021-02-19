const path = require('path');
const express = require('express');
var favicon = require('serve-favicon');
const app = express();
const axios = require('axios');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT;
console.log(process.env.API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use(express.static('src/dist'));
app.use(favicon(path.join(__dirname, '../client/views', 'favicon.ico')));

app.post('/api', async (req, res) => {

  const sent_url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${req.body.url}&model=general`;
  console.log(sent_url);


  await axios
    .get(sent_url)
    .then((data) => {
      const dataPackage = createPackage(data.data);
      console.log(dataPackage);
      res.send(dataPackage);
    })

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
