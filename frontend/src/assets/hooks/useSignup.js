/* eslint-disable no-unused-vars */
import {useState} from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'


const useSignup = () =>{

    const [loading, setLoading] = new useState(false)
    const {setAuthUser} = useAuthContext()

    const signup = async ({email,username,password,confirmPassword}) =>{
         
        const success = handleInputError({email,username,password,confirmPassword})
        
        if(!success) return

        setLoading(true)

        try{
            
            const res = await fetch("/api/auth/signup",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email,username,password,confirmPassword})
            })
            const data =await res.json();

            if(data.error)
            {
                throw new Error(data.error)
            }

            localStorage.setItem("NoteBook-User",JSON.stringify(data))
            
            setAuthUser(data);

            

        }catch (error){

           toast.error(error.message)

        }finally{
            setLoading(false)
        }
    };

    return {loading,signup}

} 

export default useSignup;

function handleInputError({email,username,password,confirmPassword}){

    if(!email || !username || !password || !confirmPassword){
        
        toast.error("Please fill all fields")
        return false
    }

    if (password != confirmPassword)
    {
        toast.error("Password & Confirm Password do not match!")
        return false
    }
    

    if(password.length < 8)
    {
        toast.error("Password must contain at least 8 characters !")
        return false

    }

    return true

}