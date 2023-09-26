import Patients from "./patients.schema.js";
import Report from "../reports/reports.schema.js";
export default class PatientsController{

    //controller to register a new patient
    register(req,res){

        //checking if patient already exisits
        Patients.findOne({_id:req.body.phoneNo}).then(patient=>{
            if(patient){

                //if patient already exists then returning its id
                res.status(409).send(`Paitent already exist with id ${patient._id}`)
            }else{

                //creating a new patient
                const newPatient = Patients({_id:req.body.phoneNo})

                //saving new patient into database
                newPatient.save().then(patient=>{
                    res.send(`New Paitent created with id: ${patient._id}`)
                })
                .catch(err=>{
                    console.log(err)
                    res.status(400).send("error")
                })
            }
        })
    }

    //controller to create new report
    createReport(req,res){
        const id = req.params.id;

        //check if patient with id for which report is getting made exist or not
        Patients.findOne({_id:id}).then(patient=>{

            //if patient exist then creating report
            if(patient){
                let newReport = new Report({
                    createdBy:req.body.createdBy,
                    status:req.body.status,
                    patitentId:id
                })


                //saving new report into database
                newReport.save().then(report=>{
                    res.send(report)
                }).catch(err=>{
                    console.log(err);
                    res.status(400).send("error")
                })
            }else{
                res.status(404).send(`No patient exist with id:${id}`)
            }
        })
    }

    //controller to get all reports of a patient
    getReports(req,res){
        const id = req.params.id;

        //checking id patient with given id exists or not
        Patients.findOne({_id:id}).then(patient=>{
            if(patient){

                //getting all reports of the patient
                Report.find({patitentId:id}).then(reports=>{
                    res.send(reports)
                })
            }else{
                res.status(404).send(`No patient exist with id:${id}`)
            }
        })
    }
}