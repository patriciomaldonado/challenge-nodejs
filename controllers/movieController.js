
const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const Op = db.Sequelize.Op;

const movieController = {
    'detail': async function (req, res) {
        db.Movie.findByPk(req.params.id)
        .then(movie => {
        res.render('movieDetail', { movie });
        })
        .catch(error => {
            res.send(error)
        })
    }
}


module.exports = movieController;
