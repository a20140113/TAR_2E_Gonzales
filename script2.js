//creamos una funcion para saber si es par
function esPar(numero) {
    return numero % 2 === 0;
  }
//esta va a ser nuestra funcion principal
  function ingresarNumpar() {
    let numingresado;
  
    do {
        //input
      numingresado = prompt("Ingrese un número par:");
  
      numingresado = parseInt(numingresado);
  
      if (esPar(numingresado)) {
        alert(numingresado + " sí es un número par");
      } else {
        alert("No es par, intenta de nuevo.");
      }
  
    } while (!esPar(numingresado));     
  }
  
  ingresarNumpar();
  