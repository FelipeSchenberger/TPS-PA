// 1
console.log(1)
function sumar(numero1, numero2) {
    console.log(numero1 + numero2)
}
sumar(5, 3)

// 2
console.log(2)
function multiplicar(numero1, numero2) {
    console.log(numero1 * numero2)
}
multiplicar(5, 3)

// 3
console.log(3)
function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}`;
}
console.log(saludar())

// 4
console.log(4)
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

const persona1 = crearPersona('Sofi', 22)
console.log(persona1)

// 5
console.log(5)
function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad
}
let persona = {
    nombre: "Felipe",
    edad: 25
}
actualizarEdad(persona, 30)
console.log(persona)

// 6
console.log(6)
function factorial(num) {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}
console.log(factorial(5))

// 7
console.log(7)
function despedir() {
    function adios() {
        return 'Adios'
    }
    return adios()
}

console.log(despedir())

// 8
console.log(8)
function procesarArray(array, funcion) {
    return array.map(funcion)
}
function multiPor2(num) {
    return num * 2
}

console.log(procesarArray([1, 2, 3, 4, 5], multiPor2))


// 9
console.log(9)
function crearMultiplicador(x) {
    return function (y) {
        return x * y
    }
}

const multiplicarPor5 = crearMultiplicador(5)
console.log(multiplicarPor5(3))

// 10
console.log(10)
const sumaAnonima =function (x, y) {
    return x + y
}

console.log(sumaAnonima(10, 5))