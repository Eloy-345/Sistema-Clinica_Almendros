// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')

$(function () {
    /*Post*/ 
    const URL = '/registro'
    $('#insertar').on('click',function(){
        let fecha_i = $('#ide').val();
        let hora_i = $('#nombre').val();
        let fecha_f = $('#email').val();
        let hora_f = $('#telefono').val();
        let titulo = $('#fecha').val();
        let descripcion = $('#hora').val();

        $.ajax({
            url: URL,
            method: 'POST',
            data: { fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion}
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/registro'
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
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion }

        }).done(function (respuesta) {
            window.location.href='/registro'
            console.log('Dato actualizado')
        })
    })

    $('table').on('click', '#delete', function () {
        var fila = $(this).closest('tr');
        var id = fila.find('#clave').val();
        $.ajax({
            url: '/registro',
            method: 'delete',
            data: {id},
        }).done(function(respuesta){
            window.location.href='/registro'
        })


    })
    
    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/agenda/'+'/'+id,
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
                            <td>Fecha</td>
                            <td>Hora</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${agenda.id}</td>
                            <td>${agenda.ide}</td>
                            <td>${agenda.nombre}</td>
                            <td>${agenda.email}</td>
                            <td>${agenda.telefono}</td>
                            <td>${agenda.fecha}</td>
                            <td>${agenda.hora}</td>
                        </tr>
                    </tbody>
                </table>
            `)
        })

    })
    
})


    
