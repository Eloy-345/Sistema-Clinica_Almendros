$(function () {
    /*Post*/ 
    const URL = '/receta3'
    $('#insertar').on('click',function(){
        let nota = $('#nota').val();
        $.ajax({
            url: URL,
            method: 'POST',
            data: { nota }
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/receta3'
        })

    })
    
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var nota= fila.find('#nota').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, nota}

        }).done(function (respuesta) {
            window.location.href='/receta3'
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
                    window.location.href='/receta3'
                  )
                }
                
              })
            
        })

    })

})


    
