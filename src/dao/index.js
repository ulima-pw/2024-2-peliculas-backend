import { Sequelize, DataTypes } from "sequelize"

// Configuracion Sequelize (SQLite)
/*const sequelize = new Sequelize({
    dialect : "sqlite",
    storage : "data.db"
})*/

/* const sequelize = new Sequelize(
    'postgres', 
    'peliculas', 
    'peliculas', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
}); */

const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialectOptions : {
            ssl : {
                require : true,
                rejectUnauthorized : false
            }
        }
    }
)

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

const Cine = sequelize.define(
    "Cine",
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : DataTypes.STRING(50)
        },
        direccion : {
            type : DataTypes.STRING(150)
        }
    },
    {
        freezeTableName : true,
        timestamps : false
    }
)

const CineXPelicula = sequelize.define(
    "CineXPelicula",
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        cine_id : {
            type : DataTypes.INTEGER
        },
        pelicula_id : {
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

// Pelicula 1 ----- * CineXPelicula
Pelicula.hasMany(CineXPelicula, {
    foreignKey : "id"
})
CineXPelicula.belongsTo(Pelicula, {
    foreignKey : "pelicula_id"
})

// Cine 1 ----- * CineXPelicula
Cine.hasMany(CineXPelicula, {
    foreignKey : "id"
})
CineXPelicula.belongsTo(Cine, {
    foreignKey : "cine_id"
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
            type : DataTypes.STRING(100)
        },
        usuario : {
            type : DataTypes.STRING(20)
        },
        password : {
            type : DataTypes.STRING(20)
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
    Categoria,
    Cine,
    CineXPelicula
}

export default sequelize