$(function () {
    /*Post*/ 
    const URL = '/ajustes'
    $('#insertar').on('click',function(){
        let username = $('#username').val();
        let password = $('#password').val();

        $.ajax({
            url: URL,
            method: 'POST',
            data: { username,password}
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/ajustes'
        })

    })
    
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var username= fila.find('#username').val();
        var password = fila.find('#password').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, username,password }

        }).done(function (respuesta) {
            window.location.href='/ajustes'
            console.log('Dato actualizado')
        })
    })

 
})

    
