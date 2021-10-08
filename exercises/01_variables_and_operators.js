/********************************************************************************************
a- Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma
de ambos números en una 3er variable.********************************************************/

var edadMicaela= 32;
var edadAna=40;
var sumaEdades= edadMicaela + edadAna;

console.log('Exercise 1.a:',sumaEdades);

/***********************************************************************************************
b- Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
************************************************************************************************/
var firstName = 'Micaela';
var lastName = 'Casais';
var fullName= firstName.concat(" ",lastName);

console.log('Exercise 1.b:',fullName);


/**********************************************************************************************
c- Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del 
string)guardando el resultado de la suma en una 3er variable (utilizar length).****************
***********************************************************************************************/
var product= 'laptop';
var brand= 'acer';
var lenghtSum= product.length + brand.length;

console.log('Exercise 1.c:',lenghtSum);