const Users = require("./users.models")
const Movies = require('./movies.models')
const Episodes = require("./episodes.models")
const genders = require("./genders.models")
const Moviegenders = require("./movie_genders.models")
const Seasons = require("./seasons.models")
const Seriegenders = require("./serie_genders.models")
const Series = require("./series.models")

const initModels = () => {
    //? Users
    Users

    //? Movies <-> genders - Moviegenders
    Movies.belongsToMany(genders, {through: Moviegenders})
    genders.belongsToMany(Movies, {through: Moviegenders})

    //? Series <-> genders - Seriegenders 
    Series.belongsToMany(genders, {through: Seriegenders})
    genders.belongsToMany(Series, {through: Seriegenders})

    //? Series -> Seasons 
    Series.hasMany(Seasons)
    Seasons.belongsTo(Series)

    //? Seasons -> Episodes 
    Seasons.hasMany(Episodes)
    Episodes.belongsTo(Seasons)
}

module.exports = initModels