import { DataTypes } from "sequelize";
import sequelize from '../database/index'
const Subject_score = sequelize.define("subject_score", {
    id:{
        allowNull:false,
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    math_1: {
        type: DataTypes.DECIMAL,
    },
    information_technology:{
        type: DataTypes.DECIMAL,
    },
    physics:{
        type: DataTypes.DECIMAL,
    },
    english_1:{
        type: DataTypes.DECIMAL,
    },
    python:{
        type: DataTypes.DECIMAL,
    },
    cyber_security_1:{
        type: DataTypes.DECIMAL,
    },
    programming_essential_in_c:{
        type: DataTypes.DECIMAL,
    },
    intro_to_iot:{
        type: DataTypes.DECIMAL,
    },
    ms_office:{
        type: DataTypes.DECIMAL,
    },
    cyber_security_2:{
        type: DataTypes.DECIMAL,
    },
    technical_english:{
        type: DataTypes.DECIMAL,
    },
    math_2:{
        type: DataTypes.DECIMAL,
    }
 },{
    timestamps:true
 }
 );

export default Subject_score;