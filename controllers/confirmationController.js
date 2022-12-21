var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'reservation',
})

connection.connect(function(error) {if (error) console.log(error);});

exports.showConfirm = function(request, response) {
    connection.query("INSERT INTO reservationsecam(destination, nbrvoy) VALUES(?, ?)  ", [request.session.destination, request.session.places],   function(error, result){ 
        if (error) console.log(error);
    });
    connection.query("I")
    
    response.render("INSERT INTO (noms, age) VALUES(?, ?)  ", [request.session.Voyageur.nom, request.session.Voyageur.age],   function(error, result){ 
        if (error) console.log(error);
    });
    };