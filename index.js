var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello sakshiii');
=======
 res.send('hello words');
>>>>>>> 8d520904bd5413f609d8914fdbed7e3ba1ed9902
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
