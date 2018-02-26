module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('artwork', {
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        year: DataTypes.STRING,
        genre: DataTypes.STRING,
        medium: DataTypes.STRING,
        url: DataTypes.STRING

    }, {
        timestamps: false

    })


}