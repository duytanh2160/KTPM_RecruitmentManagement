var express = require('express');
var app = express.Router();
module.exports = app;
var bodyParser = require('body-parser');
var db = require('./db.js');
var request = db.connection();
//Define CONST.
PORT = "8000";
FILEDESTINATION = "uploads/images/avatars";
IMAGEURL = "/images/avatars";



//Use library
app.use(bodyParser.json()); // Khai báo app sẽ sử dụng bodyParser chuyển data về dạng json

