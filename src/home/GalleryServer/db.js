var Sequelize = require('sequelize');
var sequelize = new Sequelize('gallery', 'postgres', 'SeaBass44', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()
    .then(
        //success
        function () {
            console.log('connected to gallery')
        },
        function () {
            console.log(err)
        }
    )
var User = sequelize.import('./models/user');
var Artwork = sequelize.import('./models/artwork');
var Museums = sequelize.import('./models/museums')
module.exports = sequelize;