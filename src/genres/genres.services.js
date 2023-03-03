const genreControllers = require('./genders.controllers.js')
const responses = require('../utils/handleResponses')

const getAllgenders = (req, res) => {
    genreControllers.findAllgenders()
        .then(data => {
            responses.success({
                res,
                status:200,
                message: 'Getting all genders :)',
                data
            })
        })
        .catch(err => {
            responses.error({
                res,
                data:err,
                status:400,
                message: err.message,
            })
        })
}

const postGenre = (req, res) => {
    const {name} = req.body
    genreControllers.createGenre(name)
        .then(data => {
            responses.success({
                res,
                status:201,
                message: 'Genre created successfully :D',
                data
            })
        })
        .catch(err => {
            responses.error({
                res,
                data:err,
                status:400,
                message: err.message,
                fields: {
                    name: 'string'
                }
            })
        })
}

module.exports = {
    getAllgenders,
    postGenre
}
