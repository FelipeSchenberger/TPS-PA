// 1
console.log(1)
const libro = {
    titulo: 'Harry Potter',
    autor: 'J.K. Rowling',
    _añoDePublicacion: 1943,
    get añoDePublicacion() {
        return this._añoDePublicacion;
    },
    set añoDePublicacion(nuevoAño) {
        this._añoDePublicacion = nuevoAño;
    },
    descripcion: function() {
        return `El libro se llama "${this.titulo}" y fue escrito por ${this.autor}`
    }
}

console.log(libro.titulo)
console.log(libro.autor)
console.log(libro._añoPublicacion)

// 2
console.log(2)
const estudiante = {
    nombre: 'Felipe Schenberger',
    edad: 20,
    direccion: {
        calle: 'Chacabuco 20',
        ciudad: 'CdelU',
        pais: 'Argentina'
    }
}

console.log(`${estudiante.nombre} vive en ${estudiante.direccion.calle} en ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`)

// 3
console.log(3)
console.log(libro.descripcion());

//4
console.log(4)
const  producto = {
    nombre : 'parlante',
    precio : 200000,
    disponible: true
}

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}

// 5
console.log(5)
producto.precio = 300000
console.log(producto)

// 6
console.log(6)
function tienePropiedad(object, chain) {
    return object.hasOwnProperty(chain)
}

console.log(tienePropiedad(producto, 'disponible'))
console.log(tienePropiedad(producto, 'color'))

// 7
console.log(7)
console.log(producto)
delete producto.disponible
console.log(producto)

// 8
console.log(8)
const persona1 = {
    name: 'Sofi',
    age: 22
}
const persona2 = {
    mascota: 'Reina',
    petage: 1500
}
const persona3 = Object.assign(persona1, persona2)
console.log(persona3)

// 9
console.log(9)
const estudiantenew = JSON.parse(JSON.stringify(estudiante))
estudiantenew.direccion.calle = 'Rocamora'
console.log(estudiantenew)

// 10
console.log(10)
libro.añoDePublicacion = 2023;
console.log(libro.añoDePublicacion);