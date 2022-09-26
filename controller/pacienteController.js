const conexion = require('../database/conexiondb')

const PacienteController = {

    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM hoja2', (error, tuplas) => {
            if (!error) {
                res.render('paciente/pacienteP', { paciente: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM hoja2 WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    obtenerTodos1: async function (req, res) {
        await conexion.query('SELECT * FROM nota', (error, tuplas) => {
            if (!error) {
                res.render('paciente/pacienteP', { paciente: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById1: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM nota WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    /*actualizarPaciente: async function (req, res) {
        const { id, expediente, nombre, fecha, edad, sexo, estado_civil, religion, lugar_origen, ocupacion, domicilio, telefono, padecimiento_madre, fallecido, causa, padecimiento_padre, fallecido2, causa2, alergia_medicamento, alergia_alimentos, alergia_sustancias, cirugias, transfusiones, fracturas, alcoholismo, tabaquismo, drogas, dm, tiempo, has, tiempo2, ir, otras, ta, fc, x1, fr, temp, peso, cabeza, cuello, abdomen, pelvicos, toracicos, menarca, cesareas, ivsa, aborto, gestas, paras, hemoglobina, hematocrito, plaquetas, glucosa, urea, creatinina, rx, usg, medico, quirurgico, diagnostico, elaboro } = req.body
        conexion.query('UPDATE hoja2 SET expediente=?,nombre=?,fecha=?,edad=?,sexo=?,estado_civil=?,religion=?,lugar_origen=?,ocupacion=?,domicilio=?,telefono=?,padecimiento_madre=?,fallecido=?,causa=?,padecimiento_padre=?,fallecido2=?,causa2=?,alergia_medicamento=?,alergia_alimentos=?,alergia_sustancias=?,cirugias=?,transfusiones=?,fracturas=?,alcoholismo=?,tabaquismo=?,drogas=?,dm=?,tiempo=?,has=?,tiempo2=?,ir=?,otras=?,ta=?,fc=?,x1=?,fr=?,temp=?,peso=?,cabeza=?,cuello=?,abdomen=?,pelvicos=?,toracicos=?,menarca=?,cesareas=?,ivsa=?,aborto=?,gestas=?,paras=?,hemoglobina=?,hematocrito=?,plaquetas=?,glucosa=?,urea=?,creatinina=?,rx=?,usg=?,medico=?,quirurgico=?,diagnostico=?,elaboro=? WHERE id=?', [expediente, nombre, fecha, edad, sexo, estado_civil, religion, lugar_origen, ocupacion, domicilio, telefono, padecimiento_madre, fallecido, causa, padecimiento_padre, fallecido2, causa2, alergia_medicamento, alergia_alimentos, alergia_sustancias, cirugias, transfusiones, fracturas, alcoholismo, tabaquismo, drogas, dm, tiempo, has, tiempo2, ir, otras, ta, fc, x1, fr, temp, peso, cabeza, cuello, abdomen, pelvicos, toracicos, menarca, cesareas, ivsa, aborto, gestas, paras, hemoglobina, hematocrito, plaquetas, glucosa, urea, creatinina, rx, usg, medico, quirurgico, diagnostico, elaboro, id], (error) => {
            if (error) {
                res.json({ status: 'error al actualizar' })
            } else {
                res.json({ r: 'ffff' })
            }
        })

    }*/
    insertarNota: async function (req, res) {
        const { nombre, edad, medico, fecha, esp1 } = req.body
        await conexion.query('INSERT INTO nota(nombre,edad,medico,fecha,esp1) values (?,?,?,?,?)', [nombre, edad, medico, fecha, esp1], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/nota')
            }
        })
    },
    eliminarPaciente: async function (req, res) {
        const { id } = req.body
        await conexion.query('DELETE FROM hoja2 WHERE id = ?', [id], (error) => {
            if (error) {
                res.json({ estado: 'No se pudo eliminar' })
            } else {
                res.json({ status: 'fila eliminada' })
            }
        })
    },
    eliminarPaciente2: async function (req, res) {
        const { id } = req.body
        await conexion.query('DELETE FROM nota WHERE id = ?', [id], (error) => {
            if (error) {
                res.json({ estado: 'No se pudo eliminar' })
            } else {
                res.json({ status: 'fila eliminada' })
            }
        })
    },
    edit: async function (req, res) {
        const { id } = req.params;
        conexion.query('SELECT *FROM nota WHERE id=?', [id], (error, nota) => {
            res.render('template', {
                paciente: nota[0]
            });
        })
    },
    actualizar_Nota: async function (req, res) {
        const { id, nombre, edad, medico, fecha, esp1 } = req.body
        conexion.query('UPDATE nota SET nombre=?, edad=?, medico=?, fecha=?, esp1=? WHERE id=?', [nombre, edad, medico, fecha, esp1, id], (error) => {
            if (error) {
                res.json({ status: 'error al actualizar' })
            } else {
                res.json({ r: 'ffff' })
            }
        })

    },

}
PacienteController.update= (req, res)=>{
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn)=>{
      conn.query('UPDATE nota set ? WHERE id = ?',[newCustomer,id],(err,rows)=>{
        res.redirect('template');
      });
    });
}

module.exports = PacienteController