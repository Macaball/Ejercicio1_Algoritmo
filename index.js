/*/ Pedir al usuario que ingrese dos números
var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Verificar si se ingresaron números válidos
if (!isNaN(numero1) && !isNaN(numero2)) {
  // Realizar la suma
  var suma = numero1 + numero2;

  // Mostrar el resultado
  console.log(
    "La suma de " + numero1 + " y " + numero2 + " es igual a: " + suma
  );
} else {
  // En caso de que los números ingresados no sean válidos
  console.log("Por favor, ingresa números válidos.");
}*/

console.log("Algoritmo para sumar dos numeros");
console.log("Paso a paso:");
console.log("1.Obtener el primer numero a sumar");
var numero1 = parseFloat(prompt("Ingresa el primer número:"));

console.log("2.Obtener el segundo numero a sumar");
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
console.log("3.Adicionar la cantidad del segundo numero al primer numero");
var suma = numero1 + numero2;
console.log("4.Almacenar el resultado");
console.log("5.Mostrar el resultado");
console.log("el resultado de la suma es:" + suma);
