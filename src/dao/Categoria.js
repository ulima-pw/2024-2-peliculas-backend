import { DataTypes } from "sequelize"
import sequelize from "."

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

export default Categoria