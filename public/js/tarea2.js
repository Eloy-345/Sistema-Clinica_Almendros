$(function () {
  /*Post*/
  const URL = '/tarea2'
  $('#insertar').on('click', function () {
    let nombre = $('#nombre').val();
    let fecha = $('#fecha').val();
    let precio = $('#precio').val();
    let hora = $('#hora').val();
    let medico = $('#medico').val();
    let color = $('#color').val();
    let paciente = $('#paciente').val();
    $.ajax({
      url: URL,
      method: 'POST',
      data: { nombre, fecha, precio, hora, medico, color, paciente }
    }).done(function (respuesta) {
      window.location.href = '/tarea2'
      console.log('Dato actualizado')
    })

  })

  $('table').on('click', '#update', function () {
    let fila = $(this).closest('tr');
    var id = fila.find("#clave").val();
    var nombre = fila.find('#nombre').val();
    var fecha = fila.find('#fecha').val();
    var precio = fila.find('#precio').val();
    var hora = fila.find('#hora').val();
    var medico = fila.find('#medico').val();
    var color = fila.find('#color').val();
    var paciente = fila.find('#paciente').val();
    $.ajax({
      url: URL,
      method: 'PUT',
      data: { id, nombre, fecha, precio, hora, medico, color, paciente }

    }).done(function (respuesta) {
      window.location.href = '/tarea2'
      console.log('Dato actualizado')
    })
  })

  $('table').on('click', '#delete', function () {
    var fila = $(this).closest('tr');
    var id = fila.find('#clave').val();
    $.ajax({
      url: URL,
      method: 'delete',
      data: { id },
    }).done(function (respuesta) {
      window.location.href = '/tarea2'
    })

  })

  $('table').on('click', '#detalle', function () {
    let fila = $(this).closest('tr');
    let id = fila.find('#clave').val()
    $.ajax({
      url: '/tarea2/' + '/' + id,
      method: 'GET'

    }).done(function (agenda) {
      let detalle = $('#verdetalle')
      detalle.html('')
      detalle.append(`
            <div style="text-align: justify; font-size:" 11px;" class="container">
            <input id="clave" type="hidden" name="id" value="${agenda.id}">
            <div class="mb-4 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Actividad</label>
              <div class="col-sm-10">
                <input type="text" id="nombre" class="form-control" value="${agenda.nombre}" >
              </div>
            </div>
            <div class="mb-4 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Empieza</label>
              <div class="col-sm-5">
                <input type="text" id="fecha" class="form-control" value="${agenda.fecha}">
              </div>
              <div class="col-sm-5">
                <input type="text" id="hora" class="form-control" value="${agenda.hora}">
              </div>
            </div>
            <div class="mb-4 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Paciente</label>
              <div class="col-sm-10">
                <input type="text" id="paciente" class="form-control"
                  value="${agenda.paciente}">
              </div>
            </div>
            <div class="mb-4 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Costo</label>
              <div class="col-sm-2">
                <input type="text" id="precio" class="form-control"
                  value="${agenda.precio}">
              </div>
              <label for="staticEmail" class="col-sm-2 col-form-label">Medico</label>
              <div class="col-sm-6">
                <input type="text" id="medico" class="form-control"
                  value="${agenda.medico}">
              </div>
            </div>
            <div class="mb-4 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Color</label>
              <div class="col-sm-2">
                <input type="color" class="form-control form-control-color" id="color"
                  value="${agenda.color}" title="Escoge tu color">

              </div>
            </div>
          </div>
            `)
    })

  })
})



