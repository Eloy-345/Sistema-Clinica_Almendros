const express = require('express')
const morgan = require ('morgan')
const path = require('path')
const app = express()
const session = require('express-session');
const flash = require('connect-flash');
const login = require('./routes/loginR')
var bodyparser = require("body-parser");
const protect = require('./confs/auth');
const server = http.createServer(app);
//configuracionones
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'vistas'))

//app.use(express.urlencoded({extend: true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({limit: '10mb',extended: false}));

const server = http.createServer(app);
//require('dotenv').config()
app.use(express.static(path.join(__dirname,'public')))
//rutas
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(flash());
//Global variables

app.use((req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.danger = req.flash('danger')
    app.locals.user = req.user || null
    next()
})

app.get('/', (req, res) => {
    res.render('principal')
})
app.use('/',login);
app.use('/loginR',require('./routes/login2'));
app.use('/loginO',require('./routes/loginO'));
app.use('/loginT',require('./routes/loginT'));
app.use('/loginR2',require('./routes/loginR2'));
app.use('/loginT2',require('./routes/loginT2'));
app.use('/loginO2',require('./routes/loginO2'));
app.use('/home1',require('./routes/homeR'))
app.use('/home2',require('./routes/homeR'))
app.use('/agenda',require('./routes/agendaR'))
app.use('/agendaT',require('./routes/agendaT'))
app.use('/agendaO',require('./routes/agendaO'))
app.use('/agendas',require('./routes/agendaRM'))
app.use('/paciente',require('./routes/pacienteR'))
app.use('/pacientes', require('./routes/pacienteR2'))
app.use('/ajustes',require('./routes/ajustesR'))
app.use('/ajustes2',require('./routes/ajustesR2'))
app.use('/ajustes3',require('./routes/ajustesR3'))
app.use('/nota',require('./routes/notaR'))
app.use('/notaO',require('./routes/notaO'))
app.use('/notaT',require('./routes/notaT'))
app.use('/carta',require('./routes/cartaR'))
app.use('/cartaO',require('./routes/cartaO'))
app.use('/oftamologo',require('./routes/ofta/menu-ofta'))
app.use('/reumatologo',require('./routes/reuma/menu-reuma'))
app.use('/traumatologo',require('./routes/trauma/menu-trauma'))
//app.use('/fisio',require('./routes/fisio/menu-fisio'))
app.use('/medicos',require('./routes/ofta/medicos'))
app.use('/medico',require('./routes/ofta/medicos1'))
app.use('/medico2',require('./routes/ofta/medicos2'))
app.use('/calenda',require('./routes/ofta/calendario'))
app.use('/PDF',require('./routes/pdf'))
app.use('/pacienteO',require('./routes/pacienteO'))
app.use('/pacienteT',require('./routes/pacienteT'))
app.use('/paciente1',require('./routes/paciente2'))
app.use('/paciente2',require('./routes/paciente3'))
app.use('/tarea1',require('./routes/tarea1'))
app.use('/tarea2',require('./routes/tarea2'))
app.use('/tarea3',require('./routes/tarea3'))
app.use('/reporte1',require('./routes/reporte1'))
app.use('/reporte2',require('./routes/reporte2'))
app.use('/reporte3',require('./routes/reporte3'))
app.use('/expediente',require('./routes/expediente'));
app.use('/expedienteO',require('./routes/expedienteO'));
app.use('/expedienteT',require('./routes/product'));
app.use('/pdfE',require('./routes/product'));
app.use('/pdfnotaR',require('./routes/notaRpdf'));
app.use('/pdfnotaO',require('./routes/notaOpdf'));
app.use('/pdfnotaT',require('./routes/notaTpdf'));
app.use('/cartaOpdf',require('./routes/cartaOpdf'));
app.use('/cartapdf',require('./routes/cartapdf'));
app.use('/pacienteTerapia',require('./routes/pacienteTerapia'))
app.use('/docs', express.static(path.join(__dirname, 'docs')));

//configuración del servidor htpp://localhost:3000/
const port = process.env.PORT || 3000

server.listen(port);
//////////////////****************************************** */
