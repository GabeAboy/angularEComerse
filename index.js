
var express = require('express');
var app = express();
var port = (process.env.PORT || 8000);

app.use(express.static(__dirname));
app.get('/',function(req,res) {
  res.render('index')
})
app.listen(port,function(req,res) {
  console.log('app is running');
})
// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
//
// app.get('/', function(request, response) {
//   response.render('index.html')
// });
//
//
//
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });
