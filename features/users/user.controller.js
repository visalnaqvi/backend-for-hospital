import Authentication from "../../config/authentication.js"
import User from "./user.schema.js"
import jwt from "jsonwebtoken"
import Mailer from "../../config/mailer.js"
export default class UserController {

    //creates a new user and stores it in database
    signUp(req, res) {

        //checking if user already exists
        User.findOne({ userId: req.body.userId }).then(user => {
            if (user) {

                //if user already exists then return
                res.status(409).send("userId already exist pleas choose different userId")
                return;
            }else{

                //creating new user
                const newUser = new User({
                    name: req.body.name,
                    userId: req.body.userId,
                    password: req.body.password,
                    role: req.body.role
                })
        
                //saving to database
                newUser.save().then(user => res.send(user)).catch(err => {
                    console.log(err)
                    res.status(400).send("error")
                })
            }
        }
        )

    }


    //login in user
    signIn(req, res) {

        //checking is user exists or not
        User.findOne({
            userId: req.body.userId,
            password: req.body.password
        }).then(user => {

            //generating jwt token if user exists
            const token = Authentication.generateToken(user)
            res.send(token)
        }).catch(err => {
            console.log(err)
            res.status(400).send("error")
        })
    }

    forgotPassword(req,res){
        const email = req.body.userId;

        let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if(!isValid){
            res.status(400).send("Not Valid Email")
        }

        User.findOne({
            userId:email
        }).then((user)=>{
            const token = Authentication.generateToken(user)
            if(Mailer.sentPasswordResetMail(user.userId , token)){
                res.send("Email Sent")
            }else{
                res.status(400).send("Error")
            };
        }).catch(err=>{console.log(err)
        res.status(400).send("Error")
        })
    }


    resetPassword(req,res){
        const email = req.body.userId;
        const password = req.body.password;
        User.findOneAndUpdate({
            userId:email
        },
        {
            $set:{password:password}
        },
        { new: true }
        ).then((user) => {
            if (!user) {
              return res.status(404).send("User not found");
            }      
            return res.status(200).send("Password updated");
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).send("Error");
          });
    }
}