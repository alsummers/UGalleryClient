var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')

router.post('/', function(req, res){
    console.log(res)
    var username = req.body.user.username;
    var pass = req.body.user.password;
    var email = req.body.user.email;
    
    User.create({
    username: username,
    passwordhash: bcrypt.hashSync(pass,10),
    email: email
})
    .then(
        function createSuccess (user){
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
            res.json({
                user: user,
                message: 'create',
                sessionToken: token,
            })
        },
        function createError(err) {
            res.send(500, err.message);

        }
    );
})

module.exports = router;
