import { DataTypes } from "sequelize"
import sequelize from "."

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

export default Usuario