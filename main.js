var mysql= require('mysql')
var express = require('express');
var app = express();
const axios = require('axios')
var bodyParser= require("body-parser");
const { REFUSED } = require('dns');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const port=process.env.PORT || 8080

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
app.get('/unique.html', function(req, res){
    res.sendFile('unique.html',{root:__dirname});
  
});
app.get('/consultancy.html', function(req, res){
    res.sendFile('consultancy.html',{root:__dirname});
  
});
app.get('/furnishing.html', function(req, res){
    res.sendFile('furnishing.html',{root:__dirname});
  
});
app.get('/outdoor.html', function(req, res){
    res.sendFile('outdoor.html',{root:__dirname});
  
});
app.get('/remodelling.html', function(req, res){
    res.sendFile('remodelling.html',{root:__dirname});
  
});
app.get('/ceiling.html', function(req, res){
    res.sendFile('ceiling.html',{root:__dirname});
  
});
app.get('/floor.html', function(req, res){
    res.sendFile('floor.html',{root:__dirname});
  
});
app.get('/theme.html', function(req, res){
    res.sendFile('theme.html',{root:__dirname});
  
});
app.get('/vacancy.html', function(req, res){
    res.sendFile('vacancy.html',{root:__dirname});
  
});
app.get('/apply.html', function(req, res){
    res.sendFile('apply.html',{root:__dirname});
  
});
app.get('/privacy.html', function(req, res){
    res.sendFile('privacy.html',{root:__dirname});
  
});
app.get('/terms.html', function(req, res){
    res.sendFile('terms.html',{root:__dirname});
  
});

/*
var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"formdb"
})

con.connect(function(err){
    if(err) throw err;
})*/
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);

function validateAndGetFormData(req){
    var name_var = req.body.name;
    if(name_var === ""){
      alert("Name is required");
      
      return "";
    }
    var email_var = req.body.email;
    if(email_var === ""){
      alert("Name is required");
      
      return "";
    }
    var subject_var = req.body.subject;
    if(subject_var === ""){
      alert("subject is required");
      
      return "";
    }
    var query_var = req.body.query;
    if(query_var === ""){
      alert("query is required");
     
      return "";
    }
    var jsonStrObj = {
      name: name_var,
      email: email_var,
      subject: subject_var,
      query: query_var,
    }
    return JSON.stringify(jsonStrObj);
  }
  // This method is used to create PUT Json request.
  function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest = "{\n"
            + "\"token\" : \""
            + connToken
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"PUT\",\n"
            + "\"rel\" : \""
            + relName + "\","
            + "\"jsonStr\": \n"
            + jsonObj
            + "\n"
            + "}";
    return putRequest;
  }
  function executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, apiEndPointUrl) {
    var url = dbBaseUrl + apiEndPointUrl;
    var jsonObj;
   /* $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        var dataJsonObj = result.responseText;
        jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;*/

    axios
  .post(url, reqString)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    jsonObj = JSON.parse(res);
  })
  .catch(error => {
    var dataJsonObj = error.responseText;
        jsonObj = JSON.parse(dataJsonObj);
  })
  return jsonObj;

  }
app.post('/submit-data',urlencodedParser,function(req,res){
    console.log("what");
    var jsonStr = validateAndGetFormData(req);
    if(jsonStr === ""){
      return;
    }

    var putReqStr = createPUTRequest("Your_token", jsonStr, "formDB", "queries");
    //jQuery.ajaxSetup({async: false});
    //so that it goes back to the form only after executeCommand
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
    //alert(JSON.stringify(resultObj));
    //jQuery.ajaxSetup({async: true});
   
    res.render("form_submitted",{name: req.body.name});

});
/*app.post('/submit-data',urlencodedParser,function(req,res){
    
    var sql="insert into submissions values('"+ req.body.name +"','"+ req.body.email +"','"+ req.body.subject +"','"+ req.body.query +"')";
    console.log(sql);
    con.query(sql, function(err){
        if(err) throw err;
        console.log("1 entry added")
 
        res.render("form_submitted",{name: req.body.name});
        
    });
  
    con.end();


});
app.post('/apply',urlencodedParser,function(req,res){
    
    var sql="insert into applications values('"+ req.body.fullname +"','"+ req.body.emailid +"','"+ req.body.phone +"','"+ req.body.gender +"','"+ req.body.dob +"','"+ req.body.address +"','"+ req.body.pin +"','"+ req.body.position +"','"+ req.body.experience +"','"+ req.body.upload +"')";
    console.log(sql);
    con.query(sql, function(err){
        if(err) throw err;
        console.log("1 entry added")
        res.render("application_submitted",{name: req.body.fullname});
    });
  
    con.end();


});
*/

var server=app.listen(port, function(){
    console.log('Node server is running..');
})

  