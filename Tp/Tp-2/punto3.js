async function obtenerUsuarios() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios, código de estado: ' + response.status)
      }
      const usuarios = await response.json()
      return usuarios
    } catch (error) {
      console.error('Error:', error.message)
    }
}
  
async function imprimirNombresDeUsuarios() {
    const usuarios = await obtenerUsuarios()
    if (usuarios) {
      const nombres = usuarios.map(usuario => usuario.name)
      console.log(nombres)
    }
}
  
imprimirNombresDeUsuarios()

function autenticarUsuario(credenciales) {
    const usuarioPredefinido = 'usuario'
    const contraseñaPredefinida = 'contraseña'
  
    return credenciales.usuario === usuarioPredefinido && credenciales.contraseña === contraseñaPredefinida
}
  
const credenciales = {
    usuario: 'usuario',
    contraseña: 'contraseña'
}
  
console.log(autenticarUsuario(credenciales))

function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => ({
      nombre: usuario.name,
      email: usuario.email
    }))
}

const usuarios = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }
  ]
  
console.log(mapearUsuarios(usuarios))

function validarFormulario(formulario) {
    return formulario.nombre && formulario.email && formulario.password &&
      formulario.nombre.trim() !== '' &&
      formulario.email.trim() !== '' &&
      formulario.password.trim() !== ''
}

const formularioValido = {
    nombre: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    password: 'contraseña'
}
console.log(validarFormulario(formularioValido))

function obtenerPagina(datos, pagina) {
    const elementosPorPagina = 5
    const inicio = (pagina - 1) * elementosPorPagina
    const fin = inicio + elementosPorPagina
    return datos.slice(inicio, fin)
}

const datos = [
    'Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5',
    'Elemento 6', 'Elemento 7', 'Elemento 8', 'Elemento 9', 'Elemento 10',
    'Elemento 11', 'Elemento 12', 'Elemento 13', 'Elemento 14', 'Elemento 15'
]

console.log(obtenerPagina(datos, 1))
console.log(obtenerPagina(datos, 2))

async function enviarDatos(data) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error('Error al enviar los datos, código de estado: ' + response.status)
      }
      const respuesta = await response.json()
      console.log(respuesta)
    } catch (error) {
      console.error('Error:', error.message)
    }
}
  
const datos1 = {
    title: 'foo',
    body: 'bar',
    userId: 1
}
  
enviarDatos(datos1)

function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email)
}
  
const usuarios1 = [
    { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
    { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
    { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' }
  ]
  
console.log(buscarUsuarioPorEmail(usuarios1, 'Shanna@melissa.tv')) 

function generarToken(usuario) {
    const encabezado = JSON.stringify({ alg: 'HS256', typ: 'JWT' })
    const payload = JSON.stringify(usuario)
    const firma = 'fakefirma'
  
    const base64Url = str => btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  
    const encabezadoBase64 = base64Url(encabezado)
    const payloadBase64 = base64Url(payload)
    const token = `${encabezadoBase64}.${payloadBase64}.${firma}`
  
    return token
}
 
const usuario = {
    id: 1,
    nombre: 'Leanne Graham',
    email: 'Sincere@april.biz'
}

console.log(generarToken(usuario))

function actualizarUsuario(usuario2, cambios) {
    return { ...usuario, ...cambios }
  }

const usuario2 = {
    id: 1,
    nombre: 'Leanne Graham',
    email: 'Sincere@april.biz',
    telefono: '1-770-736-8031 x56442'
}
  
const cambios = {
    nombre: 'Leanne Smith',
    telefono: '1-770-736-8031 x12345'
}
  
console.log(actualizarUsuario(usuario2, cambios))


