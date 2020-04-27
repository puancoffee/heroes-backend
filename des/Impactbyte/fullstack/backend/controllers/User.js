const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = 'akusukakeju'

module.exports = {
    create: function (req, res, next) {
        User
            .create({email: req.body.email, password: req.body.password})
            .then(response => res.json(response))
            .catch(err => {
                throw(err)
            })
    },
    authenticated: function (req, res, next) {
        User
            .findOne({email: req.body.email})
            .then((response, err) => {
                console.log(response);
                
                if (err) 
                    next(err)
                else {
                    if (response != null && bcrypt.compareSync(req.body.password, response.password)) {
                         jwt.sign({
                            id: response._id
                        },  privateKey, { expiresIn: 60 * 60 }, (err, token)=>{
                            res.json(token)
                        })
                    }
                    else{
                        res.json({status: err})
                    }
                }
            })
            .catch(err => {
                throw(err)
            })
    }
}