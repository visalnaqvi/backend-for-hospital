import express from 'express'
import ReoportsController from './reports.controller.js';


//initializing router and controller
const reportsRouter = express.Router();

const reportsController = new ReoportsController();


//calling controller based on the API call
reportsRouter.get("/:status",reportsController.getAllReports)

export default reportsRouter;