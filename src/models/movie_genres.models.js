const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const genders = require("./genders.models");
const Movies = require("./movies.models");


const Moviegenders = db.define('movie_genders', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    movieId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Movies,
            key: 'id'
        }
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: genders,
            key: 'id'
        }
    }
})

module.exports = Moviegenders