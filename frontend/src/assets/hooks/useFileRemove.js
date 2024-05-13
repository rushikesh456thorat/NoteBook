import { useState } from "react"
import toast from "react-hot-toast"



const useFileRemove = () =>{

    const [loading,setLoading] = useState(false)
    
    const fileRemove = async(fileId) =>{


        setLoading(true)
        try {

            const res = await fetch(`/api/editor/remove/${fileId}`,{
                method: "POST",
                headers:{"Content-Type": "application/json"},
            })

            const data = await res.json()

            if(data.error)
            {
                throw new Error(data.error)
            }

            toast.success(data.message)
        } catch (error) {
            
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, fileRemove}
}

export default useFileRemove