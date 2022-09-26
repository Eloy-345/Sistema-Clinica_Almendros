$(function () {
    /*Post*/ 
    const URL = '/agenda_cal'
    $('#insertar').on('click',function(){
        let fecha_i = $('#fecha_i').val();
        let hora_i = $('#hora_i').val();
        let titulo = $('#titulo').val();
        let descripcion = $('#descripcion').val();
        let costo = $('#costo').val();
        let medico = $('#medico').val();
        $.ajax({
            url: URL,
            method: 'POST',
            data: { fecha_i,hora_i,titulo, descripcion,costo,medico }
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/agenda_cal'
        })

    })
    
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var fecha_i= fila.find('#fecha_i').val();
        var hora_i= fila.find('#hora_i').val();
        var titulo = fila.find('#titulo').val();
        var descripcion = fila.find('#descripcion').val();
        var costo = fila.find('#costo').val();
        var medico = fila.find('#medico').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, fecha_i,hora_i, titulo, descripcion,costo,medico }

        }).done(function (respuesta) {
            window.location.href='/agenda_cal'
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
        }).done(function(respuesta){
            Swal.fire({
                title: 'Confirmar',
                text: "¿Desea borrar el evento?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor:'#3085d6',
                confirmButtonText: 'Eliminar'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Eliminado!',
                    'Exitosamente',
                    window.location.href='/agenda_cal'
                  )
                }
                
              })
            
        })

    })

    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/agenda_Cal/'+'/'+id,
            method: 'GET'
            
        }).done(function(autos){
            let detalle = $('#verdetalle')
            detalle.html('')
            detalle.append(`
                <table class="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Marca</td>
                            <td>Modelo</td>
                            <td>Precio</td>
                            <td>Combustible</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${autos.id}</td>
                            <td>${autos.marca}</td>
                            <td>${autos.modelo}</td>
                            <td>${autos.precio}</td>
                            <td>${autos.combustible}</td>
                        </tr>
                    </tbody>
                </table>
            `)
        })

    })
})


    
