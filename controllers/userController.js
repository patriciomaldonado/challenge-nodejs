const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const Op = db.Sequelize.Op;

const controller = {
    login: function (req, res) {
        res.render("login");
    },
    loginProcess: async function (req, res) {
        let userToLogin = await db.User.findOne({
          where: {
            email: req.body.email,
          },
        });
    
        // console.log(req.body.password);
        // console.log(userToLogin.privilege);
        // console.log(userToLogin.password);
        // console.log(bcryptjs.hashSync(req.body.password, 10));
    
        if (userToLogin) {
          let passwordOk = bcryptjs.compareSync(
            req.body.password,
            userToLogin.password
          );
    
          if (passwordOk) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            // console.log(req.session.userLogged.privilege);
    
            if (req.body.rememberUser) {
              res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 2 });
            }
    
            return res.redirect("/user/profile");
          }
          res.render("login", {
            errors: {
              email: {
                msg: "Las credenciales son inválidas",
              },
            },
          });
        }
    
        res.render("login", {
          errors: {
            email: {
              msg: "Este correo no existe, si no tenés cuenta, registrate",
            },
          },
        });
      },
    register: function (req, res) {
        res.render("register");
    },
    registerProcess: async function (req, res) {
        const resultValidation = validationResult(req);
    console.log(resultValidation)

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      rol: 0,
      privilege: "usuario"
    };
    let userInDb = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userInDb) {
      return res.render("register", {
        errors: {
          email: {
            msg: "Este correo ya existe, si ya tenés una cuenta iniciá sesión",
          },
        },
        oldData: req.body,
      });
    }

    await db.User.create(newUser);

   // console.log(newUser); //Vericación de Usuario Creado
    res.redirect("/user/login");
    },
    profile: function (req, res) {
        res.render("profile", {
            user: req.session.userLogged
        });
    },
    logout: function (req, res) {
        res.clearCookie("userEmail");
        req.session.destroy();
        res.redirect("/");
    }
}

module.exports = controller;