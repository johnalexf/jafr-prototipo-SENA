// Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y
// luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los
// números 1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4
// 6 9 10 17 17. Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se
// estén ingresando los datos de forma ascendente.

var vector1 = [];
var vector2 = [];
var datoNoValido = true;

alert("Programa para recibir dos vectores cada uno de 5 numeros, unirlos y ordenarlos");

alert("Acontinuacion va digitar el primer vector de numeros enteros");
for(var i=0; i<5; i++){
    datoNoValido = true;
    while(datoNoValido){
        var leerDato = prompt("Digite el " + (i+1) + " numero del vector \n " + "El vector va asi : " + vector1);
        var datoANumero = parseInt(leerDato);
        console.log(datoANumero);
        if(datoANumero != NaN){
            if(i==0){
                vector1[i] = datoANumero; 
                datoNoValido = false;
            }else{
                if(vector1[i-1] < datoANumero){
                    vector1[i] = datoANumero; 
                     datoNoValido = false;
                }else{
                    alert("El numero ingresado no es mayor al anterior, por favor ingrese un numero mayor a " + vector1[i-1]);
                }
            }
            
        }
    }
}

alert("El primer vector quedo asi = " + vector1);

alert("Acontinuacion va digitar el segundo vector de numeros enteros");
for(var i=0; i<5; i++){
    datoNoValido = true;
    while(datoNoValido){
        var leerDato = prompt("Digite el " + (i+1) + " numero del vector \n " + "El vector va asi : " + vector2);
        var datoANumero = parseInt(leerDato);
        console.log(datoANumero);
        if(datoANumero != NaN){
            if(i==0){
                vector2[i] = datoANumero; 
                datoNoValido = false;
            }else{
                if(vector2[i-1] < datoANumero){
                    vector2[i] = datoANumero; 
                     datoNoValido = false;
                }else{
                    alert("El numero ingresado no es mayor al anterior, por favor ingrese un numero mayor a " + vector2[i-1]);
                }
            }
            
        }
    }
}

alert("El segundo vector quedo asi = " + vector2);

var vectoresUnidos = vector1.concat(vector2);
var vectorOrdenado =[];

var posicionesYaGuardadas = [0,0];

var numeroMenor = vectoresUnidos[0];
var numeroMayor = vectoresUnidos[0];
for(var i=1; i<10 ; i++){
    if(vectoresUnidos[i]< numeroMenor){
        numeroMenor = vectoresUnidos[i];
        posicionesYaGuardadas[0] = i;
    }
    if(vectoresUnidos[i] > numeroMayor){
        numeroMayor = vectoresUnidos[i];
        posicionesYaGuardadas[1] = i;
    }
}
vectorOrdenado[0] = numeroMenor;

// este primer for con la variable i es para guardar en el vectorOrdenado
for(var i=1 ; i< 9 ; i++){
    //este segundo for es para buscar el siguiente numero menor o igual que el anterior sin contar el ya almacenado
    numeroMenor = numeroMayor;
    for(var j=0; j<10 ; j++){
        if(!posicionesYaGuardadas.includes(j)){
            if(vectoresUnidos[j]<= numeroMenor){
                numeroMenor = vectoresUnidos[j];
                posicionesYaGuardadas[i+1] = j;
            }
        }
    }
    vectorOrdenado[i] = numeroMenor;
}
 vectorOrdenado[9] = numeroMayor;

alert(`
    Los dos vectores unidos nos da : ${vectoresUnidos}
    Los numeros ordenados del anterior vectore nos da : ${vectorOrdenado}
    `);
