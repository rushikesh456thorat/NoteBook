import { useState } from "react"
import toast from "react-hot-toast";


const useGetFileInfo = () => {

    const [loading, setLoading] = useState(false);

    const getFileInfo = async (fileId) => {

       

        setLoading(true)
        try{

           const res = await fetch("/api/user/file/info",{
                method: "POST",
                body: JSON.stringify({fileId}),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();

            if(data.error)
            {
                throw new Error (data.error)
            }

            return data;

            

        }catch(error)
        {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }

    }
    return {loading, getFileInfo}
};

export default useGetFileInfo;
