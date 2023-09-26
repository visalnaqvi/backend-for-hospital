import Report from "./reports.schema.js"
export default class ReoportsController{

    //controller to get all reports based on status
    getAllReports(req,res){

        //getting status from param
        const status = req.params.status

        //getting all records with the status
        Report.find({status:status.trim()}).then(reports=>{
            if(reports.length <= 0){
                res.status(404).send("No such reports found")
            }else{
                res.send(reports)
            }
        }).catch(err=>{
            console.log(err)
            res.status(400).send("error")
        })
    }
}