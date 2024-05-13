import { useState } from "react"
import toast from "react-hot-toast"



const useFileCreate = () =>{

    const [loading,setLoading] = useState(false)
    
    const fileCreate = async(title) =>{


        setLoading(true)
        try {

            const res = await fetch(`/api/editor/create`,{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({title})
            })

            const data = await res.json()

            if(data.error)
            {
                throw new Error(data.error)
            }

            return data._id
        } catch (error) {
            
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, fileCreate}
}

export default useFileCreate