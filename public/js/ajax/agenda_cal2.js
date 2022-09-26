$(function () {
    /*Post*/ 
    const URL = '/agenda2'
    $('#insertar').on('click',function(){
        let fecha_i = $('#fecha_i').val();
        let hora_i = $('#hora_i').val();
        let fecha_f = $('#fecha_f').val();
        let hora_f = $('#hora_f').val();
        let titulo = $('#titulo').val();
        let descripcion = $('#descripcion').val();
        let costo = $('#costo').val();
        let medico = $('#medico').val();
        $.ajax({
            url: URL,
            method: 'POST',
            data: { fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion,costo,medico }
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/agenda2'
        })

    })
    
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var fecha_i= fila.find('#fecha_i').val();
        var hora_i = fila.find('#hora_i').val();
        var fecha_f = fila.find('#fecha_f').val();
        var hora_f = fila.find('#hora_f').val();
        var titulo = fila.find('#titulo').val();
        var descripcion = fila.find('#descripcion').val();
        var costo = fila.find('#costo').val();
        var medico = fila.find('#medico').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion,costo,medico }

        }).done(function (respuesta) {
            window.location.href='/agenda2'
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
                    window.location.href='/agenda2'
                  )
                }
                
              })
            
        })

    })

    
})


    
