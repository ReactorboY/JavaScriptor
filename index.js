var express = require('express');

var app = express();

// homepage
app.get('/', function (req, res) {
   res.send('Hello World');
});

// about page
app.get('/about', function (req, res) {
   res.send('This is About');
});

// string to match abcd
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});
// custom 404 pages
app.use(' ', function (req, res) {
   res.send('Not found');
});


app.listen(3000, function () {
   console.log('Server is listening to port 3000');
})
