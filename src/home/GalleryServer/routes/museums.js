var router = require('express').Router();
var sequelize = require('../db')
var Museums = sequelize.import('../models/museums.js')


router.get('/', function(req, res) {
	// // console.log(req.)
    // var name = req.body.artwork.name
    // var title = req.body.artwork.title
    // var year = req.body.artwork.year
    // var genre = req.body.artwork.genre
    // var medium = req.body.artwork.medium
    // var url = req.body.artwork.url


	Museums
	.findAll()
	.then(
		function findAllSuccess(data) {
			res.json(data);
		},
		function findAllError(err) {
			res.send(500, err.message);
		}
	);
});
module.exports = router;