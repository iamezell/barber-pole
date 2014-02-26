
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./lib/routes')
  , http = require('http')
  , fs = require('fs')
  , path = require('path');

var app = express();
var MongoStore = require('connect-mongo')(express);
var members = require('./lib/routes/members');
var path = require('path');
var user = require('./lib/routes/user');
var api = require('./lib/routes/api');
var routes = require('./lib/routes');

// all environments
app.use(express.bodyParser());
app.set('port', process.env.PORT || 3030);
app.set('views', path.join(__dirname, 'lib/views'));
app.set('view engine', 'ejs');


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
//make this more secure later
app.use(express.cookieParser('1234567890QWERTY'));
// app.use(express.session());
app.use(express.session({
  store: new MongoStore({
    db: 'barberPoledb',
    host: '127.0.0.1',
    
  })
}));
app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}




app.get('/', routes.index);
app.get('/members', members.members);
app.post('/regi', user.register);
app.post('/signin', user.signin)
app.get('/verify', user.verify);
app.get('/logout', user.logout)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
