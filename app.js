var express = require('express');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var Contact= require('./contactController')
mongoose.connect('mongodb://localhost/test');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(__dirname+ '/public')
app.get('/api', Contact.lists)
app.post('/api',Contact.add)
app.route('/api/:id')
.get(Contact.list)
.put(Contact.update)
.delete(Contact.delete)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
