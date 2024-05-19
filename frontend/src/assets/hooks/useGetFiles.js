import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import useGetFileInfo from "./useGetFileInfo";
import useFiles from "../zustand/userFiles";



const useGetFiles = () => {

    const [loading, setLoading] = useState(false)

    const [files, setFiles] = useState([])
    const {getFileInfo} =  useGetFileInfo()
    const {reloadTrigger, sortBy, sortDirection} = useFiles()


    useEffect (()=>{

        const getFiles = async () => {
            setLoading(true)
            try {
    
                const res = await fetch("/api/user/files",{
                    method: "POST",
                    
                })
    
                const data = await res.json()
    
                if(data.error)
                {
                    throw new Error(data.error)
                }
                
                var tmp = await Promise.all(data.map(
                    (fileId) =>getFileInfo(fileId)
                    
                ))

                if (sortBy === "date") {
                    // Sort by createdDate
                     tmp.sort((a, b) => {
                      const dateA = new Date(a.modifiedDate).getTime();
                      const dateB = new Date(b.modifiedDate).getTime();
                      if (sortDirection === "asc") {
                        return dateA - dateB;
                      } else {
                        return dateB - dateA;
                      }
                    });
                  } else if (sortBy === "name") {
                    // Sort by name
                     tmp.sort((a, b) => {
                      const nameA = a.fileName.toLowerCase();
                      const nameB = b.fileName.toLowerCase();
                      if (sortDirection === "asc") {
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                      } else {
                        if (nameA > nameB) return -1;
                        if (nameA < nameB) return 1;
                        return 0;
                      }
                    });
                  } else {
                    // Invalid sortBy value, return unsorted array
                    console.error("Invalid sortBy value");
                     tmp;
                  }

                setFiles(tmp)

    
    
         } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
    
        }
        getFiles()
        

    },[reloadTrigger])

    
    return {loading,files}

}

export default useGetFiles;