var express = require('express');
var ehbs = require('express-handlebars');


var app = express();
app.engine('handlebars', ehbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public' ));
// homepage
app.get('/', function (req, res) {
   res.render('home');
});

app.listen(3000, function () {
   console.log('Server is listening to port 3000');
})
