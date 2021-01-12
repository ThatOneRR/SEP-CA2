var app = require('./controller/app.js');

var server = app.listen(8081, function () {
    var port = server.address().port;
    console.log('Web App Hosted at http://localhost:%s/B/selectCountry.html', port);
});

/*
Customer:
URL:  http://localhost:8081/B/selectCountry.html
email: junwei10255@gmail.com
pwd: junwei123

Staff of IslandFurniture:
URL:  http://localhost:8081/A1/staffLogin.html
email: admin@if.com
pwd: admin123
*/