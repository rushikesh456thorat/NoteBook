/* eslint-disable no-unused-vars */
import {useState} from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'


const useLogin = () =>{

    const [loading, setLoading] = new useState(false)
    const {setAuthUser} = useAuthContext()

    const login = async ({email,password}) =>{
         
        const success = (email || password)

        
        
        if(!success){ toast.error("Please fill all feilds"); return;}

        setLoading(true)

        try{
            
            const res = await fetch("/api/auth/login",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email,password})
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

    return {loading,login}

} 

export default useLogin;
