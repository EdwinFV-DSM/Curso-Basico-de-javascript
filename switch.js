function edad(edad) {
    var validacion = edad;
    switch (validacion) {
        case 18:
            var msg = "Tienes: " + validacion + " años.";
            break;
        case 19:
            var msg = "Tienes: " + validacion + " años.";
            break;
        case 20:
            var msg = "Tienes: " + validacion + " años.";
            break;
        default:
            var msg = "No undefined";
            break;
    }
    return msg;
}

edad(29);

function calificacion(promedio) {
    var calif = promedio;
    switch (calif) {
        case 7:
        var msg="Tu calificacion es: "+ calif + ", por lo tanto estas reprobado";
            break;

        case 8:
            var msg="Tu calificacion es: "+ calif + ", estas aprobado con la calificacion minima";
            break;
        case 9:
            var msg="Tu calificacion es: "+ calif + ", has aprobado hecha le mas ganas";
            break;
        case 10:
            var msg="Tu calificacion es: "+ calif + ", has aprobado sigue asi";

            break;
        default:
            var msg="Tu calificacion es: "+ calif + ", recuerda que la minima para pasar es 8";

            break;
    }
    return msg;
}