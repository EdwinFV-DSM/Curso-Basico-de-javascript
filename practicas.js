var calcularResta=(num1,num2)=>{
    var resta = num1-num2;
    return resta;
}
console.log(calcularResta(10,51));


//Este es un ejemplo de scope global

var nombre = "Diego";

function Nombre() {
    nombre = "Alonso";
}

Nombre();

