
const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const Op = db.Sequelize.Op;

const movieController = {
    index: async function (req, res) {
        const products = await db.Movie.findAll()
        .then(function(movies){
            res.render('index', { movies });
        })
    },
    detail: async function (req, res) {
        const movie = db.Movie.findByPk(req.params.id)
        const genres = db.Genre.findByPk(req.params.id)
        const actors = db.Actor.findByPk(req.params.id)
        Promise.all([movie, genres, actors])
        .then(([movie, genres, actors]) => {
        res.render('movieDetail', { movie, genres, actors });
        })
        .catch(error => {
            res.send(error)
        })
    },
    create: function (req, res) {
        res.render('create');
    },
    store: function (req, res) {
        db.Movie.create({
            name: req.body.name,
            price: req.body.price,
            category_id: req.body.category_id,
            description: req.body.description,
            filename: req.file.filename,
        })
            .then(() => {
                res.redirect('/')
            })
    }
}


module.exports = movieController;
