const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const scrapeIt = require("scrape-it");

app.use('/', express.static(path.join(__dirname, '/build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/scraper', function(req,res){ 
  console.log(req.query);
  scrapeIt(req.query.url, {
    data: req.query.selectors
  }).then(({ data, response }) => {
      console.log(`Status Code: ${response.statusCode}`)
      res.send(data)
  })
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);