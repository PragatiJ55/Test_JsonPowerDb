var mysql= require('mysql')
var express = require('express');
var app = express();

var bodyParser= require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile('index.html',{root:__dirname});
});
app.get('/index.html', function(req, res){
    res.sendFile('index.html',{root:__dirname});
});
app.get('/about_us.html', function(req, res){
    res.sendFile('about_us.html',{root:__dirname});
});
app.get('/services.html', function(req, res){
    res.sendFile('services.html',{root:__dirname});
});
app.get('/our_team.html', function(req, res){
    res.sendFile('our_team.html',{root:__dirname});
});
app.get('/projects.html', function(req, res){
    res.sendFile('projects.html',{root:__dirname});
});
app.get('/projects.html#living_room', function(req, res){
    res.sendFile('projects.html#living_room',{root:__dirname});
});
app.get('/projects.html#dining_room', function(req, res){
    res.sendFile('projects.html#dining_room',{root:__dirname});
});
app.get('/projects.html#nursery', function(req, res){
    res.sendFile('projects.html#nursery',{root:__dirname});
});
app.get('/projects.html#office', function(req, res){
    res.sendFile('projects.html#office',{root:__dirname});
});
app.get('/contact_us.html', function(req, res){
    res.sendFile('contact_us.html',{root:__dirname});
  
});


var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"formdb"
})

con.connect(function(err){
    if(err) throw err;
})

app.post('/submit-data',urlencodedParser,function(req,res){
    
    var sql="insert into submissions values('"+ req.body.name +"','"+ req.body.email +"','"+ req.body.subject +"','"+ req.body.query +"')";
    console.log(sql);
    con.query(sql, function(err){
        if(err) throw err;
        console.log("1 entry added")
        res.send("data saved successfully");
    });
  
    con.end();


});


var server=app.listen(8080, function(){
    console.log('Node server is running..');
})



  