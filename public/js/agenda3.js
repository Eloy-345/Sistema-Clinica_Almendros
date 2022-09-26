// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')

$(function () {
    /*Post*/ 
    const URL = '/agendaO'
    $('#insertar').on('click',function(){
        let nombre = $('#nombre').val();
        let fecha = $('#fecha').val();
        let precio = $('#precio').val();
        let hora = $('#hora').val();
        let fecha1 = $('#fecha1').val();
        let hora2 = $('#hora2').val();
        let medico = $('#medico').val();
        let color = $('#color').val();
        let paciente = $('#paciente').val();
        $.ajax({
            url: URL,
            method: 'POST',
            data: { nombre, fecha, precio, hora, fecha1, hora2, medico, color, paciente }
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/agendaO'
        })

    })
    
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var ide= fila.find('#ide').val();
        var nombre = fila.find('#nombre').val();
        var email = fila.find('#email').val();
        var telefono = fila.find('#telefono').val();
        var fecha = fila.find('#fecha').val();
        var hora = fila.find('#hora').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, ide, nombre, email, telefono, fecha, hora }

        }).done(function (respuesta) {
            window.location.href='/agendaO'
            console.log('Dato actualizado')
        })
    })

    $('table').on('click', '#delete', function () {
        var fila = $(this).closest('tr');
        var id = fila.find('#clave').val();
        $.ajax({
            url: '/agendaO',
            method: 'delete',
            data: {id},
        }).done(function(respuesta){
            window.location.href='/agendaO'
        })


    })
    
    $('table').on('click','#detalle', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#clave').val()
        $.ajax({
            url:'/agendaO/'+'/'+id,
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


    
