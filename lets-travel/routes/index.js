var express = require('express');
var router = express.Router();


//require Controllers 
const hotelController = require('../contollers/hotelController'); 

/* GET home page. */
router.get('/', hotelController.homePage); 

router.get('/all', hotelController.listAllHotels);

router.get('/sign-up', hotelController.signUp, hotelController.logIn); 
router.get('log-in', hotelController.logIn); 

module.exports = router;
