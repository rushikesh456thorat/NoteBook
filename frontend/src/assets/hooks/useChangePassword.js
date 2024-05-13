/* eslint-disable no-unused-vars */
import {useState} from 'react'
import toast from 'react-hot-toast'



const useChangePassword = () =>{

    const [loading, setLoading] = new useState(false)
    const [isChange, setIsChange] = new useState(false)

    const changePassword = async ({oldPassword,newPassword,confirmPassword}) =>{
         
        const success = handleInputError({oldPassword,newPassword,confirmPassword})
        
        if(!success) return

        setLoading(true)

        try{
            
            const res = await fetch("/api/auth/password/change",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({oldPassword,newPassword,confirmPassword})
            })
            const data =await res.json();

            if(data.error)
            {
                throw new Error(data.error)
            }

            
            toast.success(data.message)
            return true
            

        }catch (error){

           toast.error(error.message)
           setIsChange(false)
           return false

        }finally{
            setLoading(false)
        }
    };

    return {loading,isChange, changePassword}

} 

export default useChangePassword;

function handleInputError({oldPassword,newPassword,confirmPassword}){

    if( !oldPassword || !newPassword || !confirmPassword){
        
        toast.error("Please fill all fields")
        return false
    }

    if (newPassword != confirmPassword)
    {
        toast.error("Password & Confirm Password do not match!")
        return false
    }
    

    if(newPassword.length < 8)
    {
        toast.error("Password must contain at least 8 characters !")
        return false

    }

    return true

}