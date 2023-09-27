import nodemailer from "nodemailer"

//mailer class to handel mail sending
export default class Mailer{
    

    //sending password reset mail
    static async sentPasswordResetMail(email , token){

        //initializing transporter
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:'visalnaqvi@gmail.com',
                pass:'tjtsgmkozcgmgkuj'
            }
        });

        //defining functions
        const mailOptions = {
            from:"visalnaqvi@gmail.com",
            to:email,
            subject:"Password Reset Link",
            text:`Click on this link to reset your password https://hospital-app-rose.vercel.app/reset-password/${token}`
        }

        try{

        //sending mail
           const response = await transporter.sendMail(mailOptions)
           console.log("Email Sent")
           return true;
        }catch (err){

            //consoling error
            console.log(err)
            return false;
        }
    }

}