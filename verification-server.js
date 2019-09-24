/* 
* LetsEncrypt verification server
* Notes: save the challenge file in the same directory
*/
var path = require('path');
var express = require('express');
var app = express();

var challengeContent = "insert-here" // <-- MAKE SURE YOU SET THE CONTENTS HERE

app.use(express.static(path.join(__dirname, './')));

app.get('*', function(req, res){
        res.header('Content-Type', 'text/html').send(challengeContent);
});

app.listen(80);
console.log('Waiting for LetsEncrypt on port 80');
