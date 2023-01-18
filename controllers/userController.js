const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const Op = db.Sequelize.Op;

const controller = {
    login: function (req, res) {
        res.render("login");
    },
    register: function (req, res) {
        res.render("register");
    }
}

module.exports = controller;