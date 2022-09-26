const controller = {};

controller.lists = (req, res)=>{
  req.getConnection((err, conn) =>{
    conn.query('SELECT * FROM nota', (err, customerss)=>{
      if(err){
        res.json(err);
      }
      res.render('/index',{
        data: customerss
      });
    });
  });
};
//::::::::::::::::::::::::::::::::::::::::::::::::::::CLIENTES::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
controller.list = (req, res)=>{
  req.getConnection((err, conn) =>{
    conn.query('SELECT * FROM nota', (err, customers)=>{
      if(err){
        res.json(err);
      }
      res.render('/index',{
        data: customers
      });
    });
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::Actualizar:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
controller.edit = (req,res)=>{
  const { id } = req.params;
  req.getConnection((err,conn)=>{
    conn.query('SELECT *FROM nota WHERE id = ?',[id],(err,nota)=>{
      res.render('template.html',{
        data:nota[0]
      });
    });
  });
}

controller.update = (req,res)=>{
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err,conn)=>{
    conn.query('UPDATE nota set ? WHERE id = ?',[newCustomer,id],(err,rows)=>{
      res.redirect('/index');
    });
  });
};

module.exports = controller;