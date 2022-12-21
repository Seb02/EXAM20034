let Voyageur = require('../models/Voyageur');

exports.infoPers = function(request, response){
    request.session.voyageur = []
    
        let nom = request.body.name 
        let age = request.body.age 
        let voyageur = new Voyageur(nom, age);
        request.session.voyageur = voyageur;
    
    console.log(request.session);
    response.render('validation.ejs', {destination : request.session.destination, nom : voyageur.nom, age : voyageur.age  })
}//<%=i%>