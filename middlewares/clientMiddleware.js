
function clientMiddleware (req, res, next){
    if(req.session.userLogged.rol == 0){
        res.redirect('/user/profile');
    }
    // console.log(req.session.userLogged.privilege);
    next()
}

module.exports = clientMiddleware;