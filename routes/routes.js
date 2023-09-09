const bodyParser = require('body-parser');
const flash = require('connect-flash')
const cors = require('cors')
module.exports = function (app) {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(flash())
    app.use(cors({
        origin: '*',
        credentials: true
    }));
    app.get('/', function (req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*"); // Allow cross domain header
        res.render('index.ejs', {
        });
    });
    app.get('/main', function (req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*"); // Allow cross domain header
        res.render('index2.ejs', {
        });
    });
    app.get('/about', function(req, res){
        res.setHeader("Access-Control-Allow-Origin", "*"); // Allow cross domain header
        res.render('about.ejs', {
        });
    })
    app.get('/projects', function(req, res){
        res.setHeader("Access-Control-Allow-Origin", "*"); // Allow cross domain header
        res.render('projects.ejs', {
        });
    })


}