import { DataTypes } from "sequelize";
import sequelize from '../database/index'
const Subject_grade = sequelize.define("subject_Subject_grade", {
    id:{
        allowNull:false,
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    math_1: {
        type: DataTypes.STRING,
    },
    information_technology:{
        type: DataTypes.STRING,
    },
    physics:{
        type: DataTypes.STRING,
    },
    english_1:{
        type: DataTypes.STRING,
    },
    python:{
        type: DataTypes.STRING,
    },
    cyber_security_1:{
        type: DataTypes.STRING,
    },
    programming_essential_in_c:{
        type: DataTypes.STRING,
    },
    intro_to_iot:{
        type: DataTypes.STRING,
    },
    ms_office:{
        type: DataTypes.STRING,
    },
    cyber_security_2:{
        type: DataTypes.STRING,
    },
    technical_english:{
        type: DataTypes.STRING,
    },
    math_2:{
        type: DataTypes.STRING,
    }
 },{
    timestamps:true
 }
 );

export default Subject_grade;