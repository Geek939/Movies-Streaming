const router = require('express').Router()

const genderservices = require('./genders.services')

router.route('/')
    .get(genderservices.getAllgenders)
    .post(genderservices.postGenre)

module.exports = router
