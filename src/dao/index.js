import { Sequelize, DataTypes } from "sequelize"

// Configuracion Sequelize (SQLite)
const sequelize = new Sequelize({
    dialect : "sqlite",
    storage : "data.db"
})

const Categoria = sequelize.define(
    "Categoria",
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : DataTypes.STRING
        }
    },
    {
        freezeTableName : true,
        timestamps : false
    }
)

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

export {
    Pelicula,
    Usuario,
    Categoria
}

export default sequelize