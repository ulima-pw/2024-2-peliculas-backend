import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

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
app.post("/login", (req, resp) => {
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

    // Verificar si el usuario y password existen
    if (usuario === "PW" && password === "123")
    {
        // Login exitoso
        const dataOutput = {
            error : ""
        }
        resp.send(dataOutput)
    }else
    {
        // Error login
        const dataOutput = {
            error : "Error en el login."
        }
        resp.send(dataOutput)
    }
})

app.get("/peliculas", (req, resp) => {
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

    resp.send(dataPeliculas)
})

app.listen(port, () => {
    console.log("Servidor web iniciado en puerto " + port)
})
