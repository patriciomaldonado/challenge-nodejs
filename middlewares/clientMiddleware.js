
function clientMiddleware (req, res, next){
    if(req.session.userLogged.rol == 0){
        res.redirect('/user/profile');
    } else{
        next()
    }
    // console.log(req.session.userLogged.privilege);
}

module.exports = clientMiddleware;