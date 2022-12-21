let express = require('express');
let router = express.Router();

var confirmationController = require('./controllers/confirmationController');
var homeController = require('./controllers/homeController');
var personController = require('./controllers/personController');
var validationController = require('./controllers/validationController');

router.get('/', homeController.showHome);
router.post('/HomeConfirmation', homeController.infosVol);
router.post('/persons', personController.infoPers);
router.get('/confirmation', confirmationController.showConfirm);
router.get('/annuler', homeController.annulation);





module.exports = router;