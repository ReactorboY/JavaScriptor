var express = require('express');

var app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public' ));
// homepage
app.get('/', function (req, res) {
   res.send('Hello World');
});

app.listen(3000, function () {
   console.log('Server is listening to port 3000');
})
