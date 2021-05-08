const { axios } = require("axios");



document.addEventListener('DOMContentLoaded', function () {


    //cuando capturemos los datos del modal
    let formulario = document.querySelector("form");

    var calendarEl = document.getElementById('agenda');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: "es",

        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
        },

        //cuando presionemos un día en el calendario
        dateClick: function (info) {
            $("#evento").modal("show")
        }
    });
    calendar.render();

    //Capturamos la acción del boton
    //si detecta un click creamos una funcion para recuperar la info
    document.getElementById("btnGuardar").addEventListener("click", function () {
        const datos = new FormData(formulario);
        console.log(datos);
        console.log(formulario.title.value)
        //enviando los datos
        axios.post("http://localhost/agenda/public/evento/agregar", datos)
            .then(
                (respuesta) => {
                    $("#evento").modal("hiden");
                }
            )
    });
});