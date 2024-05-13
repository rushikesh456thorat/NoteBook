import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utilis/genearateToken.js";

export const signup = async (req, res) => {    
    try{
        const {username,email,password,confirmPassword} = req.body;

        if(!username || !email ||  !password || !confirmPassword){
            return res.status(400).json({error: "Please fill all the fields"})
        }

        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match"})
        }

        const isUser = await User.findOne({username});

        if(isUser){
            return res.status(400).json({error: "Username already taken"})
        }

        const isEmail = await User.findOne({email});

        if(isEmail){
            return res.status(400).json({error: "User already exist with this email"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const profilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        /// Create a new user

        const newUser = new User({
            username,
            email,
            password : hashPassword,
            profilePic,
        });

        if (newUser) {
            
            await newUser.save();
            generateTokenAndSetCookie(newUser._id, res);

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic
            });
        }else{
            res.status(400).json({error: "Invalid User Data"})
        }

       
    }catch (error){
        console.log("Error in signup controller", error.message)
        res.status(400).json({error: "Internal server error"});
    }
};
export const login = async (req, res) => {  
    
    try{


        const {email, password} = req.body;
        

        const user = await User.findOne({email});  
        const isPasswordCorrect = await bcrypt.compare(password, user?.password ?? "");


        if(!user || !isPasswordCorrect)
        {
            return res.status(400).json({error: "Invalid Credentials"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePic: user.profilePic 
        });


    }catch (error)
    {
        console.log("Error in login controller", error.message)
        res.status(500).json({error: "Internal server error"});
    }
    
};
export const logout = (req, res) => {    
     

    try{

        res.cookie("notebook_jwt","", {maxAge:0});
        res.status(200).json({msg:"Logged out successfully! "});

    }catch(error)
    {
        console.log("Error in logout controller", error.message)
        res.status(500).json({error: "Internal server error"});
    }
};


export const changePassword = async (req,res)=>{
    try{
        const authUser = req.user;
        const {oldPassword, newPassword, confirmPassword} = req.body;

        const userPassword = await User.findOne({_id: authUser._id});

        if(!authUser)
        {
            return res.status(401).json({error: "You are not authenticated"})
        }

        if(!oldPassword || !newPassword || !confirmPassword){   
            return res.status(400).json({error: "Please fill all the fields"})
        }
        
        if(newPassword !== confirmPassword)
        {
            return res.status(400).json({error: "Passwords don't match"})
        }
        if(newPassword.length < 8)
        {
            return res.status(400).json({error: "Password must be at least 8 characters"})
        }
        if(oldPassword === newPassword)
        {
            return res.status(400).json({error: "New password can't be the same as old password"})
        }

        const isPasswordCorrect = await bcrypt.compare(oldPassword, userPassword.password);
        if(!isPasswordCorrect)
        {
            return res.status(400).json({error: "Invalid old password"})
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);
        await User.findByIdAndUpdate(authUser._id, {password: hashPassword});
        res.status(200).json({message: "Password changed successfully"});

    }catch(error){
        console.log("Error in changePassword user controller: ", error.message)
        return res.status(401).json({error: "Internal server error"})
    }
}