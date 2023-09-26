import {Router} from 'express';
import equationRoute from './api/equation.route'
const routes =Router();
routes.use("/document",equationRoute);
export default routes;
