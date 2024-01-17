var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello worldddd');
=======
 res.send('hello world');
>>>>>>> 7135b7079e560c9270bc8e8e476ad5cf4a02f453
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
