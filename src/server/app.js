const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const { createEmailAddress } = require('../utils/createEmailAddress');
const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', (req, res) => {
  if (!req.body.fullName || !req.body.companyUrl) {
    return res.status(400).send({ error: "Inputs are required" });
  }
  const getResult = `${createEmailAddress(req.body.fullName, req.body.companyUrl)}`;
  res.send(getResult);
    
});

app.listen(port, () => {
  console.log('Server started');
});