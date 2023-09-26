import Authentication from "../../config/authentication.js"
import User from "./user.schema.js"
import jwt from "jsonwebtoken"
export default class UserController {

    //creates a new user and stores it in database
    signUp(req, res) {

        //checking if user already exists
        User.findOne({ userId: req.body.userId }).then(user => {
            if (user) {

                //if user already exists then return
                res.send("userId already exist pleas choose different userId")
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
                    res.send("error")
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
            req.session.token = token;
            res.send(token)
        }).catch(err => {
            console.log(err)
            res.send("error")
        })
    }
}