$(function () {
    /*Post*/ 
    const URL = '/pacienteF'
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
            $('table').on('click','#cerrar',function(){
                window.location.href='/pacienteF'
            })
            window.location.href='/pacienteF'
        })

    })
    
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
            window.location.href='/pacienteF'
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
                    window.location.href='/pacienteF'
                  )
                }
                
              })
        })

    })

    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/pacienteF/'+'/'+id,
            method: 'GET'
            
        }).done(function(agenda){
            let detalle = $('#verdetalle')
            detalle.html('')
            detalle.append(`
                <table class="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Nombre</td>
                            <td>Edad</td>
                            <td>Sexo</td>
                            <td>Estado civil</td>
                            <td>Domicilio</td>
                            <td>Fecha</td>
                            <td>Telefono</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${agenda.id}</td>
                            <td>${agenda.nombre}</td>
                            <td>${agenda.edad}</td>
                            <td>${agenda.sexo}</td>
                            <td>${agenda.estado_civil}</td>
                            <td>${agenda.domicilio}</td>
                            <td>${agenda.fecha}</td>
                            <td>${agenda.telefono}</td>
                        </tr>
                    </tbody>
                </table>
            `)
        })

    })
})


    
