import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { Usuario, Pelicula, Categoria, Cine } from "./dao/index.js"

const app = express()
const port = 3000

// Configuracion para trabajar con formularios POST
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(cors())

app.use(express.static("assets"))


/*
 Endpoint: Login de usuario
 Path: /login
 Method: POST
 Input:
 {
    "usuario" : "pepito",
    "password" : "123456"
 }
 Output:
 {
    "error" : ""
 }
 */
app.post("/login", async (req, resp) => {
    const dataInput = req.body

    console.log(dataInput)

    const usuario = dataInput.usuario
    const password = dataInput.password

    if (usuario == undefined || password == undefined)
    {
        // Error por envio incorrecto de input
        const dataOutput = {
            error : "Input incorrecto. Revisar peticion"
        }
        resp.send(dataOutput)
        return
    }

    const usuarios = await Usuario.findAll({
        where : {
            usuario : usuario,
            password : password
        }
    })

    // Verificar si el usuario y password existen en bd
    if (usuarios.length > 0) {
        // Login exitoso
        const dataOutput = {
            error : ""
        }
        resp.send(dataOutput)
    }else {
        // Error login
        const dataOutput = {
            error : "Error en el login."
        }
        resp.status(400).send(dataOutput)
    }

    
})

/*============================ /categorias ======================== */
app.get("/categorias", async (req, resp) => {
    const categorias = await Categoria.findAll()
    resp.send(categorias)
})

/*============================ /cines ======================== */
app.get("/cines", async (req, resp) => {
    const cines = await Cine.findAll()
    resp.send(cines)
})

/*============================ /peliculas ======================== */

// REST (Create, Read, Single Read, Update, Delete)

app.get("/peliculas/:id", async (req, resp) => {
    const idPelicula = parseInt(req.params.id)

    const pelicula = await Pelicula.findByPk(idPelicula)

    if (pelicula === null) {
        // Id es incorreto
        resp.status(400).send({
            error : "ID de pelicula no existe."
        })
        return
    }

    resp.send({
        nombre : pelicula.nombre,
        url : pelicula.url
    })
})

app.get("/peliculas", async (req, resp) => {
    const categoriaId = req.query.categoria

    let peliculas;
    if (categoriaId === undefined)
    {
        peliculas = await Pelicula.findAll()
    }else {
        peliculas = await Pelicula.findAll({
            where : {
                categoria_id : categoriaId
            }
        })
    }

    resp.send(peliculas)
})

/*
 Endpoint: Agregar pelicula
 Path: /peliculas
 Method: POST
 Input:
 {
    "nombre" : "Peli1",
    "url" : "http://...",
    "categoria" : 2
 }
 Output:
 {
    "error" : ""
 }
 */
app.post("/peliculas", async (req, resp) => {
    const dataInput = req.body

    if (req.body.nombre === undefined 
        || req.body.url === undefined
        || req.body.categoria_id === undefined){
        resp.status(400).send({
            error : "Input invalido"
        })
        return
    }

    try
    {
        await Pelicula.create({
            nombre : req.body.nombre,
            url : req.body.url,
            categoria_id : req.body.categoria_id
        })
    }catch(error)
    {
        console.error(error)
        resp.status(400).send({
            error : `Error en cliente: Id de Categoria no existe: ${error.name}`
        })
        return
    }

    resp.send({
        error : ""
    })
})

/*
 Endpoint: Modificar pelicula
 Path: /peliculas
 Method: PUT
 Input:
 {
    "id" : 3,
    "nombre" : "Peli1",
    "url" : "http://...",
    "categoria" : 1
 }
 Output:
 {
    "error" : ""
 }
 */
app.put("/peliculas", async (req, resp) => {
    const dataInput = req.body

    if (req.body.id === undefined){
        resp.status(400).send({
            error : "Input invalido"
        })
        return
    }

    // Buscar la pelicula con cierto id
    const peliculaAModificar = await Pelicula.findByPk(req.body.id)

    if (peliculaAModificar === null) {
        // Error no encontrar pelicula con id enviado
        resp.status(400).send({
            error : "ID de pelicula no existe."
        })
        return
    }

    if (req.body.nombre !== undefined) {
        peliculaAModificar.nombre = req.body.nombre
    }
    if (req.body.url !== undefined) {
        peliculaAModificar.url = req.body.url
    }
    
    await peliculaAModificar.save()

    resp.send({
        error : ""
    })
})

/*
 Endpoint: Eliminar pelicula
 Path: /peliculas/<ID_PELICULA>
 Method: DELETE
 Output:
 {
    "error" : ""
 }
 */
app.delete("/peliculas/:id", async (req, resp) => {
    const idPelicula = parseInt(req.params.id)

    const deleteNumber = await Pelicula.destroy({
        where : {
            id : idPelicula
        }
    })

    if (deleteNumber === 0) {
        resp.status(400).send({
            error : "ID de pelicula no existe."
        })
        return
    }

    resp.send({
        error : ""
    })
})


app.listen(port, () => {
    console.log("Servidor web iniciado en puerto " + port)
})
