// const { default: axios } = require("axios");

document.addEventListener("DOMContentLoaded", function () {
    //cuando capturemos los datos del modal
    let formulario = document.querySelector("form");

    var calendarEl = document.getElementById("agenda");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        locale: "es",

        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek",
        },

        //Mostrar los eventos en el calendario
        events: "http://localhost/php-arqsw-laravel/public/evento/mostrar",

        //cuando presionemos un día en el calendario
        //info es el día que presione
        dateClick: function (info) {
            formulario.reset();
            formulario.start.value = info.dateStr;
            formulario.end.value = info.dateStr;
            $("#evento").modal("show");
        },
        eventClick: function (info) {
            var evento = info.event;
            console.log(evento);

            //enviando los datos por post de edicion de evento o cita
            axios
                .post(
                    "http://localhost/php-arqsw-laravel/public/evento/editar/" +
                        info.event.id
                )
                .then((res) => {
                    formulario.id.value = res.data.id;
                    formulario.title.value = res.data.title;
                    formulario.descripcion.value = res.data.descripcion;
                    formulario.start.value = res.data.start;
                    formulario.end.value = res.data.end;
                    // console.log("response" + res);
                    $("#evento").modal("show");
                })
                .catch((err) => {
                    if (err.resp) {
                        console.log("Error" + err.resp);
                    }
                });
        },
    });
    calendar.render();

    //Capturamos la acción del boton
    //si detecta un click creamos una funcion para recuperar la info
    document
        .getElementById("btnGuardar")
        .addEventListener("click", function () {
            const datos = new FormData(formulario);
            console.log(formulario.id.value);
            console.log(formulario.start.value);
            let body = {
                title: formulario.title.value,
                descripcion: formulario.descripcion.value,
                start: formulario.start.value,
                end: formulario.end.value,
            };
            console.log(body);

            //enviando los datos por post de agregacion de evento o cita
            axios
                .post(
                    "http://localhost/php-arqsw-laravel/public/evento/agregar",
                    datos
                )
                .then((res) => {
                    calendar.refetchEvents();
                    // console.log("response" + res);
                    $("#evento").modal("hide");
                })
                .catch((err) => {
                    if (err.resp) {
                        console.log("Error" + err.resp);
                    }
                });
        });
});
