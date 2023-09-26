import { Router , Request,Response } from "express";
import checkExcel from "../../middlewares/ExcelFilter";
import EquationController from "../../controller/Equation.controller";
const equation = new EquationController();

const routes =Router();
routes.post("/upload_excel",checkExcel.fields([
    {name:"subject",maxCount:1}
]),equation.uploadExcel)
export default routes;