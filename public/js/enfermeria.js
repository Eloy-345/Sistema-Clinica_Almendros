$(function () {
    /*Post*/ 
    const URL = '/enfermeria'
    $('#insertar').on('click',function(){
        let ide = $('#ide').val();
        let nombre = $('#nombre').val();
        let email = $('#email').val();
        let telefono = $('#telefono').val();
        let fecha = $('#fecha').val();
        let hora = $('#hora').val();

        $.ajax({
            url: URL,
            method: 'POST',
            data: { ide,nombre,email,telefono,fecha,hora}
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/enfermeria'
        })

    })
    
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var ide = fila.find('#ide').val();
        var nombre = fila.find('#nombre').val();
        var email = fila.find('#email').val();
        var telefono = fila.find('#telefono').val();
        var fecha = fila.find('#fecha').val();
        var hora = fila.find('#hora').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, ide, nombre,email, telefono, fecha, hora }

        }).done(function (respuesta) {
            window.location.href='/enfermeria'
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
            window.location.href='/enfermeria'
        })

    })

    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/enfermeria/'+'/'+id,
            method: 'GET'
            
        }).done(function(autos){
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
                            <td>Fecha</td>
                            <td>Hora</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${autos.id}</td>
                            <td>${autos.ide}</td>
                            <td>${autos.nombre}</td>
                            <td>${autos.email}</td>
                            <td>${autos.telefono}</td>
                            <td>${autos.fecha}</td>
                            <td>${autos.hora}</td>
                        </tr>
                    </tbody>
                </table>
            `)
        })

    })
})


    
