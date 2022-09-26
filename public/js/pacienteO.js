$(function () {
    /*Post*/ 
    const URL = '/pacienteO'
    $('#insertar').on('click',function(){
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
            data: {ide, nombre,email, telefono, edad,sexo,escolaridad,estado,dominancia,ocupacion,residencia}
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/pacienteO'
        })

    })
    
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
            window.location.href='/pacienteO'
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
                    window.location.href='/pacienteO'
                  )
                }
                
              })
        })

    })

    $('table').on('click', '#detalle', function () {
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url: '/notaO/' + '/' + id,
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
                  <h4 style="font-size: 30px; text-align: center;">CLINICA "ALMENDROS"</h4>
                </td>
              </tr>
            </table>
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
                        <input tcype="text" class="form-control" aria-label="Username" name="medico" aria-describedby="basic-addon1" id="medico" value="Dra. Adai Pérez Montesinos">
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
                    <textarea class="form-control" type="" id="esp1" rows="20" placeholder="INGRESA AQUÍ TUS OBSERVACIONES" value="">${agenda.esp1}</textarea>
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
            url: '/pacienteO/' + '/' + id,
            method: 'GET'

        }).done(function (agenda) {
            let detalle = $('#verdetalle1')
            detalle.html('')
            detalle.append(`
            <div class="container">
            <table class="table">
            <thead>
            <tr>
                <th>
                    <img class="d-block mx-auto mb-4" src="assets/images/111.jpg" alt=""
                        height="160" width="180">
                </th>
                <th>
                    <h4 style="font-size: 20px; text-align: center;">CLINICA "ALMENDROS"
                    </h4>
                    <h5 style="font-size: 12px; text-align: center;">UNIDAD MÉDICO
                        QUIRURGÍCA</h5>
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
                        
                        
                    </div>
                    <div style="text-align: justify;">
                    <!--NOTA POST-QUIRURGICA-->
                    <br>
                    <div style="text-align: center;">
                        <div class="card-header">
                            <h4>NOTA POST-QUIRURGICA</h4>
                        </div>
                    </div>
                    <br>
                    <div class="row g-3">
                        <div class="col-sm-12">
                            <label for="cirugiaP" class="form-label">Cirugia Programada:</label>
                            <input type="text" class="form-control" name="otros" id="cirugiaP" value="${agenda.cirugiaP}"
                                placeholder="">
                        </div>
                        <div class="col-sm-12">
                            <label for="cirugiaR" class="form-label">Cirugia Realizada:</label>
                            <input type="text" class="form-control" name="otros" id="cirugiaR" value="${agenda.cirugiaR}"
                                placeholder="">
                        </div>
                        <div class="col-sm-12">
                            <label for="hallazgos" class="form-label">Hallazgos:</label>
                            <input type="text" class="form-control" name="otros" id="hallazgos" value="${agenda.hallazgos}"
                                placeholder="">
                        </div>
                        <div class="col-sm-12">
                            <label for="complicaciones" class="form-label">Complicaciones</label>
                            <input type="text" class="form-control" name="otros" id="complicaciones" value="${agenda.complicaciones}"
                                placeholder="">
                        </div>
                        <div class="col-sm-12">
                            <label for="cirujano" class="form-label">Cirujano:</label>
                            <input type="text" class="form-control" name="otros" id="cirujano" value="${agenda.cirujano}"
                                placeholder="">
                        </div>
                        <div class="col-sm-12">
                            <label for="ayudante" class="form-label">Ayudante:</label>
                            <input type="text" class="form-control" name="otros" id="ayudante" value="${agenda.ayudante}"
                                placeholder="">
                        </div>
                        <div class="col-sm-12">
                            <label for="instrumentista" class="form-label">Instrumentista:</label>
                            <input type="text" class="form-control" name="otros" id="instrumentista" value="${agenda.instrumentista}"
                                placeholder="">
                        </div>
                        <div class="col-sm-12">
                            <label for="anestesiologo" class="form-label">Anestesiólogo:</label>
                            <input type="text" class="form-control" name="otros" id="anestesiologo" value="${agenda.anestesiologo}"
                                placeholder="">
                        </div>
                        <div class="col-sm-12">
                            <label for="circulante" class="form-label">Circulante:</label>
                            <input type="text" class="form-control" name="otros" id="circulante" value="${agenda.circulante}"
                                placeholder="">
                        </div>
                        <div class="col-sm-12">
                            <label for="esp1" class="form-label">NOTA DE EVALUACIÓN POSTOPERATORIA: </label>
                            <textarea class="form-control" type="" id="esp1" rows="10" value="">${agenda.esp1}</textarea>
                        </div>
                        <div class="col-sm-12">
                            <label for="esp2" class="form-label">NOTA DE ALTA DEL SERVICIO: </label>
                            <textarea class="form-control" type="" id="esp2" rows="10" placeholder="" value="">${agenda.esp2}</textarea>
                        </div>
                    </div>
                    </div>
                    <br><br><br>
                        <div class="row g-3" style="text-align: justify;">
                        <!--final de la página-->
                        <br>
                        <div class="row g-3">
                            <div class="col-sm-12">

                                <label for="diagnostico class=" form-label">Diagnóstico:</label>
                                <textarea class="form-control" type="text" class="form-control" name="otros"
                                    id="diagnostico" value="" placeholder="" rows="10">${agenda.diagnostico}</textarea>
                            </div>
                        </div>
                            <div class="col-sm-8">
                                <label for="elaboro" class="form-label">Elaboró:</label>
                                <input type="text" class="form-control" name="otros" id="elaboro"
                                    value="Dra Adai Pérez Montesinos" placeholder="">
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
    $('table').on('click', '#detalle2', function () {
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url: '/cartaO/' + '/' + id,
            method: 'GET'

        }).done(function (agenda) {
            let detalle = $('#verdetalle2')
            detalle.html('')
            detalle.append(`
            <div class="container"> 
            <table class="table">
            <tr>
                <td>
                    <div class="text-center">
                        <img class="d-block mx-auto mb-4" src="assets/images/111.jpg" alt=""
                            height="160" width="180">
                    </div>
                </td>
                <td>
                    <div class="text-justificado">
                    <br><br>
                        <h4 style="font-size: 20px; text-align: center;">CARTA DE CONSENTIMIENTO
                            BAJO INFORMACION</h4>
                    </div>
                </td>

            </tr>
            <tr>
                <td>
                    <h5 style="font-size: large;" class="text-justificado">CLINICA "ALMENDROS"</h5>
                </td>
            </tr>
            <tr>
                                    <td>
                                        <h5 style="font-size: large;" class="text-justificado">Cirujana Oftalmóloga</h5>
                                    </td>
                                </tr>
            <tr>
                <td>
                    <h5 class="texto-justificado">Dr. Ulises Pérez Sanchez</h5>
                </td>
            </tr>
        </table>
        <br>
        <div class="text-center">
            <div class="card-header">
                                    <table class="table">
                                        <tr>
                                            <td>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">NOMBRE DEL
                                                        PACIENTE:</span>
                                                    <input tcype="text" class="form-control" placeholder=""
                                                        aria-label="Username" id="nombre" name="nombre"
                                                        aria-describedby="basic-addon1" value="${agenda.nombre}">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">EDAD:</span>
                                                    <input tcype="text" class="form-control" placeholder=""
                                                        aria-label="Username" id="edad" name="edad" value="${agenda.edad}"
                                                        aria-describedby="basic-addon1">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">DOMICILIO:</span>
                                                    <input tcype="text" class="form-control" placeholder=""
                                                        aria-label="Username" id="domicilio" name="domicilio" value="${agenda.domicilio}"
                                                        aria-describedby="basic-addon1">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">REPRESENTANTE
                                                        LEGAL,
                                                        FAMILIAR O ALLEGADO:</span>
                                                    <input tcype="text" class="form-control" placeholder=""
                                                        aria-label="Username" name="repre" id="repre" value="${agenda.repre}"
                                                        aria-describedby="basic-addon1">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">EDAD:</span>
                                                    <input tcype="text" class="form-control" placeholder=""
                                                        aria-label="Username" name="edad2" id="edad2" value="${agenda.edad2}"
                                                        aria-describedby="basic-addon1">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">DOMICILIO:</span>
                                                    <input tcype="text" class="form-control" placeholder=""
                                                        aria-label="Username" name="dom2" id="dom2" value="${agenda.dom2}"
                                                        aria-describedby="basic-addon1">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">EN CALIDAD
                                                        DE:</span>
                                                    <input tcype="text" class="form-control" placeholder=""
                                                        aria-label="Username" name="calidad" id="calidad" value="${agenda.calidad}"
                                                        aria-describedby="basic-addon1">
                                                </div>
                                            </td>

                                        </tr>

                                    </table>
                                </div>
                            </div>

                            <br>
                            <div>
                            <div class="card-header1 text-center text-white" id="indicacion">
                                <h4>DECLARO</h4>
                            </div>
                            <div style="font-size: 15px; text-align: justify;">
                                Que el <input  type="text" name="esp1" id="esp1" class="col-sm-5" value="Dr. Adai Pérez Montesinos">, me ha explicado que
                                es conveniente proceder <input type="text" name="esp2" id="esp2" class="col-sm-8" value="${agenda.esp2}"> y
                                que, todo acto médico, diagnóstico o terapéutico, sea quirúrgico o no quirúrgico, lleva implicito
                                una serie de complicaciones mayores o menores a veces potencialmente serias, incluyen cierto riesgo de
                                mortalidad y quepueden requerir tratamientos complementarios, médicos o quirúrgicos que aumentan su
                                estancia hospitalaria, dichas complicaciones unas veces son derivadas
                                que están recibiendo o de las posibles anomalias anatómicas y/o de la utilización de
                                losequipos médicos. <br>Entre las complicaciones que pueden surgir en <input type="text" name="esp3"
                                    id="esp3" value="${agenda.esp3}">
                                se encuentra<input type="text" name="esp4" id="esp4" value="${agenda.esp4}"> Por lo que he comprendido las
                                explicaciones
                                que se
                                me han
                                facilitado en un lenguaje claro y sencillo y que el médico que me ha atendido
                                me realizó todas las observaciones y aclaró todas las dudas que le he planteado.
                                <br>
                                También comprendo que en cualquier momento y sin dar ninguna explicación, puedo
                                revocar
                                el
                                consentimiento que ahora presto,
                                por ello manifiesto que estoy satisfecho (a) con la información recibida y comprendo
                                el
                                alcance de los riesgos del tratamiento y
                                procedimiento.
                                <br><br>
                                Del mismo modo designo a <input type="text" name="esp5" id="esp5" value="${agenda.esp5}"> para que
                                exclusivamente
                                el (ella)
                                reciba información sobre mi estado de salud, diagnóstico, tratamiento y/o pronóstico
                                y
                                en
                                tales condiciones. <br><br>
                                <div class="card-header1 text-center text-white id=" indicacion">
                                    <h4>CONSIENTO</h4>
                                </div>
                                <br>En que se me realicen los procedimientos de diagnóstico y tratamientos que me
                                fueron
                                explicados y que me doy por enterado
                                en mi declaración. Así como, me reservo expresamente el derecho de revocar mi
                                consentimiento
                                en cualquier momento antes
                                de que el y/o los procedimientos, objeto de este documento sean una realidad.
                                <br><br>
                                Oaxaca, Oax., a los <input type="text" name="esp6" id="esp6" class="col-sm-1" value="${agenda.esp6}"> dias
                                del
                                mes
                                de
                                <input type="text" name="esp7" id="esp7" class="col-sm-2" value="${agenda.esp7}"> del año 20 <input
                                    type="text" name="esp8" id="esp8" class="col-sm-1" value="${agenda.esp8}">
                            </div>
                            <br>
                            <div class="card-header text-center" id="indicacion">
                                <br>
                                <h4></h4>
                            </div>
                            <br>
                            <div style="font-size: 15px; text-align: justify;">
                                (En caso de que el paciente o su representante revoque el consentimiento) <br>
                                REVOCO EL CONSENTIMIENTO PRESENTADO EN FECHA <input type="text" name="esp9" value="${agenda.esp9}"
                                    id="esp9" class="col-sm-5">
                                <br>
                                Y NO DESEO PROSEGUIR EL TRATAMIENTO QUE DOY CON ESTA FECHA POR FINALIZADO, EXIMIENDO
                                DE
                                TODA
                                RESPONSABILIDAD AL MEDICO TRATANTE, UNA VEZ QUE ME HA EXPLICADO LOS ALCANCES
                                CLÌNICOS DE
                                LA
                                SUSPENSIÒN DEL ACTO MENCIONADO.
                            </div>
                            <br><br>
                            <div class="card-header text-center" id="indicacion">
                                <br>
                                <h4></h4>
                            </div>
                            <br>
                            <div style="font-size: 15px; text-align: justify;">
                                (En caso de que el paciente o su representante revoque el consentimiento) <br>
                                NIEGO LA AUTORIZACION A QUE ME REALICEN LOS PROCEDIMIENTOS DE DIAGNÒSTICO Y
                                TRATAMIENTO
                                QUE
                                SE ME FUERON EXPLICADOS Y QUE DOY POR ENTERADO EN MI DECLARACIÒN.
                            </div>
                            <br>
                            <div class="card-header text-center" id="indicacion">
                                <br>
                                <h4></h4>
                            </div>
                            <br><br><br><br><br>
                            <div class="text-justificado row g-3 ">
                                <div class="col-sm-6">
                                    <label for="nombre" class="form-label" style="text-align: justify; font-size: 12px;">NOMBRE Y FIRMA DEL MEDICO</label>
                                    <input type="text" class="form-control" id="esp10" name="esp10" placeholder=""
                                        value="Dra Adai Pérez Montesinos">
                                </div>
                                <div class="col-sm-6">
                                    <label for="nombre" class="form-label" style="text-align: justify; font-size: 12px;">NOMBRE Y FIRMA DEL PACIENTE</label>
                                    <input type="text" class="form-control" id="esp11" name="esp11" placeholder=""
                                    value="${agenda.nombre}">
                                </div>
                            </div>
                            <br><br><br><br><br>
                            <div class="text-justificado row g-3 ">
                                <div class="col-sm-6">
                                    <label for="nombre" class="form-label" style="text-align: justify; font-size: 12px;">NOMBRE Y FIRMA DEL TESTIGO</label>
                                    <input type="text" class="form-control" id="esp12" name="esp12" placeholder=""
                                    value="${agenda.esp12}">
                                </div>
                                <div class="col-sm-6">
                                    <label for="nombre" class="form-label" style="text-align: justify; font-size: 14px;">NOMBRE Y FIRMA DEL TESTIGO</label>
                                    <input type="text" class="form-control" id="esp13" name="esp13" placeholder=""
                                    value="${agenda.esp13}">
                                </div>
                            </div>
                            <br><br><br><br><br>
                            <div class="text-justificado">
                                Oaxaca, Oax., a los <input type="text" name="esp14" id="esp14" class="col-sm-1" value="${agenda.esp14}">días
                                del
                                mes
                                de
                                <input type="text" name="esp15" id="esp15" class="col-sm-2" value="${agenda.esp15}"> del año 20 <input
                                    type="text" name="esp16" id="esp16" class="col-sm-1" value="${agenda.esp16}">

                            </div>
                        </div>
                        
                </div>
            `)
        })

    })
})


    
