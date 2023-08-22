// set up ======================================================================
// get all the tools we need
const express  = require('express');
const app      = express();
const config = require('./config/serverConfig');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash    = require('connect-flash');

const path    = require('path');
const port = process.env.PORT || config.Server_Port;

const morgan = require('morgan');

// set up our express application
app.use(express.static(__dirname));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/css", express.static(__dirname + "/public/css"))
app.use("/config", express.static(__dirname + "/config"));
app.use("/pic", express.static(__dirname + "/pic"));
app.set('views', path.join(__dirname, './', 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

require('./routes/routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);

