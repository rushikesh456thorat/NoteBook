import { useState } from "react"
import toast from "react-hot-toast"



const useFileRetrive = () =>{

    const [loading,setLoading] = useState(false)

    const fileRetrive = async (fileId) =>{

        setLoading(true)
        try {
            

            const res = await fetch(`/api/editor/retrive/${fileId}`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
            })

            const data = await res.json()

            if(data.error)
            {
                throw new Error(data.error)
            }


            return data.content

            

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }

    }

    return {loading, fileRetrive}
}

export default useFileRetrive