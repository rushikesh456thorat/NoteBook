import jwt from 'jsonwebtoken';
import User from "../model/user.model.js"

const protectRoute = async (req,res,next) =>{
    try{
        const token = req.cookies.notebook_jwt
        if(!token) {
            return res.status(401).json({error: "Unautrized Error: No token found!"})
        }

        const decoded = jwt.verify( token , process.env.JWT_SECRET)

        if(!decoded)
        {
            return res.status(401).json({error: "Unautorized Error: Invalid Token!"})
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({error: "User not found!"})
        }
        req.user = user;
        next();


    }catch(error){
        console.log("Error in protectRoutes: ", error.message)
        return res.status(401).json({error: "Internal server error"})
    }
}

export default protectRoute