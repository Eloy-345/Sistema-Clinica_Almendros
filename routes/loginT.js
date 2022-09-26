const express = require('express')
const router = express.Router()
const connection = require('../database/conexiondb')

router.get('/',(req, res) => {
    res.render('login/loginT');
});

router.post('/auth2', function (request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM user2 WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/traumatologo');
			} else {
				request.flash('danger', 'Flash is back!')
				response.redirect('/loginT');
			}
			response.end();
		});
	} else {
		response.send('Por favor ingresa Usuario y Contraseña!');
		response.end();
	}
});
// http://localhost:3000/home
router.get('/home1', function (request, response,next) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.redirect('/traumatologo')
	} else {
		// Not logged in
		response.redirect('/hloginT')
	}
	response.end();
});

module.exports = router                  