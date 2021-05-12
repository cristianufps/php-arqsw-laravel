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

        //cuando presionemos un día en el calendario
        //info es el día que presione
        dateClick: function (info) {
            $("#evento").modal("show");
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

            //enviando los datos
            axios
                .post(
                    "http://localhost/php-arqsw-laravel/public/evento/agregar",
                    datos
                )
                .then((res) => {
                    console.log("response" + res);
                    $("#evento").modal("hide");
                })
                .catch((err) => {
                    if (err.resp) {
                        console.log("Error" + err.resp);
                    }
                });
            // axios.post("http://localhost/php-arqsw-laravel/public/evento/agregar", body)
            //     .then(
            //         (respuesta) => {
            //             $("#evento").modal("hiden");
            //         }
            //     ).catch(err => {
            //         if (err.response) {
            //             console.log("Error:" + err.response);
            //         }
            //     })
        });
});
