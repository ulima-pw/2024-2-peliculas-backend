import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { Sequelize, DataTypes } from "sequelize"

const app = express()
const port = 3000

// Configuracion para trabajar con formularios POST
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(cors())

app.use(express.static("assets"))

// Configuracion Sequelize (SQLite)
const sequelize = new Sequelize({
    dialect : "sqlite",
    storage : "data.db"
})

const Pelicula = sequelize.define(
    "Pelicula",
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : DataTypes.STRING
        },
        url : {
            type : DataTypes.STRING
        }
    },
    {
        freezeTableName : true,
        timestamps : false
    }
)

const Usuario = sequelize.define(
    "Usuario",
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : DataTypes.STRING
        },
        usuario : {
            type : DataTypes.STRING
        },
        password : {
            type : DataTypes.STRING
        }
    },
    {
        freezeTableName : true,
        timestamps : false
    }
)


const dataPeliculas = [
    {
        "id" : 1,
        "nombre": "Joker 2",
        "url" : "https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*",
        "categoria" : 1
    },
    {
        "id" : 2,
        "nombre": "Robot Salvaje",
        "url" : "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002008",
        "categoria" : 2
    },
    {
        "id" : 3,
        "nombre": "Alien Romulus",
        "url" : "https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*",
        "categoria" : 1
    },
    {
        "id" : 4,
        "nombre": "Beetlejuice 2",
        "url" : "https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*",
        "categoria" : 2
    },
    {
        "id" : 5,
        "nombre": "El guardian de la magia",
        "url" : "https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*",
        "categoria" : 3
    }
]

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

/*============================ /peliculas ======================== */

// REST (Create, Read, Single Read, Update, Delete)

app.get("/peliculas/:id", (req, resp) => {
    const idPelicula = parseInt(req.params.id)

    const peliculaADevolver = dataPeliculas.filter((p) => {
        return p.id === idPelicula
    })

    if (peliculaADevolver.length === 0) {
        // Id es incorreto
        resp.status(400).send({
            error : "ID de pelicula no existe."
        })
        return
    }

    resp.send(peliculaADevolver[0])
})

app.get("/peliculas", (req, resp) => {
    const categoriaId = req.query.categoria

    if (categoriaId !== undefined)
    {
        const peliculasFiltradas = dataPeliculas.filter((pelicula) => {
            return pelicula.categoria === parseInt(categoriaId)
        })
        resp.send(peliculasFiltradas)
    }else {
        resp.send(dataPeliculas)
    }
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
app.post("/peliculas", (req, resp) => {
    const dataInput = req.body

    if (req.body.nombre === undefined 
        || req.body.url === undefined 
        || req.body.categoria === undefined){
        resp.status(400).send({
            error : "Input invalido"
        })
        return
    }
    const nuevoId = dataPeliculas.length + 1
    const nuevaPelicula = {
        ...dataInput,
        id : nuevoId
    }
    dataPeliculas.push(nuevaPelicula)

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
app.put("/peliculas", (req, resp) => {
    const dataInput = req.body

    if (req.body.id === undefined){
        resp.status(400).send({
            error : "Input invalido"
        })
        return
    }

    // Buscar la pelicula con cierto id
    for(let p of dataPeliculas){
        if (p.id === dataInput.id) {
            // Encontre la pelicula
            // Modificamos la pelicula encontrada con los datos que hermos recibido
            // <EXP_BOOLEANA> ? <EXP1> : <EXP2>
            p.nombre = (dataInput.nombre === undefined ? p.nombre : dataInput.nombre)
            p.url = (dataInput.url === undefined ? p.url : dataInput.url)
            p.categoria = (dataInput.categoria === undefined ? p.categoria : dataInput.categoria)

            resp.send({
                error : ""
            })

            return;
        }
    }

    // Error no encontrar pelicula con id enviado
    resp.status(400).send({
        error : "ID de pelicula no existe."
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
app.delete("/peliculas/:id", (req, resp) => {
    const idPelicula = parseInt(req.params.id)

    let posicion = -1
    for (let i = 0; i < dataPeliculas.length; i++) {
        const p = dataPeliculas[i]
        if (p.id === idPelicula) {
            // Se encontro la pelicula a eliminar
            posicion = i
            break
        }
    }

    if (posicion === -1) {
        resp.status(400).send({
            error : "ID de pelicula no existe."
        })
        return
    }

    dataPeliculas.splice(posicion , 1)

    resp.send({
        error : ""
    })
})


app.listen(port, () => {
    console.log("Servidor web iniciado en puerto " + port)
})
