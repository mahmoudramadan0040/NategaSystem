import { DataTypes } from "sequelize";
import sequelize from '../database/index'
const Statistics = sequelize.define("statistics", {
    id:{
        allowNull:false,
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    total_score:{
        type:DataTypes.DOUBLE,
    },
    percent:{
        type: DataTypes.DECIMAL,
    },
    general_grade:{
        type: DataTypes.STRING,
    },
    student_status:{
        type: DataTypes.STRING,
    }
 },{
    timestamps:true
 }
 );

export default Statistics;