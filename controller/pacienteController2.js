const conexion = require('../database/conexiondb')

const PacienteController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM hoja2', (error, tuplas) => {
            if (!error) {
                res.render('paciente/pacienteVista', { paciente: tuplas })
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
    insertarPaciente: async function (req, res) {
        //expediente,nombre,fecha,edad,sexo,estado_civil,religion,lugar_origen,ocupacion,domicilio,telefono,padecimiento_madre,fallecido,causa,padecimiento_padre,fallecido2,causa2,alergia_medicamento,alergia_alimentos,alergia_sustancias,cirugias,transfusiones,fracturas,alcoholismo,tabaquismo,drogas      //en drogas empieza
        //,ta,fc,x1,fr,temp,peso,cabeza,cuello,abdomen,pelvicos,toracicos,antecedentes,menarca,cesareas,ivsa,aborto,gestas,paras
        const { expediente,nombre,fecha,edad,sexo,estado_civil,religion,lugar_origen,ocupacion,domicilio,telefono,padecimiento_madre,fallecido,causa,padecimiento_padre,fallecido2,causa2,alergia_medicamento,alergia_alimentos,alergia_sustancias,cirugias,transfusiones,fracturas,alcoholismo,tabaquismo,drogas,dm,tiempo,has,tiempo2,ir,otras,ta,fc,x1,fr,temp,peso,cabeza,cuello,abdomen,pelvicos,toracicos,menarca,cesareas,ivsa,aborto,gestas,paras,hemoglobina,hematocrito,plaquetas,glucosa,urea,creatinina,rx,usg,medico,quirurgico,diagnostico,elaboro} = req.body
        await conexion.query('INSERT INTO hoja2(expediente,nombre,fecha,edad,sexo,estado_civil,religion,lugar_origen,ocupacion,domicilio,telefono,padecimiento_madre,fallecido,causa,padecimiento_padre,fallecido2,causa2,alergia_medicamento,alergia_alimentos,alergia_sustancias,cirugias,transfusiones,fracturas,alcoholismo,tabaquismo,drogas,dm,tiempo,has,tiempo2,ir,otras,ta,fc,x1,fr,temp,peso,cabeza,cuello,abdomen,pelvicos,toracicos,menarca,cesareas,ivsa,aborto,gestas,paras,hemoglobina,hematocrito,plaquetas,glucosa,urea,creatinina,rx,usg,medico,quirurgico,diagnostico,elaboro) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [expediente,nombre,fecha,edad,sexo,estado_civil,religion,lugar_origen,ocupacion,domicilio,telefono,padecimiento_madre,fallecido,causa,padecimiento_padre,fallecido2,causa2,alergia_medicamento,alergia_alimentos,alergia_sustancias,cirugias,transfusiones,fracturas,alcoholismo,tabaquismo,drogas,dm,tiempo,has,tiempo2,ir,otras,ta,fc,x1,fr,temp,peso,cabeza,cuello,abdomen,pelvicos,toracicos,menarca,cesareas,ivsa,aborto,gestas,paras,hemoglobina,hematocrito,plaquetas,glucosa,urea,creatinina,rx,usg,medico,quirurgico,diagnostico,elaboro], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/paciente')
            }
        })
    },
    actualizarPaciente: async function (req, res) {
        const { id,expediente,nombre,fecha,edad,sexo,estado_civil,religion,lugar_origen,ocupacion,domicilio,telefono,padecimiento_madre,fallecido,causa,padecimiento_padre,fallecido2,causa2,alergia_medicamento,alergia_alimentos,alergia_sustancias,cirugias,transfusiones,fracturas,alcoholismo,tabaquismo,drogas,dm,tiempo,has,tiempo2,ir,otras,ta,fc,x1,fr,temp,peso,cabeza,cuello,abdomen,pelvicos,toracicos,menarca,cesareas,ivsa,aborto,gestas,paras,hemoglobina,hematocrito,plaquetas,glucosa,urea,creatinina,rx,usg,medico,quirurgico,diagnostico,elaboro} = req.body
        conexion.query('UPDATE hoja2 SET expediente=?,nombre=?,fecha=?,edad=?,sexo=?,estado_civil=?,religion=?,lugar_origen=?,ocupacion=?,domicilio=?,telefono=?,padecimiento_madre=?,fallecido=?,causa=?,padecimiento_padre=?,fallecido2=?,causa2=?,alergia_medicamento=?,alergia_alimentos=?,alergia_sustancias=?,cirugias=?,transfusiones=?,fracturas=?,alcoholismo=?,tabaquismo=?,drogas=?,dm=?,tiempo=?,has=?,tiempo2=?,ir=?,otras=?,ta=?,fc=?,x1=?,fr=?,temp=?,peso=?,cabeza=?,cuello=?,abdomen=?,pelvicos=?,toracicos=?,menarca=?,cesareas=?,ivsa=?,aborto=?,gestas=?,paras=?,hemoglobina=?,hematocrito=?,plaquetas=?,glucosa=?,urea=?,creatinina=?,rx=?,usg=?,medico=?,quirurgico=?,diagnostico=?,elaboro=? WHERE id=?', [expediente,nombre,fecha,edad,sexo,estado_civil,religion,lugar_origen,ocupacion,domicilio,telefono,padecimiento_madre,fallecido,causa,padecimiento_padre,fallecido2,causa2,alergia_medicamento,alergia_alimentos,alergia_sustancias,cirugias,transfusiones,fracturas,alcoholismo,tabaquismo,drogas,dm,tiempo,has,tiempo2,ir,otras,ta,fc,x1,fr,temp,peso,cabeza,cuello,abdomen,pelvicos,toracicos,menarca,cesareas,ivsa,aborto,gestas,paras,hemoglobina,hematocrito,plaquetas,glucosa,urea,creatinina,rx,usg,medico,quirurgico,diagnostico,elaboro, id], (error) => {
            if (error) {
                res.json({ status: 'error al actualizar' })
            } else {
                res.json({ r: 'ffff' })
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
    }
}

module.exports = PacienteController