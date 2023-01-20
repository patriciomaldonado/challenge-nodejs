function clientMiddleware (req, res, next){
    if(req.session.userLogged.privilege == "administrador"){
        res.redirect('/');
    }
    // console.log(req.session.userLogged.privilege);
    next()
}

module.exports = clientMiddleware;