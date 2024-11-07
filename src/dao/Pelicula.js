import { DataTypes } from "sequelize"
import Categoria from "./Categoria"
import sequelize from "."

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
        },
        categoria_id : {
            type : DataTypes.INTEGER
        }
    },
    {
        freezeTableName : true,
        timestamps : false
    }
)

// Pelicula * ----- 1 Categoria
Pelicula.belongsTo(Categoria, {
    foreignKey : "categoria_id"
})
Categoria.hasMany(Pelicula, {
    foreignKey : "id"
})

export default Pelicula