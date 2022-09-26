$(function () {
    /*Post*/ 
    const URL = '/nota'
    $('#insertar').on('click',function(){
        let nombre = $('#nombre').val();
        let edad = $('#edad').val();
        let medico = $('#medico').val();
        let fecha = $('#fecha').val();
        let esp1 = $('#esp1').val();

        $.ajax({
            url: URL,
            method: 'POST',
            data: {nombre,edad,medico,fecha,esp1}
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/nota'
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
            window.location.href='/nota'
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
            window.location.href='/nota'
        })

    })

    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/nota/'+'/'+id,
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


    
