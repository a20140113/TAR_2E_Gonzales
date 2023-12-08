let cantidad = prompt("Ingrese la cantidad de elementos para el array:");

cantdeelementos = parseInt(cantidad);

//verificamos si es cantidad valida y mayor a cero
if (!isNaN(cantidad) && cantidad > 0) {
  const miArray = [];

  for (let i = 0; i < cantidad; i++) {
    let elemento = prompt("Ingrese el elemento #" + (i + 1) + ":");
    miArray.push(elemento);
  }

  console.log("Elementos:");
  for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
  }

} else {
  console.log("La cantidad ingresada no es válida.");
}
