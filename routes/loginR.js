const express = require('express')
const router = express.Router()
const connection = require('../database/conexiondb')
//const LoginController = require('../controller/loginController')
// ES6 Modules or TypeScript
// CommonJS
const Swal = require('sweetalert2')
router.post('/auth', function (req, res) {
	// Capture the input fields
	let username = req.body.username;
	let password = req.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM user1 WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
			// If there is an issue with the query, output the error
			//if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.username = username;
				// Redirect to home page
				res.redirect('/home1');
			} else {
				req.flash('danger', 'Flash is back!')
				res.redirect('/');
			}
			res.end();
		});
	} 
});
// http://localhost:3000/home
router.get('/home1', function (req, res,next) {
	// If the user is loggedin
	if (req.session.loggedin) {
		// Output username
		return next()
	} else {
		// Not logged in
		res.redirect('/')
	}
	res.end();
});

module.exports = router                  
