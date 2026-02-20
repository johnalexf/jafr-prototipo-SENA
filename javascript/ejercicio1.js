var nombre = "John Alexander Forero Rubio"

var area;
var perimetro;

//datos para un triangulo
var lado1 = 3.5; //Esta es la base del triangulo.
var lado2 = 5.5;
var lado3 = 4.5;
var altura = 2.5;

console.log(nombre);
console.log("Datos del triangulo:");
console.log("Lado 1 o base = " + lado1);
console.log("Lado 2 =  " + lado2);
console.log("Lado 3 =  " + lado3);
console.log("Altura =  " + altura);
// calculando perimetro y area de un triangulo
perimetro = lado1 + lado2 + lado3;
area = (lado1 * altura) / 2;
console.log("El perimetro del triangulo es: " + perimetro);
console.log("El area del triangulo es: " + area);

console.log("   ");

//calculando area de un rectangulo
var largo = 4.5;
var ancho = 2.5;
perimetro = 2 * (largo + ancho);
area = largo * ancho;
console.log(nombre);
console.log("Datos del rectangulo");
console.log("Largo =  "  + largo);
console.log("Ancho =  "  + ancho);
console.log("El perimetro del rectangulo es: " + perimetro);
console.log("El area del rectangulo es: " + area);

console.log("   ");

//calculando area de un cuadrado
var lado = 3.5;
perimetro = 4 * lado;
area = lado * lado;
console.log(nombre);
console.log("Datos del cuadrado");
console.log("Lado =  "  + lado);
console.log("El perimetro del cuadrado es: " + perimetro);
console.log("El area del cuadrado es: " + area);

console.log("   ");

//calculando area de un circulo
var radio = 2.5;
perimetro = 2 * Math.PI * radio;
area = Math.PI * radio * radio;
console.log(nombre);
console.log("Datos del circulo");
console.log("Radio =  "  + radio);
console.log("El perimetro del circulo es: " + perimetro);
console.log("El area del circulo es: " + area);



// console.log("Programa para calcular el area y perimetro de algunas figuras geometricas");

// console.log("Seleccone el tipo de figura geometrica: ");
// console.log("1. Triangulo");
// console.log("2. Rectangulo");
// console.log("3. Cuadrado");
// console.log("4. Circulo");

// var opcion = prompt("Ingrese el numero de la figura geometrica: ");

// switch (opcion) {
//     case "1":
//         var base = parseFloat(prompt("Ingrese la base del triangulo y este sera el primer lado: "));
//         var lado2 = parseFloat(prompt("Ingrese el segundo lado del triangulo: "));
//         var lado3 = parseFloat(prompt("Ingrese el tercer lado del triangulo: "));
//         var altura = parseFloat(prompt("Ingrese la altura del triangulo: "));

//         perimetro = base + lado2 + lado3;
//         area = (base * altura) / 2;
//         break;

//     case "2":
//         var largo = parseFloat(prompt("Ingrese el largo del rectangulo: "));
//         var ancho = parseFloat(prompt("Ingrese el ancho del rectangulo: "));
//         var area = largo * ancho;
//         console.log("El área del rectangulo es: " + area);
//         break;  

//     case "3":
//         var lado = parseFloat(prompt("Ingrese el lado del cuadrado: "));
//         var area = Math.pow(lado, 2);
//         console.log("El área del cuadrado es: " + area);
//         break;

//     case "4":
//         var radio = parseFloat(prompt("Ingrese el radio del circulo: "));
//         var area = areaCirculo(radio);
//         console.log("El área del circulo es: " + area);
//         break;

//     default:
//         console.log("Opcion no valida");
//         break;
// }

