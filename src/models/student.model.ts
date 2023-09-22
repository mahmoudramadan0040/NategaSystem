import { DataTypes } from "sequelize";
import sequelize from '../database/index'
const Student = sequelize.define("student", {
    id:{
        allowNull:false,
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    student_id:{
        allowNull:false,
        type:DataTypes.BIGINT,
        primaryKey:true,
    },
    full_name: {
        allowNull:false,
        type: DataTypes.STRING,
    }
 },{
    timestamps:true
 }
 );

export default Student;