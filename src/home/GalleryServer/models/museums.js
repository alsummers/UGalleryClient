module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('museum', {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        url: DataTypes.STRING

    }, {
        timestamps: false

    })


}