/******************************************************************************************
a- Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),si el valor es
mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta
con el mensaje “Lower than 0,5”.***********************************************************/
var xNumber = Math.random();
if (xNumber >= 0.5) {
    alert('Exercise 4.a: Greater than 0,5');
} else {
    alert('Exercise 4.a: Lower than 0,5');
}

/***********************************************************************************************
b- Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes
mensajes de alerta:*****************************************************************************

I)“Bebe” si la edad es menor a 2 años;
II)“Nino” si la edad es entre 2 y 12 años;
III)“Adolescente” entre 13 y 19 años;
IV)“Joven” entre 20 y 30 años;
V)“Adulto” entre 31 y 60 años;
VI)“Adulto mayor” entre 61 y 75 años;
VII)“Anciano” si es mayor a 75 años.*/

var age = Math.round((Math.random() * 100));

if (age < 2) {
    alert('Exercise 4.b: Bebé');
} else if(age >=2 && age <= 12){
    alert('Exercise 4.b: Nino');
} else if(age >=13 && age <= 19){
    alert('Exercise 4.b: Adolescente');
} else if(age >=20 && age <= 30){
    alert('Exercise 4.b: Joven');
} else if(age >=31 && age <= 60){
    alert('Exercise 4.b: Adulto');
}else if(age >=61 && age <= 75){
    alert('Exercise 4.b: Adulto mayor');
}else {
    alert('Exercise 4.b: Anciano');
}