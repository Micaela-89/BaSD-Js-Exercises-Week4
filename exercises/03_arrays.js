/******************************************************************************************
a- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5
y 11 (utilizar console.log).****************************************************************/

var monthsArray= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Exercise 3.a:',monthsArray[4],monthsArray[10]);

var newArray = Object.assign([], monthsArray);

/***********************************************************************************
b- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
************************************************************************************/
var arraySorted= monthsArray.sort();

console.log('Exercise 3.b:',arraySorted);

/*********************************************************************************
c- Agregar un elemento al principio y al final del array (utilizar unshift y push).
**********************************************************************************/
monthsArray.unshift('Months:');
monthsArray.push('2021');
console.log('Exercise 3.c:', monthsArray);

/*******************************************************************************
d- Quitar un elemento del principio y del final del array (utilizar shift y pop).
********************************************************************************/
monthsArray.shift();
monthsArray.pop();

console.log('Exercise 3.d:', monthsArray);

/*************************************************
e- Invertir el orden del array (utilizar reverse).
************************************************/
monthsArray.reverse();

console.log('Exercise 3.e:', monthsArray);
/****************************************************************************************
f- Unir todos los elementos del array en un único string donde cada mes este separado por
un guión - (utilizar join).**************************************************************/
var monthsString= monthsArray.join(" - ");
console.log('Exercise 3.f:', monthsString);

/*********************************************************************************************
g- Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
**********************************************************************************************/

var arraySliced= newArray.slice(4,11);

console.log('Exercise 3.g:', arraySliced);