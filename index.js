var express = require('express');
var app = express();


var express = require('express');
var app = express();
var things = require('./things.js');
const cors = require('cors')
app.use(cors())

//both index.js and things.js should be in same directory
app.use('/url-checker', things);

app.listen(3000);



/*
app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(3000); */