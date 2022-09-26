$(function () {
    /*Post*/ 
    const URL = '/cartaO'
    $('#insertar').on('click',function(){
        let nombre = $('#nombre').val();
        let edad = $('#edad').val();
        let domicilio = $('#domicilio').val();
        let repre = $('#repre').val();
        let edad2 = $('#edad2').val();
        let dom2 = $('#dom2').val();
        let calidad = $('#calidad').val();
        let esp1 = $('#esp1').val();
        let esp2 = $('#esp2').val();
        let esp3 = $('#esp3').val();
        let esp4 = $('#esp4').val();
        let esp5 = $('#esp5').val();
        let esp6 = $('#esp6').val();
        let esp7 = $('#esp7').val();
        let esp8 = $('#esp8').val();
        let esp9 = $('#esp9').val();
        let esp10 = $('#esp10').val();
        let esp11 = $('#esp11').val();
        let esp12 = $('#esp12').val();
        let esp13 = $('#esp13').val();
        let esp14 = $('#esp14').val();
        let esp15 = $('#esp15').val();
        let esp16 = $('#esp16').val();
        $.ajax({
            url: URL,
            method: 'POST',
            data: { nombre,edad,domicilio,repre,edad2,dom2,calidad,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10,esp11,esp12,esp13,esp14,esp15,esp16}
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/cartaO'
        })

    })
    
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var nombre = fila.find('#nombre').val();
        var edad = fila.find('#edad').val();
        var domicilio = fila.find('#repre').val();
        var repre = fila.find('#repre').val();
        var edad2 = fila.find('#edad2').val();
        var dom2 = fila.find('#dom2').val();
        var calidad = fila.find('#calidad').val();
        var esp1 = fila.find('#esp1').val();
        var esp2 = fila.find('#esp2').val();
        var esp3 = fila.find('#esp3').val();
        var esp4 = fila.find('#esp4').val();
        var esp5 = fila.find('#esp5').val();
        var esp6 = fila.find('#esp6').val();
        var esp7 = fila.find('#esp7').val();
        var esp8 = fila.find('#esp8').val();
        var esp9 = fila.find('#esp9').val();
        var esp10 = fila.find('#esp10').val();
        var esp11 = fila.find('#esp11').val();
        var esp12 = fila.find('#esp12').val();
        var esp13 = fila.find('#esp13').val();
        var esp14 = fila.find('#esp14').val();
        var esp15 = fila.find('#esp15').val();
        var esp16 = fila.find('#esp16').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id,nombre,edad,domicilio,repre,edad2,dom2,calidad,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10,esp11,esp12,esp13,esp14,esp15,esp16}

        }).done(function (respuesta) {
            window.location.href='/cartaO'
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
            window.location.href='/cartaO'
        })

    })

    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/carta/'+'/'+id,
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


    
