const protects = {}
const session = require('express-session');

protects.isAuthenticated = (req, res, next) => {
    if(req.session.loggedin ) {
        res.redirect('/home1')
    }
    res.redirect('/')
}

module.exports = protects