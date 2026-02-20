
var menu = {
    opcion: [1 , 2, 3],
    detalles: [
                "Agregar Persona",
                "Ver lista de persona",
                "Salir"
            ]
}

var persona = {
    nombre: "",
    cedula: "",
    fechaNacimiento: "",
    correo: "",
    ciudadResidencia: "",
    ciudadOrigen: "",
    artistaFavorito: "",
    cancionesFavoritas: []
} 

var personasEntrevistadas = [];



alert("Programa para diligenciar encuesta");

var salir = false;
var opcion;

while(!salir){
    opcion = prompt(`
            Menu:
            Digite la opcion que desea realizar:
            ${menu.opcion[0]} : ${menu.detalles[0]}
            ${menu.opcion[1]} : ${menu.detalles[1]}
            ${menu.opcion[2]} : ${menu.detalles[2]}
            `);

    switch(opcion){
        case "1":

            persona = {
                nombre: "",
                cedula: "",
                fechaNacimiento: "",
                correo: "",
                ciudadResidencia: "",
                ciudadOrigen: "",
                artistaFavorito: "",
                cancionesFavoritas: []
            } 

            persona.nombre = prompt("Escriba el nombre de la persona");
            persona.cedula = prompt("Escriba la cedula de la persona");
            persona.fechaNacimiento = prompt("Escriba la fecha de nacimiento de la persona");
            persona.correo = prompt("Escriba el correo de la persona");
            persona.ciudadResidencia = prompt("Escriba la ciudad donde vive la persona");
            persona.ciudadOrigen = prompt("Escriba la ciudad de origen de la persona");
            persona.artistaFavorito = prompt("Escriba el nombre del artista favorito de la persona");

            for(var i=0; i<3 ; i++){
                persona.cancionesFavoritas.push( prompt("Escriba la " + (i+1) + " cancion favorita"));
            }

            personasEntrevistadas.push(persona);

            alert(`
                La persona registrada tiene la siguiente informacion:
                Nombre : ${personasEntrevistadas[personasEntrevistadas.length-1].nombre}
                Cedula : ${personasEntrevistadas[personasEntrevistadas.length-1].cedula}
                Fecha de nacimiento : ${personasEntrevistadas[personasEntrevistadas.length-1].fechaNacimiento}
                Correo : ${personasEntrevistadas[personasEntrevistadas.length-1].correo}
                Ciudad de residencia : ${personasEntrevistadas[personasEntrevistadas.length-1].ciudadResidencia}
                Ciudad de origen : ${personasEntrevistadas[personasEntrevistadas.length-1].ciudadOrigen}
                Artista Favorito : ${personasEntrevistadas[personasEntrevistadas.length-1].artistaFavorito}
                Canciones favoritas : ${personasEntrevistadas[personasEntrevistadas.length-1].cancionesFavoritas}
                `);


            break;

        case "2":
            var resumenListaPersonas = "";
            for(var i = 0 ; i < personasEntrevistadas.length ; i++){
                resumenListaPersonas += `\n 0 .  ${personasEntrevistadas[i].nombre}`
            }
            var opcionVerPersona = prompt(`
                Seleccione de la siguiente lista la persona que desea ver su informacion registrada:
                ${resumenListaPersonas};
                `);
            
                alert(`
                    La persona ${opcionVerPersona} registrada tiene la siguiente informacion:
                    Nombre : ${personasEntrevistadas[opcionVerPersona].nombre}
                    Cedula : ${personasEntrevistadas[opcionVerPersona].cedula}
                    Fecha de nacimiento : ${personasEntrevistadas[opcionVerPersona].fechaNacimiento}
                    Correo : ${personasEntrevistadas[opcionVerPersona].correo}
                    Ciudad de residencia : ${personasEntrevistadas[opcionVerPersona].ciudadResidencia}
                    Ciudad de origen : ${personasEntrevistadas[opcionVerPersona].ciudadOrigen}
                    Artista Favorito : ${personasEntrevistadas[opcionVerPersona].artistaFavorito}
                    Canciones favoritas : ${personasEntrevistadas[opcionVerPersona].cancionesFavoritas}
                `);

            break;

        case "3":
            salir = true;
            break;

        default:
            alert("el valor (" + opcion + ") no es valido, por favor seleccione una de las opciones que estan en la lista.")
            
    }

}
   