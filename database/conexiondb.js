const mysql = require('mysql')

var Connection = mysql.createConnection({
    host: process.env.HOST,
    user: 'root',
    password: process.env.PASSWORD,
    database: 'Base'
})

Connection.connect((error)=>{
    if(error){
        console.log("Error")
    }else{
        console.log("Base de datos Conectado");
    }
})
module.exports = Connection