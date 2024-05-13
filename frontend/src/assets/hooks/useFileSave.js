import { useState } from "react"
import toast from "react-hot-toast"



const useFileSave = () =>{

    const [loading,setLoading] = useState(false)
    
    const fileSave = async(fileId,content) =>{


        setLoading(true)
        try {

            const res = await fetch(`/api/editor/save/${fileId}`,{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({content})
            })

            const data = await res.json()

            if(data.error)
            {
                throw new Error(data.error)
            }

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, fileSave}
}

export default useFileSave