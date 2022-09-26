$(function () {
    /*Post*/ 
    const URL = '/autos'
    $('#insertar').on('click',function(){
        let marca = $('#marca').val();
        let modelo = $('#modelo').val();
        let precio = $('#precio').val();
        let combustible = $('#combustible').val();

        $.ajax({
            url: URL,
            method: 'POST',
            data: { marca, modelo,precio, combustible }
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/autos'
        })

    })
    
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var marca = fila.find('#marca').val();
        var modelo = fila.find('#modelo').val();
        var precio = fila.find('#precio').val();
        var combustible = fila.find('#combustible').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, marca, modelo,precio, combustible }

        }).done(function (respuesta) {
            window.location.href='/autos'
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
            window.location.href='/autos'
        })

    })

    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/autos/'+'/'+id,
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


    
