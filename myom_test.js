var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
var myom = require('./myom');
myom.saveWebPage(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
