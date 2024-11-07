import { Sequelize } from "sequelize"
import Pelicula from "./Pelicula"
import Usuario from "./Usuario"

// Configuracion Sequelize (SQLite)
const sequelize = new Sequelize({
    dialect : "sqlite",
    storage : "data.db"
})

export {
    Pelicula,
    Usuario
}

export default sequelize