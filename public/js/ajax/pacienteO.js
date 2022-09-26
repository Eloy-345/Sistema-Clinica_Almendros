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
            window.location.href='/paciente'
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

    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/pacienteO/'+'/'+id,
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


    
