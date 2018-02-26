require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db');
var User = sequelize.import('./models/user.js');
var UserArtwork = sequelize.import('./models/userArtwork.js')

UserArtwork.sync(); // tip: {force: true} for resetting tables
User.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});


app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));
app.use('/api/artwork', require('./routes/artwork'));
app.use('/api/museum', require('./routes/museums'));
app.use('/api/UserArtwork', require('./routes/userArtwork'))