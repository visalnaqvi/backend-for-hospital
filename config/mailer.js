import nodemailer from "nodemailer"
export default class Mailer{
    
    static async sentPasswordResetMail(email , token){

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:'visalnaqvi@gmail.com',
                pass:'tjtsgmkozcgmgkuj'
            }
        });

        const mailOptions = {
            from:"visalnaqvi@gmail.com",
            to:email,
            subject:"Password Reset Link",
            text:`Click on this link to reset your password http://lcoalhost:3000/reset-password/${token}`
        }

        try{
           const response = await transporter.sendMail(mailOptions)
           console.log("Email Sent")
           return true;
        }catch (err){
            console.log(err)
            return false;
        }
    }

}