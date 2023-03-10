const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const Op = db.Sequelize.Op;

const controller = {
    home: async function (req, res) {
        const products = await db.Movie.findAll()
        .then(function(movies){
            res.render('index', { movies });
        })
    }
}

module.exports = controller;