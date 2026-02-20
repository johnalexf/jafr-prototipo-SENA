var nombre = "John Alexander Forero Rubio"

var edades = [];
var datoNoValido = true;

alert("Programa para almacenar y analizar edades de 10 personas");

for(var i = 0 ; i < 10 ; i++ ){
    var leerDato;
    datoNoValido = true;
    while(datoNoValido){
        leerDato = prompt("Ingrese la edad de la persona " + (i + 1));
        var datoANumero = parseInt(leerDato);
        if(datoANumero>=1 && datoANumero<=120){
            alert("el dato " + datoANumero + " años es adecuado y ha sido almacenado, por favor continue ");
            datoNoValido = false;
            edades[i]=datoANumero;
        }else{
            alert("el dato (" + leerDato + ") no es valido, porfavor escriba una edad entre 1 a 120 años");
        }
    }
}

alert("Las edades ingresadas son: \n " + edades);


var edadMayor;
var edadMenor;
var cantidadAdultoMayor = 0;
var cantidadMayoresDeEdad = 0;
var cantidadMenoresDeEdad = 0;
var sumaEdades = 0;
var promedio;

for(var i=0 ; i< 10; i++){
    sumaEdades += edades[i];

    if(edades[i] < 18){
        cantidadMenoresDeEdad += 1;
    }else if(edades[i]< 60){
        cantidadMayoresDeEdad += 1;
    }else{
        cantidadAdultoMayor += 1;
    }

    if( i == 0){
        edadMenor = edades[0];
        edadMayor = edades[0];
    }else{
        if(edades[i] < edadMenor){
            edadMenor = edades[i];
        }

        if(edades[i] > edadMayor){
            edadMayor = edades[i];
        }
    }

}

promedio = sumaEdades/10;



alert(`
     De las edades ingresadas:  ${edades}
     ${cantidadMenoresDeEdad} son menores de edad
     ${cantidadMayoresDeEdad} son mayores de edad
     ${cantidadAdultoMayor} son Adulto mayor
    La persona mas joven tiene : ${edadMenor} años
    La persona mas vieja tiene : ${edadMayor} años
    El promedio de las edades es : ${promedio}
    `);