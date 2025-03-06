/* 

// usamos let porque solo usamos la variable index dentro del bucle

for (let index = 0; index < 10; index++) {
    console.log(`Hola ${index}`);
    if (index == 5) {
        console.log(`Hemos alcanzado la mitad llegando a ${index}`);
        break;
    }
    
}

for (let index = 0; index < 10; index++) {
    
    if (index == 5) {
        //console.log(`Hemos alcanzado la mitad llegando a ${index}`);
        continue;
    }
    console.log(`Hola ${index}`);
}

for (let index = 0; index < 10; index+=2) {
    console.log(`Hola ${index}`);
    if (index == 5) {
                
    }
    
}

for (let index = 10; index =0; index-=2) {
    console.log(`Hola ${index}`);
    if (index == 5) {
                
    }
    
} */

/* const numbers = [1,5,2,7]

// forloop

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
    
}


// forof
for (const element of numbers) {
    console.log(element);
    
} */

// Imprimir los números en orden inverso (del 5 al 1)

for (let index = 5; index > 0; index-=1) {
    console.log(`Hola ${index}`);
    }
    


console.log("Imprimir de 10 a 100 en incrementos de 10")
    for (let index = 10; index < 101; index+=10) {
        console.log(`Hola ${index}`);
        }


console.log("Imprimir todos los numbers excepto Carlos")
    let numbers = ["Ana", "Carlos", "Elena", "Luis"];

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (index==1) {}
        else {console.log(element)};
    }


console.log("Vamos a buscar si el nombre existe en la lista")
    let numbers1 = ["Pedro", "Maria", "Juan"];
    let buscar = "Maria";
    let encontrado = false;

    for (let index = 0; index < numbers1.length; index++) {
        const element = numbers1[index];
        if (element==buscar) {
            console.log(`${buscar} esta en la lista`)
            let encontrado = true
        }
        if (encontrado) {
            break;

        }
    }

console.log("Cuando llegues a 3, terminar de imprimor los valroes y salir del bucle")
    const numbers2 = [1, 2, 3, 4, 5];

    for (let index = 0; index < numbers2.length; index++) {
        const element = numbers2[index];
        if (index==3) {
            break;
        }
        else {console.log(element)};
    }

