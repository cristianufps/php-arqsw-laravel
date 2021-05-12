document.addEventListener("DOMContentLoaded", function () {
    //cuando capturemos los datos del modal
    let formulario = document.querySelector("#formularioEventos");

    var calendarEl = document.getElementById("agenda");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        locale: "es",
        displayEventTime: false,
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth",
            // Para ver por semana y la agenda completa ,timeGridWeek,listWeek",
        },

        //Mostrar los eventos en el calendario (Deshabilitado por la autenticacion)
        // events: "http://localhost/php-arqsw-laravel/public/evento/mostrar",

        eventSources: {
            url: baseURL + "/evento/mostrar",
            method: "POST",
            extraParams: {
                _token: formulario._token.value,
            },
        },

        //cuando presionemos un día en el calendario
        //info es el día que presione
        dateClick: function (info) {
            formulario.reset();
            formulario.start.value = info.dateStr;
            formulario.end.value = info.dateStr;
            $("#evento").modal("show");
        },
        eventClick: function (info) {
            // var evento = info.event;
            // console.log(evento);

            //enviando los datos por post de edicion de evento o cita
            axios
                .post(baseURL + "/evento/editar/" + info.event.id)
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

    //Acción del boton GUARDAR
    //si detecta un click creamos una funcion para recuperar la info
    document
        .getElementById("btnGuardar")
        .addEventListener("click", function () {
            //enviando los datos por post de agregacion de evento o cita
            enviarDatos("/evento/agregar");
        });

    //Accion del boton ELIMINAR
    document
        .getElementById("btnEliminar")
        .addEventListener("click", function () {
            //enviando los datos por post de eliminacion de evento o cita
            enviarDatos("/evento/eliminar/" + formulario.id.value);
        });

    //Accion del boton MODIFICAR
    document
        .getElementById("btnModificar")
        .addEventListener("click", function () {
            //enviando los datos por post de eliminacion de evento o cita
            enviarDatos("/evento/actualizar/" + formulario.id.value);
        });

    function enviarDatos(url) {
        const datos = new FormData(formulario);

        const nuevaURL = baseURL + url;

        //enviando los datos por post de eliminacion de evento o cita
        axios
            .post(nuevaURL, datos)
            .then((res) => {
                calendar.refetchEvents();
                $("#evento").modal("hide");
            })
            .catch((err) => {
                if (err.resp) {
                    console.log("Error" + err.resp.data);
                }
            });
    }
});
