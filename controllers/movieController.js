const { validationResult } = require("express-validator");
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
        res.render('movieDetail', { movie, genres, actors, user: req.session.userLogged });
        })
        .catch(error => {
            res.send(error)
        })
    },
    create: function (req, res) {
        db.Genre.findAll()
        .then(function(allGenres) {
        res.render('create', {allGenres});
        })
        .catch(error => {
            res.send(error)
        })
    },
    store: function (req, res) {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id,
        })
        .then(() => {
            res.redirect('/movies')
        })
        .catch(error => {
            res.send(error)
        })
    },
    edit: function (req, res) {
        const movie = db.Movie.findByPk(req.params.id)
        const genres = db.Genre.findAll()
        Promise.all([movie, genres])
        .then(([Movie, allGenres]) => {
        res.render('edit', { Movie, allGenres });
        })
        .catch(error => {
            res.send(error)
        })
    },
    update: function (req, res) {
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/movies/detalle/' + req.params.id)
        })
        .catch(error => {
            res.send(error)
        })
    },
    delete: function (req, res) {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/movies')
        })
        .catch(error => {
            res.send(error)
        })
    }
}


module.exports = movieController;
