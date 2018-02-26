var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var UserArtwork = sequelize.import('../models/userArtwork.js')
var Artwork = sequelize.import('../models/artwork.js')

router.post('/', function(req, res){
    console.log(res)
    var user = req.user
    var artworkID = req.body.id
    
    Artwork.findOne({where: {id: artworkID}}).then(
        function (artwork) {

     
    UserArtwork.create({
    owner: user.id,
    name: artwork.name,
    title: artwork.title,
    year: artwork.year,
    genre: artwork.genre,
    medium: artwork.medium,
    url: artwork.url
})
    .then(
        function createSuccess (userArtwork){
            res.json(userArtwork);
        },
        function createError(err) {
            res.send(500, err.message);

        }
    );
})
}
)
router.get('/', function(req,res){
    var userid = req.user.id
    UserArtwork
    .findAll({
        where: { owner: userid }
    })
    .then(
        function findAllSuccess(data) {
            res.json(data)
        },
        function findAllError(err) {
            res.send(500, err.message)
        }
    )
})
router.delete('/', function(req, res){
    
    var data = req.body.artworks.id
console.log(req.body)
    UserArtwork
    .destroy({
        where: {id: data}
    }).then(
        function deleteLogSuccess(data){
            res.send("you removed artwork")
        },
        function deleteLogError(err){
            res.send(500, err.message)
        }
    )
})
router.put('/', function(req, res){
    var data = req.body.UserArtwork.id
    UserArtwork
    .update(
        {
            data: data
        },
        {Where: {id: data}}
    ).then(
        function updateSuccess(updateArtwork) {
            res.json(updateArtwork)
        },
        function updateError(err){
            res.send(500, err.message)
        }
    )
})

module.exports = router;