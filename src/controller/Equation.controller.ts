import { Request,Response,NextFunction } from "express";
import grade from "../utils/grade";
import xlsx from 'xlsx';
class EquationController{
    uploadExcel = async(req:Request,res:Response,next:NextFunction)=>{
        try{
            // first we need recive the excel file 
            if(req.files){
                console.log(req.files)
                const filepath =Object.values(req.files).flat().map(file => file.path);
                var wb = xlsx.readFile(filepath[0])
                console.log(wb.SheetNames);
                
            }
            // then 
            res.status(200).json({
                status:"sucess",
                "message":"excel uploaded successfully ! "
            })
        }catch(err){
            next(err)
        }
    }
}
export default EquationController












/*
this function is take 4 params
term_work --> is the work of term 
final_grade --> is the grade of the final exams
min --> the smallest value to pass of subject 
max --> the largest value to score of subject 
----------------------------------
this function is return two value 
first ---> the total degree        
second ---> the total grade       
----------------------------------
*/ 
const Math_equation =(
    term_work:number,
    final_grade:number,
    max:number,
    factor:number
    )=>
{
    let score;
    if(!isNaN(term_work) && !isNaN(final_grade)){
        score = (term_work * .5) + (final_grade * .5) * factor
        console.log(grade(score,max))
        return grade(score,max);
    }

}  