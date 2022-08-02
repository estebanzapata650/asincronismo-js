function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

let result = calc(5, 7, sum);

console.log(`La suma de 5 y 7 es: ${result}`);

/* **************************** */

setTimeout(() => {
    console.log("Hola JavaScript");
}, 2000);

/* **************************** */

function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Esteban");

/* **************************** */

