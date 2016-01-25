var express = require('express');
var app = express();
var PORT = 8081;

var noodle = require('noodlejs');

app.listen(PORT, function(){
    console.log('Listening on port '+ PORT);
});

module.exports = app;

//var website = "http://feeds.feedwrench.com/JavaScriptJabber.rss"

var scrape = function(website, title_selector, des_selector){
    var description = {
        "url": website,
        "selector": des_selector,
        "extract": ["text"]
    }
    var title = {
        "url": website,
        "selector": title_selector,
        "extract": ["text"]
    }
    var episodes = []

    noodle.query(title).then(function (results) {
        for(var i=0; i<results.results[0].results.length; i++){
            episodes.push({title: results.results[0].results[i].text})
        }
    }).then(function(){
        noodle.query(description).then(function (results) {
            for(var i=0; i<results.results[0].results.length; i++){
                episodes[i].description = (results.results[0].results[i].text)
            }
        }).then(function(){
            console.log(episodes)
        });
    });
}

scrape("http://feeds.feedwrench.com/JavaScriptJabber.rss", "title", "description")








