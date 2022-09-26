// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')

$(function () {
    /*Post*/ 
    const URL = '/registro'
    $('#insertar').on('click',function(){
        let fechaI = $('#fechaI').val();
        let horaI = $('#horaI').val();
        let fechaF = $('#FechaF').val();
        let horaF = $('#horaF').val();
        let titulo = $('#titulo').val();
        let paciente = $('#paciente').val();
        let medico = $('#medico').val();
        let costo = $('#costo').val();
        let color = $('#color').val();
        $.ajax({
            url: URL,
            method: 'POST',
            data: {fechaI,horaI,fechaF,horaF,titulo,paciente,medico,costo,color}
        }).done(function(){
            $('#cerrar').click()
            window.location.href='/registro'
        })

    })
    
    $('table').on('click', '#update', function () {
        let fila = $(this).closest('tr');
        var id = fila.find("#clave").val();
        var fechaI = fila.find('#fechaI').val();
        var horaI = fila.find('#horaI').val();
        var fechaF = fila.find('#fechaF').val();
        var horaF = fila.find('#horaF').val();
        var titulo = fila.find('#titulo').val();
        var paciente = fila.find('#paciente').val();
        var medico= fila.find('#medico').val();
        var costo = fila.find('#costo').val();
        var color = fila.find('#color').val();
        $.ajax({
            url: URL,
            method: 'PUT',
            data: { id, fechaI,horaI,fechaF,horaF,titulo,paciente,medico,costo,color }

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


    
