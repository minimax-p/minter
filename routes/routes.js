const bodyParser = require('body-parser');
const serverConfig = require('../config/serverConfig');
const fs = require("fs");
const flash = require('connect-flash')
const async = require('async');
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