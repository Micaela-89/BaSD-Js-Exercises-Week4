/********************************************************************************************
a- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
mayúscula (utilizar toUpperCase).***********************************************************/

var nationality= 'argentinian';
var nationalityUc= nationality.toUpperCase()

console.log('Exercise 2.a:', nationalityUc)

/********************************************************************************************
b- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).**/

var nationality= 'argentinian';
var first5Letters= nationality.substring(0,5); 

console.log('Exercise 2.b:',first5Letters);

/********************************************************************************************
c- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).**/

var nationality= 'argentinian';
var last3Letters= nationality.substring(8,11); 

console.log('Exercise 2.c:',last3Letters);

/********************************************************************************************
d- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva 
variable (utilizar substring, toUpperCase, toLowerCase y el operador +).**********************/

var nationality= 'argentinian';
var natUp= nationality.toUpperCase(); 
var firstLetter= natUp.substring(0,1); 
var restWord= natUp.substring(1,11); 
var restWordLow= restWord.toLowerCase(); 
var newString= firstLetter + restWordLow;

console.log('Exercise 2.d:',newString);

/********************************************************************************************
e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var longString= 'Micaela Casais';
var spaceLongString= longString.indexOf(" "); 

console.log('Exercise 2.e:',spaceLongString);

/********************************************************************************************
f- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo
string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).***********************/

var longWords= 'argentinian territory';
var allUpperCase= longWords.toUpperCase(); 
var firstLetter= allUpperCase.substring(0,1); 
var space= allUpperCase.substring(allUpperCase.indexOf(" "),12); 
var restword1= allUpperCase.substring(1,11).toLowerCase(); 
var firstLetter2= allUpperCase.substring(12,13); 
var restword2= allUpperCase.substring(13,21).toLowerCase(); 

var result= firstLetter + restword1 + space + firstLetter2 + restword2;

console.log('Exercise 2.f:', result);
