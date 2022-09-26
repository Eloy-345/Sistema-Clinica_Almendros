$(function () {
    /*Post*/
    const URL = '/paciente'
    $('#insertar').on('click', function () {
        let ide = $('#ide').val();
        let nombre = $('#nombre').val();
        let email = $('#email').val();
        let telefono = $('#telefono').val();
        let edad = $('#edad').val();
        let sexo = $('#sexo').val();
        let escolaridad = $('#escolaridad').val();
        let estado = $('#estado').val();
        let dominancia = $('#dominancia').val();
        let ocupacion = $('#ocupacion').val();
        let residencia = $('#residencia').val();

        $.ajax({
            url: URL,
            method: 'POST',
            data: { ide, nombre, email, telefono, edad, sexo, escolaridad, estado, dominancia, ocupacion, residencia }
        }).done(function () {
            $('table').on('click', '#cerrar', function () {
                window.location.href = '/paciente'
            })
            window.location.href = '/paciente'
        })

    })

/*    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var expediente =fila.find('#expediente').val();
        var nombre = fila.find('#nombre').val();
        var fecha = fila.find('#fecha').val();
        var edad = fila.find('#edad').val();
        var sexo = fila.find('#sexo').val();
        var estado_civil = fila.find('#estado_civil').val();
        var religion = fila.find('#religion').val();
        var lugar_origen = fila.find('#lugar_origen').val();
        var ocupacion = fila.find('#ocupacion').val();
        var domicilio = fila.find('#domicilio').val();
        var telefono = fila.find('#telefono').val();
        var padecimiento_madre = fila.find('#padecimiento_madre').val();
        var fallecido = fila.find('#fallecido').val();
        var causa = fila.find('#causa').val();
        var padecimiento_padre = fila.find('#padecimiento_padre').val();
        var fallecido2 = fila.find('#fallecido2').val();
        var causa2 = fila.find('#causa2').val();
        var alergia_medicamento = fila.find('#alergia_medicamento').val();
        var alergia_alimentos = fila.find('#alergia_alimentos').val();
        var alergia_sustancias = fila.find('#alergia_sustancias').val();
        var cirugias = fila.find('#cirugias').val();
        var transfusiones = fila.find('#transfusiones').val();
        var fracturas = fila.find('#fracturas').val();
        var alcoholismo = fila.find('#alcoholismo').val();
        var tabaquismo = fila.find('#tabaquismo').val();
        var drogas = fila.find('#drogas').val();//
        var dm = fila.find('#dm').val();
        var tiempo = fila.find('#tiempo').val();
        var has = fila.find('#has').val();
        var tiempo2 = fila.find('#tiempo2').val();
        var ir = fila.find('#ir').val();
        var otras = fila.find('#otras').val();
        var ta = fila.find('#ta').val();
        var fc = fila.find('#fc').val();
        var x1 = fila.find('#x1').val();
        var fr = fila.find('#fr').val();
        var temp = fila.find('#temp').val();
        var peso = fila.find('#peso').val();
        var cabeza = fila.find('#cabeza').val();
        var cuello = fila.find('#cuello').val();
        var abdomen =fila.find('#abdomen').val();
        var pelvicos = fila.find('#pelvicos').val();
        var toracicos = fila.find('#toracicos').val();
        var menarca = fila.find('#menarca').val();
        var cesareas = fila.find('#cesareas').val();
        var ivsa = fila.find('#ivsa').val();
        var aborto = fila.find('#aborto').val();
        var gestas = fila.find('#gestas').val();
        var paras = fila.find('#paras').val();
        var hemoglobina = fila.find('#hemoglobina').val();
        var hematocrito = fila.find('#hematocrito').val();
        var plaquetas = fila.find('#plaquetas').val();
        var glucosa = fila.find('#glucosa').val();
        var urea = fila.find('#urea').val();
        var creatinina = fila.find('#creatinina').val();
        var rx = fila.find('#rx').val();
        var usg = fila.find('#usg').val();
        var medico = fila.find('#medico').val();
        var quirurgico = fila.find('#quirurgico').val();
        var diagnostico = fila.find('#diagnostico').val();
        var elaboro = fila.find('#elaboro').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id,expediente,nombre,fecha,edad,sexo,estado_civil,religion,lugar_origen,ocupacion,domicilio,telefono,padecimiento_madre,fallecido,causa,padecimiento_padre,fallecido2,causa2,alergia_medicamento,alergia_alimentos,alergia_sustancias,cirugias,transfusiones,fracturas,alcoholismo,tabaquismo,drogas,dm,tiempo,has,tiempo2,ir,otras,ta,fc,x1,fr,temp,peso,cabeza,cuello,abdomen,pelvicos,toracicos,menarca,cesareas,ivsa,aborto,gestas,paras,hemoglobina,hematocrito,plaquetas,glucosa,urea,creatinina,rx,usg,medico,quirurgico,diagnostico,elaboro}

        }).done(function (respuesta) {
            window.location.href = '/paciente'
            console.log('Dato actualizado')
        })
    })*/
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var nombre = fila.find('#nombre').val();
        var edad = fila.find('#edad').val();
        var medico = fila.find('#medico').val();
        var fecha = fila.find('#fecha').val();
        var esp1 = fila.find('#esp1').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, nombre,edad,medico,fecha,esp1 }

        }).done(function (respuesta) {
            window.location.href='/paciente'
            console.log('Dato actualizado')
        })
    })
    $('table').on('click', '#delete2', function () {
        var fila = $(this).closest('tr');
        var id = fila.find('#clave').val();
        $.ajax({
            url: URL,
            method: 'delete',
            data: { id },
        }).done(function (id) {

            window.location.href = '/paciente'
        })

    })
    $('table').on('click', '#delete', function () {
        var fila = $(this).closest('tr');
        var id = fila.find('#clave').val();
        $.ajax({
            url: URL,
            method: 'delete',
            data: { id },
        }).done(function (id) {

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
                        window.location.href = '/paciente'
                    )
                }

            })
        })

    })

    $('table').on('click', '#detalle', function () {
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url: '/nota/' + '/' + id,
            method: 'GET'

        }).done(function (agenda) {
            let detalle = $('#verdetalle')
            detalle.html('')
            detalle.append(`
            <div class="container">
            <table class="table">
              <tr>
                <td>
                  <div class="text-center">
                    <img class="d-block mx-auto mb-4" src="assets/images/111.jpg" alt="" height="160" width="180">
                  </div>
                </td>
                <td>
                <br><br>
                  <h4 style="font-size: 30px; text-align: right;">CLINICA "ALMENDROS"</h4>
                </td>
              </tr>
            </table>
            <br><br>
            <div class="text-center">
              <div class="card-header">
                <h4>NOTA MEDICA</h4>
              </div>
            </div>
            <br>
            <table class="table">
            <tr>
                <td>
                    <div
                        class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="basic-addon1">PACIENTE:</span>
                        <input
                            type="text" class="form-control" placeholder="" aria-label="Username" id="nombre" value="${agenda.nombre}">
                    </div>
                    <div
                        class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">MEDICO:</span>
                        <input tcype="text" class="form-control" aria-label="Username" name="medico" aria-describedby="basic-addon1" id="medico" value="Dr. Ulises Pérez Sánchez">
                    </div>
                <td>
                    <div
                        class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">EDAD:</span>
                        <input tcype="text" class="form-control" placeholder="" aria-label="Username" name="edad" aria-describedby="basic-addon1" id="edad" value="${agenda.edad}">
                    </div>
                    <div
                        class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">FECHA:</span>
                        <input type="text" class="form-control" placeholder="" aria-label="Username" name="fecha" aria-describedby="basic-addon1" id="fecha" value="${agenda.fecha}">
                    </div>
                </td>
            </tr>
        </table>
        <div>
                <div class="card-header text-center" id="indicacion">
                  <h4>DESCRIPCIÓN</h4>
                </div>
                <div id="seccion">
                  <p id="texto3"></p>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                    <textarea class="form-control"  type="" id="esp1" rows="20" placeholder="INGRESA AQUÍ TUS OBSERVACIONES" style="text-align: justify;">${agenda.esp1}</textarea>
                  </div>
                </div>
              </div>
             </div> 
            `)
        })

    })
    //
    $('table').on('click', '#detalle1', function () {
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url: '/paciente/' + '/' + id,
            method: 'GET'

        }).done(function (agenda) {
            let detalle = $('#verdetalle1')
            detalle.html('')
            detalle.append(`
            <div class="container"> 
            <input id="clave" type="hidden" name="id" value="${agenda.id}">
            <table class="table">
            <thead>
            <tr>
                <td>
                    <img class="d-block mx-auto mb-4" src="assets/images/111.jpg" alt=""
                        height="160" width="180">
                </td>
                <th>
                    <h4 style="font-size: 20px; text-align: center;">CLINICA "ALMENDROS"</h4>
                    <h5 style="font-size: 12px; text-align: center;">UNIDAD MÉDICO QUIRURGÍCA</h5>
                </th>
                <th>
                    <h4 style="font-size: 20px; text-align: center;"> HISTORIAL CLINICA</h4>
                    <h5 style="font-size: 12px; text-align: center;" class="text-white">UNIDAD
                        MÉDICO
                        QUIRURGÍCA</h5>
                </th>
            </tr>
        </thead>
            </table>
            <br><br>
            <div class="row g-3 ">
            <div class="col-sm-4" style="text-align: justify;>
                <label for="paterno" class="form-label">No. Expediente</label>
                <input type="text" class="form-control" id="expediente" name="expediente" placeholder=""
                    value="${agenda.expediente}">
            </div>
        </div>
        <br>
        <div class="text-left">
            <div class="card-header">
                <h4>FICHA DE IDENTIFICACIÓN</h4>
            </div>
        </div>
        <div class="row g-3 " style="text-align: justify;">
            <div class="col-sm-4">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre" placeholder=""
                    value="${agenda.nombre}">
            </div>
            <div class="col-sm-4">
                <label for="nombre" class="form-label">Fecha:</label>
                <input type="text" class="form-control" placeholder="" aria-label="Username" name="fecha" aria-describedby="basic-addon1" id="fecha" value="${agenda.fecha}">
            </div>
            <div class="col-sm-4">
                <label for="nombre" class="form-label">Edad:</label>
                <input tcype="text" class="form-control" placeholder="" aria-label="Username" name="edad" aria-describedby="basic-addon1" id="edad" value="${agenda.edad}">
            </div>
            <div class="col-sm-4">
                <label for="state" class="form-label"> Sexo</label>
                <input tcype="text" class="form-control" placeholder="" aria-label="Username" name="sexo" aria-describedby="basic-addon1" id="sexo" value="${agenda.sexo}">
            </div>

            <div class="col-md-4">
                <label for="estado" class="form-label">Estado civil</label>
                <input tcype="text" class="form-control" placeholder="" aria-label="Username" name="estado_civil" aria-describedby="basic-addon1" id="estado_civil" value="${agenda.estado_civil}">
            </div>
            <div class="col-sm-4">
                <label for="nombre" class="form-label">Religión</label>
                <input type="text" class="form-control" id="religion" name="religion" placeholder=""
                    value="${agenda.religion}">
            </div>
            <div class="col-sm-4">
                <label for="nombre" class="form-label">Lugar de origen</label>
                <input type="text" class="form-control" id="lugar_origen" name="lugar_origen"
                    placeholder="" value="${agenda.lugar_origen}">
            </div>
            <div class="col-sm-4">
                <label for="nombre" class="form-label">Ocupación</label>
                <input type="text" class="form-control" id="ocupacion" name="ocupacion" placeholder=""
                    value="${agenda.ocupacion}">
            </div>
            <div class="col-sm-4">
                <label for="nombre" class="form-label">Domicilio</label>
                <input type="text" class="form-control" id="domicilio" name="domicilio" placeholder=""
                    value="${agenda.domicilio}">
            </div>
            <!--div class="col-sm-4">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombres" placeholder=""
                    value="${agenda.nombre}">
            </div-->
            <div class="col-sm-4">
                <label for="telefono" class="form-label">Numero de Teléfono</label>
                <input type="number" class="form-control" id="telefono" name="telefono" placeholder=""
                    value="${agenda.telefono}">
            </div>

        </div>
        <br>
                        <div class="text-left">
                            <div class="card-header">
                                <h4>ANTECEDENTES HEREDOFAMILIARES</h4>
                            </div>
                        </div>
                        <br>
                        <div class="row g-3 " " style="text-align: justify;">
                            <div class="col-sm-4">
                                <label for="state" class="form-label"> Madre con:</label>
                                <input id="padecimiento_madre" name="padecimiento_madre" value="${agenda.padecimiento_madre}" type="text" class="form-control">
                                
                            </div>
                            <div class="col-sm-4">
                                <label class="form-label" for="celsi">Fallecido: </label>
                                <input id="fallecido" name="fallecido" value="${agenda.fallecido}" type="text" class="form-control">
                                
                            </div>
                            <div class="col-sm-4">
                                <label for="nombre" class="form-label">Causa:</label>
                                <input type="text" class="form-control" id="causa" name="causa" placeholder="" value="${agenda.causa}">
                            </div>
                        </div>

                        <div class="row g-3 " " style="text-align: justify;">
                            <div class="col-sm-4">
                                <label for="state" class="form-label"> Padre con:</label>
                                <input id="padecimiento_padre" name="padecimiento_padre" value="${agenda.padecimiento_padre}" type="text" class="form-control">                   
                                
                            </div>
                            <div class="col-sm-4">
                                <label class="form-label" for="celsi">Fallecido: </label>
                                <input type="text" id="fallecido2" name="fallecido2" value="${agenda.fallecido2}" class="form-control" >
                            </div>
                            <div class="col-sm-4">
                                <label for="nombre" class="form-label">Causa:</label>
                                <input type="text" class="form-control" id="causa2" name="causa2" placeholder=""
                                    value="${agenda.causa2}">
                            </div>
                        </div>
                        

                        <br>
                        <div class="text-left">
                            <div class="card-header">
                                <h4>ANTECEDENTES PERSONALES NO PATOLÓGICOS</h4>
                            </div>
                        </div>
                        <br>
                        <div class="row g-3 " " style="text-align: justify;">
                            <div class="col-sm-2">
                                <label for="nombre" class="form-label">Alergias:</label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""-->
                            </div>
                            <div class="col-sm-10">
                                <label for="nombre" class="form-label">Medicamentos:</label>
                                <input type="text" class="form-control" id="alergia_medicamento" name="nombres"
                                    placeholder="" value="${agenda.alergia_medicamento}">
                            </div>
                            <div class="col-sm-2">
                                <label for="nombre" class="form-label"></label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""-->
                            </div>
                            <div class="col-sm-10">
                                <label for="nombre" class="form-label">Alimentos:</label>
                                <input type="text" class="form-control" id="alergia_alimentos" name="nombres"
                                    placeholder="" value="${agenda.alergia_alimentos}">
                            </div>
                            <div class="col-sm-2">
                                <label for="nombre" class="form-label"></label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""-->
                            </div>
                            <div class="col-sm-10">
                                <label for="nombre" class="form-label">Sustancias quimicas:</label>
                                <input type="text" class="form-control" id="alergia_sustancias" name="nombres"
                                    placeholder="" value="${agenda.alergia_sustancias}">
                            </div>
                        </div>
                        <div class="row g-3 " " style="text-align: justify;">
                            <div class="col-sm-12">
                                <label for="nombre" class="form-label">Cirugias previas:</label>
                                <input type="text" class="form-control" id="cirugias" name="nombres" value="${agenda.cirugias}">
                            </div>
                        </div>
                        <div class="row g-3 " " style="text-align: justify;">
                            <div class="col-sm-12">
                                <label for="nombre" class="form-label">Transfusiones:</label>
                                <input type="text" class="form-control" id="transfusiones" name="nombres"
                                    placeholder="" value="${agenda.transfusiones}">
                            </div>
                        </div>
                        <div class="row g-3 " " style="text-align: justify;">
                            <div class="col-sm-12">
                                <label for="nombre" class="form-label">Fracturas actuales y/o previas:</label>
                                <input type="text" class="form-control" id="fracturas" name="nombres" placeholder="" value="${agenda.fracturas}">
                            </div>
                        </div>
                        <div class="row g-3 " " style="text-align: justify;">
                            <div class="col-sm-3">
                                <label for="nombre" class="form-label">Taxicomias:</label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""--->
                            </div>
                            <div class="col-sm-3">
                                <label class="form-check-label" for="celsi">Alcoholismo: </label>
                                <input type="text" class="form-control" id="alcoholismo" name="alcoholismo" placeholder="" value="${agenda.alcoholismo}">
                            </div>
                            <div class="col-sm-3">
                                <label class="form-check-label" for="tabaquismo">Tabaquismo: </label>
                                <input type="text" class="form-control" id="tabaquismo" name="tabaquismo" placeholder="" value="${agenda.tabaquismo}">
                                
                            </div>
                            <div class="col-sm-3">
                                <label class="form-check-label" for="drogas">Drogas: </label>
                                <input type="text" class="form-control" id="drogas" name="drogas" placeholder="" value="${agenda.drogas}">
                            </div>
                        </div>
                        <!--antecedentes personales patalogicos-->
                        <div class="text-left">
                            <div class="card-header">
                                <h4>ANTECEDENTES PERSONALES PATOLÓGICOS</h4>
                            </div>
                        </div>
                        <br>
                        <div class="row g-3 " " style="text-align: justify;">
                            <div class="col-sm-4">
                                <label class="form-label" for="dm">DM: </label>
                                <input type="text" class="form-control" id="dm" name="dm" placeholder="" value="${agenda.dm}">
                            </div>
                            <div class="col-sm-8">
                                <label for="tiempo2" class="form-label">Tiempo de evolución:</label>
                                <input type="text" class="form-control" id="tiempo" name="tiempo" placeholder=""
                                value="${agenda.tiempo}">
                            </div>
                        </div>
                        <div class="row g-3  "style="text-align: justify;">
                            <div class="col-sm-4">
                                <label class="form-label" for="has">HAS: </label>
                                <input type="text" class="form-control" id="has" name="has" placeholder="" value="${agenda.has}">
                            </div>
                            <div class="col-sm-8" "style="text-align: justify;">
                                <label for="tiempo2" class="form-label">Tiempo de evolución:</label>
                                <input type="text" class="form-control" id="tiempo2" name="tiempo2" placeholder=""
                                value="${agenda.tiempo2}">
                            </div>
                            <div class="col-sm-12" "style="text-align: justify;">
                                <label for="ir" class="form-label">IR (A Ò C) SI NO TIEMPO DE EVOLUCIÒN: </label>
                                <input type="text" class="form-control" id="ir" name="ir" placeholder="" value="${agenda.ir}">
                            </div>
                            <div class="col-sm-12" "style="text-align: justify;">
                                <label for="otras" class="form-label">OTRAS DE IMPORTANCIA:</label>
                                <input type="text" class="form-control" id="otras" name="otras" placeholder="" value="${agenda.otras}">
                            </div>
                        </div> 
                        <!--exploración fisica-->
                        <br>
                        <div class="text-left">
                            <div class="card-header">
                                <h4>EXPLORACIÓN FISICA</h4>
                            </div>
                        </div>
                        <br>
                        <div class="row g-3  "style="text-align: justify;">
                            <div class="col-sm-12">
                                <label class="form-label">Signos vitales:</label>
                            </div>
                            <div class="col-sm-2">
                                <label for="ta" class="form-label">T/A:</label>
                                <input type="text" class="form-control" id="ta" name="ta" placeholder="" value="${agenda.ta}">
                            </div>
                            <div class="col-sm-2">
                                <label for="fc" class="form-label">FC:</label>
                                <input type="text" class="form-control" id="fc" name="fc" placeholder="" value="${agenda.fc}">
                            </div>
                            <div class="col-sm-2">
                                <label for="x1" class="form-label">X1:</label>
                                <input type="text" class="form-control" id="x1" name="x1" placeholder="" value="${agenda.x1}">
                            </div>
                            <div class="col-sm-2">
                                <label for="fr" class="form-label">FR:</label>
                                <input type="text" class="form-control" id="fr" name="fr" placeholder="" value="${agenda.fr}">
                            </div>
                            <div class="col-sm-2">
                                <label for="temp" class="form-label">TEMP:</label>
                                <input type="text" class="form-control" id="temp" name="temp" placeholder="" value="${agenda.temp}">
                            </div>
                            <div class="col-sm-2">
                                <label for="peso" class="form-label">PESO:</label>
                                <input type="text" class="form-control" id="peso" name="peso" placeholder="" value="${agenda.peso}">
                            </div>
                        </div>
                        <br>
                        <div class="row g-3  "style="text-align: justify;">
                            <div class="col-sm-12">
                                <label for="nombre" class="form-label">Cabeza:</label>
                                <input type="text" class="form-control" id="cabeza" name="cabeza" placeholder=""
                                    value="${agenda.cabeza}">
                            </div>
                        </div>
                        <div class="row g-3  "style="text-align: justify;">
                            <div class="col-sm-12">
                                <label for="cuello" class="form-label">Cuello:</label>
                                <input type="text" class="form-control" id="cuello" name="nombres" placeholder=""
                                    value="${agenda.cuello}">
                            </div>
                        </div>
                        <div class="row g-3  "style="text-align: justify;">
                            <div class="col-sm-12">
                                <label for="abdomen" class="form-label">Abdomen:</label>
                                <input type="text" class="form-control" id="abdomen" name="nombres" placeholder=""
                                    value="${agenda.abdomen}">
                            </div>
                        </div>
                        <div class="row g-3  "style="text-align: justify;">
                            <div class="col-sm-12">
                                <label for="nombre" class="form-label">Miembros pélvicos:</label>
                                <input type="text" class="form-control" id="pelvicos" name="nombres" placeholder=""
                                    value="${agenda.pelvicos}">
                            </div>
                        </div>
                        <div class="row g-3  "style="text-align: justify;">
                            <div class="col-sm-12">
                                <label for="toracicos" class="form-label">Miembros torácicos:</label>
                                <input type="text" class="form-control" id="toracicos" name="nombres" placeholder=""
                                    value="${agenda.toracicos}">
                            </div>
                        </div>   
                        
                
                        <!--antecendent ginecobstétricos-->
                        <br>
                        <div div class="row g-3" style="text-align: justify;">
                            <div style="text-align: center;">
                                <div class="card-header">
                                    <h4>ANTECEDENTES GINECOBSTÉTRICOS</h4>
                                </div>
                            </div>
                            <br>

                            <div class="row g-3 ">
                                <div class="col-sm-6">
                                    <label for="menarca" class="form-label">Menarca:</label>
                                    <input type="text" class="form-control" id="menarca" name="nombres" placeholder=""
                                        value="${agenda.menarca}">
                                </div>
                                <div class="col-sm-6">
                                    <label for="cesareas" class="form-label">Cesáreas:</label>
                                    <input type="text" class="form-control" id="cesareas" name=" nombres" placeholder=""
                                        value="${agenda.cesareas}">
                                </div>
                            </div>
                            <div class="row g-3 ">
                                <div class="col-sm-6">
                                    <label for="ivsa" class="form-label">IVSA:</label>
                                    <input type="text" class="form-control" id="ivsa" name="ivsa" placeholder=""
                                        value="${agenda.ivsa}">
                                </div>
                                <div class="col-sm-6">
                                    <label for="aborto" class="form-label">Aborto:</label>
                                    <input type="text" class="form-control" id="aborto" name="aborto" placeholder=""
                                        value="${agenda.aborto}">
                                </div>
                            </div>
                            <div class="row g-3 ">
                                <div class="col-sm-6">
                                    <label for="gestas" class="form-label">Gesta:</label>
                                    <input type="text" class="form-control" id="gestas" name="gestas" placeholder=""
                                        value="${agenda.gestas}">
                                </div>
                                <div class="col-sm-6">
                                    <label for="paras class=" form-label">Parás:</label>
                                    <input type="text" class="form-control" id="paras" name="paras" placeholder=""
                                        value="${agenda.paras}">
                                </div>
                            </div>
                        
                        <!--resultados de laboratorio-->
                        <br>
                        <div style="text-align: center;">
                            <div class="card-header">
                                <h4>RESULTADOS DE LABORATORIO</h4>
                            </div>
                        </div>
                        <br>

                        <div class="row g-3 ">
                            <div class="col-sm-2">
                                <label for="nombre" class="form-label">BH:</label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""-->
                            </div>
                            <div class="col-sm-10">
                                <label for="hemoglobina" class="form-label">Hemoglobina:</label>
                                <input type="text" class="form-control" id="hemoglobina" name="nombres" placeholder=""
                                    value="${agenda.hemoglobina}">
                            </div>
                            <div class="col-sm-2">
                                <label for="nombre" class="form-label"></label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""-->
                            </div>
                            <div class="col-sm-10">
                                <label for="hematocrito" class="form-label">Hematocrito:</label>
                                <input type="text" class="form-control" id="hematocrito" name="nombres" placeholder=""
                                    value="${agenda.hematocrito}">
                            </div>
                            <div class="col-sm-2">
                                <label for="nombre" class="form-label"></label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""-->
                            </div>
                            <div class="col-sm-10">
                                <label for="plaquetas" class="form-label">Plaquetas:</label>
                                <input type="text" class="form-control" id="plaquetas" name="plaquetas" placeholder=""
                                    value="${agenda.plaquetas}">
                            </div>
                        </div>
                        <div class="row g-3 ">
                            <div class="col-sm-2">
                                <label for="nombre" class="form-label">QS:</label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""-->
                            </div>
                            <div class="col-sm-10">
                                <label for="glucosa" class="form-label">Glucosa:</label>
                                <input type="text" class="form-control" id="glucosa" name="nombres" placeholder=""
                                    value="${agenda.glucosa}">
                            </div>
                            <div class="col-sm-2">
                                <label for="nombre" class="form-label"></label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""-->
                            </div>
                            <div class="col-sm-10">
                                <label for="urea" class="form-label">Urea:</label>
                                <input type="text" class="form-control" id="urea" name="nombres" placeholder=""
                                    value="${agenda.urea}">
                            </div>
                            <div class="col-sm-2">
                                <label for="nombre" class="form-label"></label>
                                <!--input type="text" class="form-control" id="nombre" name="nombres" placeholder="" value=""-->
                            </div>
                            <div class="col-sm-10">
                                <label for="creatinina" class="form-label">Creatinina:</label>
                                <input type="text" class="form-control" id="creatinina" name="nombres" placeholder=""
                                    value="${agenda.creatinina}">
                            </div>
                        </div>
                        <br>
                        <div class="row g-3 ">
                            <div class="col-sm-12">
                                <label for="rx" class="form-label">RX:</label>
                                <input type="text" class="form-control" name="rxs" id="rx" value="${agenda.rx}" placeholder="">
                            </div>
                            <div class="col-sm-12">
                                <label for="usg" class="form-label">USG:</label>
                                <input type="text" class="form-control" name="rxs" id="usg" value="${agenda.usg}" placeholder="">
                            </div>
                        </div>
                        <!--tratamiento actual-->
                        <br>
                        <div style="text-align: center;">
                            <div class="card-header">
                                <h4>TRATAMIENTO ACTUAL</h4>
                            </div>
                        </div>
                        <br>
                        <div class="row g-3">
                            <div class="col-sm-12">
                                <label for="medico" class="form-label">Médico:</label>
                                <input type="text" class="form-control" name="medico" id="medico" value="${agenda.medico}"
                                    placeholder="">
                            </div>
                            <div class="col-sm-12">
                                <label for="quirurgico" class="form-label">Quirúrgico:</label>
                                <input type="text" class="form-control" name="otros" id="quirurgico" value="${agenda.quirurgico}"
                                    placeholder="">
                            </div>
                        </div>
                        <!--final de la página-->
                        <br>
                        <div class="row g-3">
                            <div class="col-sm-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Diagnóstico:</label>
                            <textarea class="form-control" type="" id="esp1" rows="8"
                              placeholder="INGRESA AQUÍ TUS OBSERVACIONES">${agenda.diagnostico}</textarea>
                            </div>
                        </div>
                        <br><br><br>
                        <div class="row g-3">
                            <div class="col-sm-8">
                                <label for="elaboro" class="form-label">Elaboró:</label>
                                <input type="text" class="form-control" name="otros" id="elaboro"
                                    value="Dr. Ulises Pérez Sánchez" placeholder="">
                            </div>
                            <div class="col-sm-4">
                                <label for="quirurgico" class="form-label">Firma:</label>
                                <input type="text" class="form-control" name="otros" id="" value="" placeholder="">
                            </div>
                        </div>
                    </div>
                    
            `)
        })

    })
})



