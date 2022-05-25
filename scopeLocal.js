function ScopeLocal(){
    var miApellido = "Flores";
    return miApellido;
}

ScopeLocal();

console.log(`${miApellido}`);

//Scope Global


var nombreCompleto = "Flores Vargas Edwin";

function ScopeGlobal() {
    console.log(`Hola ${nombreCompleto}, un gusto tenerte de vuelta`);
}

ScopeGlobal();