$(function () {
    /*Post*/ 
    const URL = '/operacion'
    $('#insertar').on('click',function(){
        //nombre,edad,peso,talla,cama,expediente,fecha,fisico,asa,rr,rcv,rte,riesgo,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10
        let nombre = $('#nombre').val();
        let edad = $('#edad').val();
        let peso = $('#peso').val();
        let talla = $('#talla').val();
        let cama = $('#cama').val();
        let expediente = $('#expediente').val();
        let fecha = $('#fecha').val();
        let fisico = $('#fisico').val();
        let asa = $('#asa').val();
        let rr = $('#rr').val();
        let rcv = $('#rcv').val();
        let rte = $('#rte').val();
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
        $.ajax({
            url: URL,
            method: 'POST',
            data: { nombre,edad,peso,talla,cama,expediente,fecha,fisico,asa,rr,rcv,rte,riesgo,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10}
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/operacion'
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
            window.location.href='/operacion'
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
            window.location.href='/operacion'
        })

    })

    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/operacion/'+'/'+id,
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


    
