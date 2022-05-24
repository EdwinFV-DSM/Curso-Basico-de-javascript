/**
 * funcion declarativa y es una funcion dinamica
 * 
 */

suma2(28,98);

function suma2(a,b){
    return a+b;
}


/**
 * funcion declarativa y es una funcion estatica
 */

function suma(){
    var n1=4;
    var n2=2;
    return n1 - n2;
}


// suma2()=>{
//     var num = 2;
//     return num;
// }

var miNombre = "Edwin";

function nombre(){
    miNombre = "Alonso";
    return miNombre;
}

nombre();