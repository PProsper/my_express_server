const express = require('express');
const path = require('path');
const reload = require('reload');

const app = express();
//path for page title ejs ref
// app.local.siteTitle = 'HK';
//not sure what this does
app.set('port', process.env.PORT || 3000);
//lets express know that your using template editor ejs
app.set('view engine', 'ejs');
//lets express know to look in the views folder within the app folder for the view files
app.set('views', 'app/views');
//sets path for css files
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/posts'));
//this will be where your posts are rendered
app.use(require('./routes/api'));

var server = app.listen(app.get('port'),function(){
  console.log('on' + app.get('port'))
});
