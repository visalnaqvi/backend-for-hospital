import jwt from "jsonwebtoken"

export default class Authentication{

    //function to genrate jwt token
     static generateToken(user){
        const token = jwt.sign({
            userId:user.userId,
            role:user.role,
            name:user.name
        },
        "XPJ2u7E8XJ02TTDOdlKXBtyQfgJRjknN",
        {
            expiresIn:'10m'
        }
        )

        return token;
    }

    //function to verify a jwt token
    static verifyToken(req,res,next){
console.log("okokokoko")
        const token = req.headers['authorization'].replace("Bearer ","")
        if(!token){
            res.status(401).send("Unauthorized")
        }
        try{
           jwt.verify(token , "XPJ2u7E8XJ02TTDOdlKXBtyQfgJRjknN" )
           next()
        }catch(err){
            console.log(err)
            res.status(401).send("Unauthorized")
        }

    }
}