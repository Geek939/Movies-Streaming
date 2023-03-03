const genders = require('../models/genders.models')


const findAllgenders = async () => {
    const data = await genders.findAll()
    return data
}


const createGenre = async (name) => {
    const data = await genders.create({name})
    return data
}


module.exports = {
    findAllgenders,
    createGenre
}