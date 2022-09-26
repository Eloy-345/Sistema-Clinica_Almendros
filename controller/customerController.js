const conn = require('../database/conexiondb')
const controller = {};

//::::::::::::::::::::::::::::::::::::::::::::::::::::PRODUCTOS::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
controller.autos = (req, res)=>{
    req.getConnection((err, conn) =>{
      conn.query('SELECT * FROM autos', (err,productoss )=>{
        if(err){
          res.json(err);
        }
        res.render('tarea1.ejs',{
          data: autos
        });
      });
    });
  };
  //::::::::::::::::::::::::::::::::::::::::::::::::Guardar:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  controller.save = (req, res)=>{
    const data = req.body;
    req.getConnection((err, conn)=>{
      conn.query('INSERT INTO autos set ?',[data],(err, autos)=>{
        console.log(autos);
        res.redirect('/tarea1');
      });
    });
  }
  
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::ACTUALIZAR::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  
  controller.edit = (req,res)=>{
    const { id } = req.params;
    req.getConnection((err,conn)=>{
      conn.query('SELECT *FROM autos WHERE id = ?',[id],(err,autos)=>{
        res.render('tarea1_edit',{
          data:autos[0]
        });
      });
    });
  }
  
  controller.update = (req,res)=>{
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn)=>{
      conn.query('UPDATE autos set? WHERE id = ?',[newCustomer,id],(err,rows)=>{
        res.redirect('/tarea1');
      });
    });
  };
  