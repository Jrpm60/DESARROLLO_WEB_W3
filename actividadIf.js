//Actividades de IF condicion


// Si la contraseña es correcta, muestra "Acceso permitido", si no, "Contraseña incorrecta".
// Simulando input
let passwordGuardado = "secreto123";
let passwordIngresado = "secreto12"; 

if (passwordIngresado===passwordGuardado) {
    console.log("Acceso permitido");
} else {
    console.log("Contraseña Incorrecta");
}

// Indicar si un numero es par o impar
let numero = 7;

if (numero % 2 == 0) {
    console.log( `${numero}`, "es Par");
} else {
    console.log(`${numero}`,"es Impar");
}




// Si la hora está entre las 9:00 y las 18:00, la tienda está abierta.
let horaActual = 11; // Simulación de la hora en formato 24h

if (horaActual>=9 && horaActual<18.1) {
    console.log("A las" , `${horaActual}`,"h","La Tienda esta abierta");
} else {
    console.log("A las" , `${horaActual}`,"h","La Tienda esta CERRADA");
}

let temperatura = 30;
// Si la temperatura es mayor a 25, mostrar un mensaje que hace calor. Si no, otro mensaje

if (temperatura>25) {
    console.log("Con" , `${temperatura}`,"ºC","Hace calor");
} else {
    console.log("Con" , `${temperatura}`,"ºC","Hoy no hay playa");
}

/*
Dado un número del 0 al 100, asigna una calificación según la siguiente escala:

90 - 100 → Sobresaliente 🏆
70 - 89 → Aprobado ✅
50 - 69 → Necesita mejorar 🧐
< 50 → Reprobado 
*/

let num4= 89

if (num4 >= 50 && num4 <= 69) {
    console.log("Con" , `${num4}`,"🧐","Necesitas Mejorar");
}   
    else if (num4 >= 70 && num4 <= 89 ) {
        console.log("Con" , `${num4}`,"✅","Aprobado");
}   
    else if (num4 >= 90 && num4 <= 100 ) {
        console.log("Con" , `${num4}`,"🏆","Sobresaliente");
}  
    else if (num4 >= 0 && num4 <= 50 ) {
        console.log("Con" , `${num4}`,"❌","Reprobado");
}
    else {
        console.log( `${num4}`,"❌","Error de puntuacion");
}