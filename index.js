var express= require('express');
var router = express.Router();
var app = express();
var mysql_odbc = require('./db/db_conn')();
var conn = mysql_odbc.init();
app.listen(8005, () => console.log("Server running on 8005"));
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var boardRoutes = require('./routes/board');
app.use(boardRoutes);

conn.query('SELECT * FROM board', function(err, result){
    if(err) throw err;
    // console.log(result);
})

app.get("/", (req, res) => {
    res.render("home");
});