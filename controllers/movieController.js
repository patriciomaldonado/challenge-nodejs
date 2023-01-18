
const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const Op = db.Sequelize.Op;

const movieController = {
    // options: function (req, res) {
    //     res.render('product-options');
    // },
    list: async function (req, res) {
        const products = await db.Movie.findAll({include: ['actors']})
        res.render('index', { movies });
    }
    // detail: async function (req, res) {
    //     const productoEncontrado = await db.Products.findByPk(req.params.id)
    //     res.render('product-detail', { products: productoEncontrado });
    // },
    // crear: function (req, res) {
    //     res.render('create');
    // },
    // store: function (req, res) {
    //     db.Products.create({
    //         name: req.body.name,
    //         price: req.body.price,
    //         category_id: req.body.category_id,
    //         description: req.body.description,
    //         filename: req.file.filename,
    //     })
    //         .then(() => {
    //             res.redirect('/productos/listar')
    //         })
    // },
    // edit: async function (req, res) {
    //     const producto = await db.Products.findByPk(req.params.id)
    //     res.render('edit', { producto: producto });
    // },
    // update: function (req, res) {
    //     db.Products.update({
    //         name: req.body.name,
    //         price: req.body.price,
    //         category_id: req.body.category_id,
    //         description: req.body.description,
    //         filename: req.file.filename,
    //     }, {
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //     res.redirect("/productos/listar");
    // },

    // destroy: function (req, res) {
    //     db.Products.destroy({
    //         where: { id: req.params.id }
    //     })
    //     res.redirect("/productos/listar");
    // },
    // asc: async function (req, res) {
    //     const products = await db.Products.findAll({ order: [["price", "Asc"]] });
    //     res.render("menu-products", { products: products });
    // },
    // dsc: async function (req, res) {
    //     const products = await db.Products.findAll({ order: [['price', 'DESC']] });
    //     res.render("menu-products", { products: products });
    // },
    // videojuegos: async function(req, res) {
    //     const products = await db.Products.findAll({
    //         where: {category_id: 1}
    //     })
    //     res.render("menu-products", { products: products });
    // },
    // airelibre: async function(req, res) {
    //     const products = await db.Products.findAll({
    //         where: {category_id: 2}
    //     })
    //     res.render("menu-products", { products: products });
    // },
    // demesa: async function(req, res) {
    //     const products = await db.Products.findAll({
    //         where: {category_id: 3}
    //     })
    //     res.render("menu-products", { products: products });
    // },
    // juguetes: async function(req, res) {
    //     const products = await db.Products.findAll({
    //         where: {category_id: 4}
    //     })
    //     res.render("menu-products", { products: products });
    // },
    // menos2000: async function(req, res) {
    //     const products = await db.Products.findAll({
    //         where: {price: {[Op.lte]: '2000'}}
    //     })
    //     res.render("menu-products", { products: products });
    // },
    // menos4000: async function(req, res) {
    //     const products = await db.Products.findAll({
    //         where: {price: {[Op.lte]: '4000'}}
    //     })
    //     res.render("menu-products", { products: products });
    // },
    // menos6000: async function(req, res) {
    //     const products = await db.Products.findAll({
    //         where: {price: {[Op.lte]: '6000'}}
    //     })
    //     res.render("menu-products", { products: products });
    // },
    // buscador: async function(req, res) {
    //     console.log(req.query.toys);
    //     const products = await db.Products.findAll({
    //         where: {name: { [Op.like]: `%${req.query.toys}%` }}
    //     })
    //     res.render("menu-products", { products: products });
    // },
}


module.exports = movieController;
