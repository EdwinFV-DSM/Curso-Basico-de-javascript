var articulos = [
    { nombre: 'Caguamas', costo: 150 },
    { nombre: 'Refresco', costo: 35 },
    { nombre: 'Tequila', costo: 320 },
    { nombre: 'Wisky', costo: 1000 },
    { nombre: 'Rancho Escondido', costo: 2000 },
    { nombre: 'Limon', costo: 500 },
    { nombre: 'Chamoy', costo: 1700 }
    ]
    
    // Metodos para recorrer arrays
    
    
    //Metodo Filter
    /* Válida si es un true o false para poder meterlos al nuevo array,
    //y éste método no modifica el array original */
    
    var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500 /* Menor o igual a 100 */
    });
    
    console.log(articulosFiltrados);
    
    //Metodo Map
    
    var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
    });
    
    console.log(nombreArticulos);
    
    // Metodo Find
    /* De igual forma,
    //con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */
    
    var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'Wisky';
    });
    
    console.log(encuentraArticulos);
    
    // Metodo forEach
    
    articulos.forEach(function(articulo){
    console.log(articulo.nombre);
    });
    
    // Metodo Some
    /* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */
    
    var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
    });
    
    console.log(articulosBaratos);
    
    // Metodo Every
    
    /* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */
    
    var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
    });
    
    console.log(articulosBaratos);
    
    // Metodo Reduce
    /* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */
    
    var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual ;
    }, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual
    
    console.log(costoTotal);
    
    // Metodo Includes
    
    var numeros = [1, 2, 3, 4, 5, 6];
    
    var incluyeNumero = numeros.includes(2);
    
    console.log(incluyeNumero);
    //requiero 2 ejemplos de cada uno de los métodos aqui citados