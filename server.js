/********************************************************/
/******************** Express Server ********************/
/********************************************************/

/*********** Setting up DATABASE Connection ***********/
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
var db;

/*********** DATABASE info is in .ENV File ***********/
MongoClient.connect(process.env.DATABASE, (err, client) => {
  if (err) return console.log(err);
  db = client.db('log-collector-demo'); // whatever your database name is
  console.log(`MongoDB connection open on ${process.env.DATABASE}`);
})

/*********** Requirements and Server Setup ***********/
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

/*********** Setting the Port to Listen To ***********/
app.listen(3000, function() {
  console.log('listening on 3000')
})

/*********** Using Static Files like CSS/JS to Display with Response ***********/
app.use(express.static(__dirname + '/public'));
/*********** When User Gets / The Index.HTML is Displayed with Static CSS and JS ***********/
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  console.log('Arrived at Index Home')
})

app.post('/informationRequest', (req, res) => {
    db.collection('userinfo').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

/* Ideas on how to implement */
/* 
1) Have JS hold their email (will be in console.log)
2) When they submit the logs, have node check their mongodb email & tracking email with the one in JS
3) If there is a match, go ahead and submit the logs with the correct information in the backend after grabbing the text files
*/