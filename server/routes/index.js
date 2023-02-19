
var express = require('express');
var router = express.Router();
production=false;

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);
/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about me page. */
router.get('/about', indexController.displayAboutPage);

/* GET project page. */
router.get('/',indexController.displayProductsPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

router.get('/Contacts', indexController.displaycontactlistPage);


/* GET services page. */
router.get('/Services', indexController.displayServicesPage);

/* GET Router for displaying the login page*/
router.get('/login', indexController.displayLoginPage);

/* POST Router for processing the Login Page*/
router.post('/login', indexController.processLoginPage);

/* GET Router for displaying register Page*/
router.get('/register', indexController.displayRegisterPage);

/* POST Router for processing the register Page*/
router.post('/register', indexController.processRegisterPage);

/* GET Router for processing the Login Page*/
router.get('/logout', indexController.performLogout);

module.exports = router;
