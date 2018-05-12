const request = require('request');
const cheerio = require('cheerio');

var url = "https://www.npmjs.com/";
request.get(url, function(error, response, html){
    if (error) {
        console.error(error.message);
        return;
    }
    var $ = cheerio.load(html);
    var results = $("#features-collaboration-pane h3 a");
    var final = results.map(function(){
        return $(this).text();
    }).toArray();
    console.log("The list of packages people 'npm installed' a lot:");
    final.forEach(function(item) {
        console.log(item);
    });
});