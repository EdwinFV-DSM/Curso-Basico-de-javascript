function tablaMultiplicacion(num){
    var numero = num;
    var fin = 10;
    for (let index = 0; index <= fin; index++) {
         var multiplicacion = index * num;
        console.log(index + " x " + num +" = " + multiplicacion);
    }
  }
  
   tablaMultiplicacion(2);
  
  var nombre = ["Edwin","alexis","Jesus","Joana <3","Alin","Kevin"];
  nombres(nombre);
  function nombres(nombres) {
  
    var contNombre = nombres;
  
    for (let index = 0; index < contNombre.length; index++) {
      console.log(contNombre[index]);
    }
    
  }
  
  
  for (let index = 0; index <= 50; index++) {
    console.log(index)
  }
  
  for (let index = 0; index < 10; index++) {
    var div = index / 10;
    console.log(div);
    
  }