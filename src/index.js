import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

// Configuracion para trabajar con formularios POST
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(express.static("assets"))

app.get("/", (req, resp) => {
    const html = `
    <h1>Programacion Web</h1>
    <form action='/ejemplo_form_post' method='POST'>
        <input type='text' name='nombre' />
        <input type='text' name='codigo' />
        <button type='submit'>Procesar</button>
    </form>
    `
    resp.send(html)
})

app.get("/ejemplo_path/:nombre/:codigo", (req, resp) => {
    const nombre= req.params.nombre
    const codigo = req.params.codigo

    const html = `
    <div>Nombre: ${nombre}</div>
    <div>Codigo: ${codigo}</div>
    `
    resp.send(html)
})

app.get("/ejemplo_query", (req, resp) => {
    const nombre= req.query.nombre
    const codigo = req.query.codigo
    const edad = req.query.edad

    const html = `
    <div>Nombre: ${nombre}</div>
    <div>Codigo: ${codigo}</div>
    <div>Codigo: ${edad}</div>
    `
    resp.send(html)
})

app.post("/ejemplo_form_post", (req, resp) => {
    console.log(req.body)
    const nombre= req.body.nombre
    const codigo = req.body.codigo

    const html = `
    <div>Nombre: ${nombre}</div>
    <div>Codigo: ${codigo}</div>
    `
    resp.send(html)
})

app.post("/ejemplo_crudo_post", (req, resp) => {
    const nombre= req.body.nombre
    const codigo = req.body.codigo

    const html = `
    <div>Nombre: ${nombre}</div>
    <div>Codigo: ${codigo}</div>
    `
    resp.send(html)
})

app.listen(port, () => {
    console.log("Servidor web iniciado en puerto " + port)
})
