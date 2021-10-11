/***********************************************************************************************
a- Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la 
función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola
del navegador.************************************************************************************/
function sumFunction(num1, num2) {
    return num1 + num2;  
}
var resultSumFunction= sumFunction(10,40);
console.log('Exercise 6.a: ', resultSumFunction);

/***********************************************************************************************
b- A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el
valor NaN como resultado.************************************************************************/
function sumFunction(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert('Exercise 6.b: At least one of the parameters is not a number');
        return NaN;
    } else {
        return num1 + num2; 
    } 
}
var validateNumbers = sumFunction(10, '40');
console.log('Exercise 6.b:', validateNumbers);

/***********************************************************************************************
c- Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si
es un número entero.*****************************************************************************/
function validateInteger(num){
    return (Number.isInteger(num));
}
var validateIntegerResult = validateInteger(10);
console.log('Exercise 6.c:', validateIntegerResult);

/***********************************************************************************************
d- A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean 
enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido
a entero (redondeado).**************************************************************************/
function addFunction(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('Exercise 6.d: At least one of the parameters is not a number');
        return NaN;
    } else if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return num1 + num2; 
    } else {
        alert('Exercise 6.d: At least one of the parameters is not an integer number');
        return Math.round(num1 + num2);
    }
}
var addFunctionResult = addFunction(10, 10.55);
console.log('Exercise 6.d:', addFunctionResult);

/*******************************************************************************************
e- Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la 
función suma probando que todo siga funcionando igual.**************************************/
function isNanFunction(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('Exercise 6.e: At least one of the parameters is not a number');
        return false;
    } else {
        return true;
    }
}
function sumFunctionNew(param1,param2){
    if (!isNanFunction(param1,param2)) {
        return ('At least one of the parameters is not a number');
    } else {
        return param1 + param2;
    }
}
var lastFunction= sumFunctionNew('word', 40);
console.log('Exercise 6.e:', lastFunction);