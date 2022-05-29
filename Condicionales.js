function cuevita(fechaNac) {
    var edad = fechaNac;
    let partes = edad.split("-");
    var restaedad = 2022 - partes[2];
    // console.log(restaedad);
    if (restaedad < 18) {
      msg = "No puedes acceder a la cuevita";
    } else {
      msg = "Puedes entrar a la cuevita";
    }
    // console.log(partes[0]); 
    // console.log(partes[1]); 
    // console.log(partes[2]); 
    return msg;
  }
  
  cuevita("30-03-2018");


  /**Ejemplo 2 */
  function cuevita(fechaNac) {
    var edad = fechaNac;
    let partes = edad.split("-");
    var restaedad = 2022 - partes[2];
    console.log(restaedad);
    if (restaedad < 18) {
      console.log("No puedes acceder a la cuevita");
    } else {
      console.log("Puedes entrar a la cuevita");
    }
    console.log(partes[0]); 
    console.log(partes[1]); 
    console.log(partes[2]); 
  
  }
  
  cuevita("30-03-2002");