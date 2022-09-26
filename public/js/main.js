$(document).ready(function () {
    var tabla = $("#example").DataTable({
        "createdRow": function (row, data, index) {
            //pintar una celda
            if (data[5] == 200) {
                $('td', row).eq(5).css({
                    'background-color': '#ff5252',
                    'color': 'white',
                });

                //pintar una fila
                $('td', col).css({
                    'background-color': '#ff5252',
                    'color': 'white',
                    'border-style': 'solid',
                    'border-color': '#bdbdbd'
                });
            }
        },
        "drawCallback": function () {
            //alert("La tabla se está recargando"); 
            var api = this.api();
            $(api.column(4).header()).html(
                'Total: $ ' + api.column(4, { page: 'current' }).data().sum()
            )
        },

        language: {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        },
        //para usar los botones   
        responsive: "true",
        dom: 'Bfrtilp',
        buttons: [
            {
                extend: 'excelHtml5',
                text: '<i class="fas fa-file-excel"></i> ',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-success'
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fas fa-file-pdf"></i> ',
                titleAttr: 'Exportar a PDF',
                className: 'btn btn-danger'
            },
            {
                extend: 'print',
                text: '<i class="fa fa-print"></i> ',
                titleAttr: 'Imprimir',
                className: 'btn btn-primary'
            },
        ]
    });

    //1era forma para sum()
    var tot = tabla.column(5).data().sum();
    $("#total").text(tot);
});