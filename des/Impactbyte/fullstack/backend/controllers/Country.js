const Country = require('../models/Country')

module.exports = ({
    create: (req, res)=> {
        Country.create({
            name: req.body.name
        }).then(response => {
            res.json(response)
        }).catch(err => res.json(err))
    },
    getData: (req, res)=> {
        Country.find({}).then(response => {
            res.json(response)
        }).catch(err => res.json(err))
    },
})