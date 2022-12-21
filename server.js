let session = require('express-session');
let express = require('express');
let routes = require('./mesroutes');

let application = express();

application.use(express.urlencoded({extended : true})); //permet de décoder le body



application.use(session({
    secret: 'my secret', 
    resave : false, 
    saveUninitialized : true
}));



application.use('/', routes);





application.use(express.static('public'))




application.listen(80, function(){
    console.log('Server is running on port 80')
});


