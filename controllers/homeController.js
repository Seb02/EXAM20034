let Reservation = require('../models/Reservation');


exports.showHome = function(request, response) {
    //let formation = new Formation("Nomformation, Prix, Debut, Fin, Inscrits")
    
    response.render('home.ejs')
    };

exports.infosVol = function(request, response) {
    request.session.destination = request.body.destination;
    request.session.places = request.body.nbseat;
    request.session.assurance = request.body.assurance;
    let reservation = new Reservation(request.body.destination, request.body.nbseat, request.body.assurance);
    request.session.reservation = reservation;
    console.log(request.session);
    response.render("person.ejs", {nbrPers : request.body.nbseat});
}

exports.annulation = function(request, response) {
    request.session.places = "";
    request.session.destination = "";
    request.session.reservation = "";
    response.render('home.ejs');
    console.log(request.session);
}