var express = require('express');
var app = express();
var PORT = 8080;

var noodle = require('noodlejs');

app.listen(PORT, function(){
    console.log('Listening on port '+ PORT);
});

module.exports = app;

var website = "http://feeds.serialpodcast.org/serialpodcast"

var description = {
    "url": website,
    "selector": "description",
    "extract": ["text"]
}

var title = {
    "url": website,
    "selector": "title",
    "extract": ["text"]
}

var podcasts = []

noodle.query(title).then(function (results) {
    for(var i=0; i<results.results[0].results.length; i++){
        podcasts.push({title: results.results[0].results[i].text})
    }
}).then(function(){
    noodle.query(description).then(function (results) {
        for(var i=0; i<results.results[0].results.length; i++){
            podcasts[i].description = (results.results[0].results[i].text)

        }
    }).then(function(){
        console.log(podcasts)
    });
});

//noodle.query(queries2).then(function (results) {
//    for(var i=0; i<results.results[0].results.length; i++){
//        podcasts[i].title = (results.results[0].results[i].text)
//
//    }
//});

