// num1 = 2;
// num2 = 3;
// suma = num1 + num2;
// console.log(`El resultado es ${suma}.`);
// // formas de concatenar
// console.log("El resultado de la suma es: "+suma);
// console.log('El resultado de la suma es: '+suma); 
// console.log('El resultado de la suma es: ',suma);


// formas de mostrar
// alert(`
//     Numero 1 = ${num1} 
//     Numero 2 = ${num2}
//     Resultado de la suma = ${num1 + num2}
// `); con ventana emergente

// document.write(`
//     Numero 1 = ${num1} 
//     Numero 2 = ${num2}
//     Resultado de la suma = ${num1 + num2}
// `); mostrar en HTML

// console.log(`
//     Numero 1 = ${num1} 
//     Numero 2 = ${num2}
//     Resultado de la suma = ${num1 + num2}
// `);
// console.error(`
//     Numero 1 = ${num1} 
//     Numero 2 = ${num2}
//     Resultado de la suma = ${num1 + num2}
// `); mostrar como error
// console.info(`
//     Numero 1 = ${num1} 
//     Numero 2 = ${num2}
//     Resultado de la suma = ${num1 + num2}
// `);
// console.warn(`
//     Numero 1 = ${num1} 
//     Numero 2 = ${num2}
//     Resultado de la suma = ${num1 + num2}
// `); mostrar como advertencia
// console.log(`%c
//     Numero 1 = ${num1} 
//     Numero 2 = ${num2}
//     Resultado de la suma = ${num1 + num2}
// `,"color:orange; font-family:cursive;"); combinando un poco de css
// console.log(`
//     Numero 1 = ${num1} 
//     Numero 2 = ${num2}
//     Resultado de la suma = ${num1 + num2}
// `);
// tipoDeDato = typeof(num1); para identificar el tipo de dato de la variable

nombreString = `Jaime Andres Lopez Chacon`;
edadNumber = 28;
soyProfesorBoolean = false; /* tambien puede ser true*/
estudiantesAprobadosDiplomadoNull = null;
cocerUndefined = undefined;
hobbiesArray = ["Programar","Video Juegos", 3005463323, null];
hobbiesArray["Soy profesor"] = soyProfesorBoolean;
// Para arrays se usan [] y para objetos {}
dirrecionPersonalObjecte = {
    dirrecion: "Calle 105a",
    pais: "Colombia",
    Pais: "Colombia2",
    mundo: "Tierra",
    0: "Hola soy el identificador numerico"
};

console.log(hobbiesArray);
console.log(dirrecionPersonalObjecte);
console.log(`Datos de la variable tipo Array: `,hobbiesArray["Soy profesor"], hobbiesArray[0]);
console.log(`Datos de la variable tipo Object: `,dirrecionPersonalObjecte.pais, dirrecionPersonalObjecte[0]);
