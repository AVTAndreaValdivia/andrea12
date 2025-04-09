/*const mostrarMensaje=(mensaje)=>
{
    return mensaje;
}
console.log(mostrarMensaje("hola"))*/
/*var numero=8;
if (numero%2==0){
    console.log("es un numero par");
}else{
    console.log("es un numero impar");
}*/

console.log("EJERCICIO 01");

function buscarElemento(arr, valorBuscado){
    for(let i=1; i<arr.length; i++){
        if(arr[i] === valorBuscado){
            return i;
        }
    }
    return -1;
}

const listaNumeros = [10, 2, 3, 8, 4, 9, 7];
const numeroABuscar = 7;
const indiceElemento = buscarElemento(listaNumeros, numeroABuscar);
console.log(`El elemento ${numeroABuscar} se encuentra en el índice ${indiceElemento}`);

console.log("EJERCICIO 02");
function obtenerMayorMenor(arr) {
    let mayor = arr[0];
    let menor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) mayor = arr[i];
        if (arr[i] < menor) menor = arr[i];
    }
    return { mayor, menor };
}
console.log(obtenerMayorMenor([3, 1, 4, 1, 5]));

console.log("EJERCICIO 03");
function contarNumerosPares(arr) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) contador++;
    }
    return contador;
}
console.log(contarNumerosPares([1, 2, 3, 4, 6]));

console.log("EJERCICIO 04");
function ordenarLista(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temporal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporal;
            }
        }
    }
    return arr;
}
console.log(ordenarLista([5, 2, 9, 1, 5]));

console.log("EJERCICIO 05");
function buscarNombreEnLista(arr, nombre) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === nombre) return i;
    }
    return -1;
}
console.log(buscarNombreEnLista(["Ana", "Juan", "María"], "Juan"));
console.log(buscarNombreEnLista(["Ana", "Juan", "María"], "Pedro"));

console.log("EJERCICIO 06");
function invertirLista(arr) {
    let nuevaLista = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        nuevaLista.push(arr[i]);
    }
    return nuevaLista;
}
console.log(invertirLista([1, 2, 3, 4]));

console.log("EJERCICIO 07");
function convertirNombresAMayusculas(arr) {
    return arr.map(nombre => nombre.toUpperCase());
}
console.log(convertirNombresAMayusculas(["ana", "juan", "maría"]));

console.log("EJERCICIO 08");
function sumarNumerosPositivos(arr) {
    return arr.filter(num => num > 0).reduce((suma, num) => suma + num, 0);
}
console.log(sumarNumerosPositivos([1, -2, 3, -4, 5]));

console.log("EJERCICIO 09");
function encontrarMultiploDeCinco(arr) {
    return arr.find(num => num % 5 === 0);
}
console.log(encontrarMultiploDeCinco([2, 3, 7, 10, 12]));

const entradaSalida = require("readline");

const interfazUsuario = entradaSalida.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarPregunta(pregunta) {
    return new Promise(resolver => interfazUsuario.question(pregunta, resolver));
}

async function mostrarTablaDeMultiplicar() {
    console.log("EJERCICIO 10");
    let valor = await preguntarPregunta("Ingresa un número para ver su tabla de multiplicar: ");
    let numeroIngresado = parseInt(valor);

    if (!isNaN(numeroIngresado)) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numeroIngresado} x ${i} = ${numeroIngresado * i}`);
        }
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
}

function secuenciaFibonacci() {
    console.log("EJERCICIO 11");
    let secuencia = [0, 1];
    for (let i = 2; i < 10; i++) {
        secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }
    return secuencia;
}

async function adivinarNumero() {
    console.log("EJERCICIO 12");
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    function adivinar() {
        rl.question("Adivina el número (1-10): ", (respuesta) => {
            let numero = parseInt(respuesta);
            if (numero === numeroAleatorio) {
                console.log("¡Correcto!");
                rl.close();
            } else {
                console.log("Intenta de nuevo.");
                adivinar();
            }
        });
    }

    adivinar();
}

async function contarRegresivamente() {
    console.log("EJERCICIO 13");
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Ingresa un número para contar regresivamente: ", (numero) => {
        let count = parseInt(numero);
        while (count >= 0) {
            console.log(count);
            count--;
        }
        rl.close();
    });
}

async function validarEntrada() {
    console.log("EJERCICIO 14");
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function pedirNumero() {
        rl.question("Ingresa un número mayor que 0: ", (numero) => {
            let num = parseInt(numero);
            if (num > 0) {
                console.log("Número válido:", num);
                rl.close();
            } else {
                console.log("Número no válido.");
                pedirNumero();
            }
        });
    }

    pedirNumero();
}

async function mostrarMenu() {
    console.log("EJERCICIO 15");
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function mostrar() {
        rl.question("Menú:\n1. Opción 1\n2. Opción 2\n3. Salir\nElige una opción: ", (opcion) => {
            switch(opcion) {
                case "1":
                    console.log("Elegiste Opción 1");
                    mostrar();
                    break;
                case "2":
                    console.log("Elegiste Opción 2");
                    mostrar();
                    break;
                case "3":
                    console.log("Saliendo...");
                    rl.close();
                    break;
                default:
                    console.log("Opción inválida");
                    mostrar();
                    break;
            }
        });
    }

    mostrar();
}

async function sumarImpares() {
    console.log("EJERCICIO 16");
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
        if (suma > 500) {
            console.log("La suma ha superado 500:", suma);
            break;
        }
    }
}

async function contadorIntentos() {
    console.log("EJERCICIO 17");
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let intentos = 3;

    function intentarLogin() {
        if (intentos === 0) {
            console.log("Acceso bloqueado");
            rl.close();
            return;
        }
        rl.question("Ingresa la contraseña: ", (password) => {
            if (password === "1234") {
                console.log("¡Login exitoso!");
                rl.close();
            } else {
                intentos--;
                console.log(`Intentos restantes: ${intentos}`);
                intentarLogin();
            }
        });
    }

    intentarLogin();
}

async function sumarHastaCero() {
    console.log("EJERCICIO 18");
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let suma = 0;

    function sumarNumeros() {
        rl.question("Ingresa un número (0 para terminar): ", (numero) => {
            let num = parseInt(numero);
            if (num === 0) {
                console.log("La suma total es:", suma);
                rl.close();
            } else {
                suma += num;
                sumarNumeros();
            }
        });
    }

    sumarNumeros();
}

async function fibonacciHastaCien() {
    console.log("EJERCICIO 19");
    let fibonacci = [0, 1];

    while (true) {
        let siguiente = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (siguiente > 100) break;
        fibonacci.push(siguiente);
    }

    console.log(fibonacci);
}

async function multiplosDeTres() {
    console.log("EJERCICIO 20");
    let i = 3;
    while (i < 50) {
        console.log(i);
        i += 3;
    }
}

async function ejecutar() {
    await mostrarTablaDeMultiplicar();
    console.log(secuenciaFibonacci());
    await adivinarNumero();
    await contarRegresivamente();
    await validarEntrada();
    await mostrarMenu();
    await sumarImpares();
    await contadorIntentos();
    await sumarHastaCero();
    await fibonacciHastaCien();
    await multiplosDeTres();
    interfazUsuario.close(); 
}

ejecutar();
