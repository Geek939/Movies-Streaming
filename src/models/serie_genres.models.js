const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const genders = require("./genders.models");
const Series = require("./series.models");

const Seriesgenders = db.define('series_genders', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    seriesId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Series,
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

module.exports = Seriesgenders