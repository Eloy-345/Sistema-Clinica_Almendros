const conexion = require('../database/conexiondb')

const LoginController = {
    autenticar: async function (req, res) {
        // Capture the input fields
        let username = request.body.username;
        let password = request.body.password;
        // Ensure the input fields exists and are not empty
        if (username && password) {
            // Execute SQL query that'll select the account from the database based on the specified username and password
            conexion.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (results.length > 0) {
                    // Authenticate the user
                    request.session.loggedin = true;
                    request.session.username = username;
                    // Redirect to home page
                    response.redirect('/home');
                } else {
                    //response.send('Usuario y/o Contraseña Incorrecta');
                    response.redirect('/');
                }
                response.end();
            });
        } else {
            response.send('Por favor ingresa Usuario y Contraseña!');
            response.end();
        }
    },
    verificar: async function (req, res) {
        if (request.session.loggedin) {
            // Output username
            response.send('Te has logueado satisfactoriamente:, ' + request.session.username + '!');
        } else {
            // Not logged in
            response.send('¡Inicia sesión para ver esta página!');
        }
        response.end();
    }
}

module.exports = LoginController