const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const genders = db.define('genders', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = genders