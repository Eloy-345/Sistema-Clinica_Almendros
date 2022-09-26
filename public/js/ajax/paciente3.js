$(function () {
    /*Post*/ 
    const URL = '/paciente1'
    $('#insertar').on('click',function(){
        let expediente = $('#expediente').val();
        let nombre = $('#nombre').val();
        let fecha = $('#fecha').val();
        let edad = $('#edad').val();
        let sexo = $('#sexo').val();
        let estado_civil = $('#estado_civil').val();
        let religion = $('#religion').val();
        let lugar_origen = $('#lugar_origen').val();
        let ocupacion = $('#ocupacion').val();
        let domicilio = $('#domicilio').val();
        let telefono = $('#telefono').val();
        let padecimiento_madre = $('#padecimiento_madre').val();
        let fallecido = $('#fallecido').val();
        let causa = $('#causa').val();
        let padecimiento_padre = $('#padecimiento_padre').val();
        let fallecido2 = $('#fallecido2').val();
        let causa2 = $('#causa2').val();
        let alergia_medicamento = $('#alergia_medicamento').val();
        let alergia_alimentos = $('#alergia_alimentos').val();
        let alergia_sustancias = $('#alergia_sustancias').val();
        let cirugias = $('#cirugias').val();
        let transfusiones = $('#transfusiones').val();
        let fracturas = $('#fracturas').val();
        let alcoholismo = $('#alcoholismo').val();
        let tabaquismo = $('#tabaquismo').val();
        let drogas = $('#drogas').val();//
        let dm = $('#dm').val();
        let tiempo = $('#tiempo').val();
        let has = $('#has').val();
        let tiempo2 = $('#tiempo2').val();
        let ir = $('#ir').val();
        let otras = $('#otras').val();
        let ta = $('#ta').val();
        let fc = $('#fc').val();
        let x1 = $('#x1').val();
        let fr = $('#fr').val();
        let temp = $('#temp').val();
        let peso = $('#peso').val();
        let cabeza = $('#cabeza').val();
        let cuello = $('#cuello').val();
        let abdomen = $('#abdomen').val();
        let pelvicos = $('#pelvicos').val();
        let toracicos = $('#toracicos').val();
        let menarca = $('#menarca').val();
        let cesareas = $('#cesareas').val();
        let ivsa = $('#ivsa').val();
        let aborto = $('#aborto').val();
        let gestas = $('#gestas').val();
        let paras = $('#paras').val();
        let hemoglobina = $('#hemoglobina').val();
        let hematocrito = $('#hematocrito').val();
        let plaquetas = $('#plaquetas').val();
        let glucosa = $('#glucosa').val();
        let urea = $('#urea').val();
        let creatinina = $('#creatinina').val();
        let rx = $('#rx').val();
        let usg = $('#usg').val();
        let medico = $('#medico').val();
        let quirurgico = $('#quirurgico').val();
        let cirugiaP = $('#cirugiaP').val();
        let cirugiaR = $('#cirugiaR').val();
        let hallazgos = $('#hallazgos').val();
        let complicaciones = $('#complicaciones').val();
        let cirujano = $('#cirujano').val();
        let ayudante = $('#ayudante').val();
        let instrumentista = $('#instrumentista').val();
        let anestesiologo = $('#anestesiologo').val();
        let circulante = $('#circulante').val();
        let esp1 = $('#esp1').val();
        let esp2 = $('#esp2').val();
        let diagnostico = $('#esp1').val();
        let elaboro = $('#esp2').val();
        $.ajax({
            url: URL,
            method: 'POST',
            data: {expediente,nombre,fecha,edad,sexo,estado_civil,religion,lugar_origen,ocupacion,domicilio,telefono,padecimiento_madre,fallecido,causa,padecimiento_padre,fallecido2,causa2,alergia_medicamento,alergia_alimentos,alergia_sustancias,cirugias,transfusiones,fracturas,alcoholismo,tabaquismo,drogas,dm,tiempo,has,tiempo2,ir,otras,ta,fc,x1,fr,temp,peso,cabeza,cuello,abdomen,pelvicos,toracicos,menarca,cesareas,ivsa,aborto,gestas,paras,hemoglobina,hematocrito,plaquetas,glucosa,urea,creatinina,rx,usg,medico,quirurgico,cirugiaP,cirugiaR,hallazgos, complicaciones,cirujano,ayudante,instrumentista,anestesiologo,circulante, esp1,esp2,diagnostico,elaboro}
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/pacienteO'
        })

    })
    //hemoglobina,hematocrito,plaquetas,urea,creatinina,rx,medico,quirurgico,cirugiaP,cirugiaR,hallazgos, complicaciones,cirujano,ayudante,instrumentista,anestesiologo,circulante, esp1,esp2
    

    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var ide= fila.find('#ide').val();
        var nombre = fila.find('#nombre').val();
        var email = fila.find('#email').val();
        var telefono = fila.find('#telefono').val();
        var edad = fila.find('#edad').val();
        var sexo = fila.find('#sexo').val();
        var escolaridad = fila.find('#escolaridad').val();
        var estado = fila.find('#estado').val();
        var dominancia = fila.find('#dominancia').val();
        var ocupacion = fila.find('#ocupacion').val();
        var residencia = fila.find('#residencia').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, ide,nombre,email,telefono,edad,sexo,escolaridad,estado,dominancia,ocupacion,residencia }

        }).done(function (respuesta) {
            window.location.href='/paciente1'
            console.log('Dato actualizado')
        })
    })

    $('table').on('click', '#delete', function () {
        var fila = $(this).closest('tr');
        var id = fila.find('#clave').val();
        $.ajax({
            url: URL,
            method: 'delete',
            data: {id},
        }).done(function(id){
            
            Swal.fire({
                title: 'Confirmar',
                text: "¿Realmente desea borrar?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Eliminado!',
                    'Exitosamente',
                    window.location.href='/paciente1'
                  )
                }
                
              })
        })

    })

    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/paciente1/'+'/'+id,
            method: 'GET'
            
        }).done(function(agenda){
            let detalle = $('#verdetalle')
            detalle.html('')
            detalle.append(`
                <table class="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>IDE</td>
                            <td>Nombre</td>
                            <td>Email</td>
                            <td>Telefono</td>
                            <td>Edad</td>
                            <td>Sexo</td>
                            <td>Escolaridad</td>
                            <td>Estado civil</td>
                            <td>Dominancia</td>
                            <td>Ocupacion</td>
                            <td>Residencia</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${agenda.id}</td>
                            <td>${agenda.ide}</td>
                            <td>${agenda.nombre}</td>
                            <td>${agenda.email}</td>
                            <td>${agenda.telefono}</td>
                            <td>${agenda.edad}</td>
                            <td>${agenda.sexo}</td>
                            <td>${agenda.escolaridad}</td>
                            <td>${agenda.estado}</td>
                            <td>${agenda.dominancia}</td>
                            <td>${agenda.ocupacion}</td>
                            <td>${agenda.residencia}</td>
                        </tr>
                    </tbody>
                </table>
            `)
        })

    })
})


    
