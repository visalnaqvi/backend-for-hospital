import express, { Router } from "express"
import PatientsController from "./patients.controller.js";


//initializing router and controller
const patientsRouter = express.Router();
const paitentController = new PatientsController


//assiging countroller to API calls
patientsRouter.post('/register' , paitentController.register)
patientsRouter.post('/:id/create_report' , paitentController.createReport)
patientsRouter.get('/:id/all_reports' , paitentController.getReports)

export default patientsRouter;