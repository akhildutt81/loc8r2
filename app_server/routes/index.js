var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/addlocation',ctrlLocations.addLocationForm);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.get('/location/:locationid/delete', ctrlLocations.deletelocation);
router.get('/location/:locationid/review/new', ctrlLocations.addReview);
router.post('/location/:locationid/review/new', ctrlLocations.doAddReview);
router.post('/location/addlocation',ctrlLocations.addLocation);
/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;