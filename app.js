var express = require('express');
var app = express();

app.use(express.static("public"));

var request = require('request');


app.get("/", function (req, res){
   
   res.render("search.ejs"); 
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results.ejs", {data: data});
        }
    });
});


app.listen(3000, function() { 
    console.log('Movie App has Started!!'); 
  });