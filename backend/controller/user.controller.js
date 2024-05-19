import Collections from "../model/collection.model.js";
import Files from "../model/file.model.js";



export const files = async (req ,res)=>{

      try{

           const authUser = req.user;

           const collection = await Collections.findOne({author: authUser._id});

           if(!collection)
           {
              return res.status(404).json({error: "You don't have any files"})
           }
           
           res.status(200).json(collection.files);

      }catch(error){
          console.log("Error in files user controller: ", error.message)
          return res.status(401).json({error: "Internal server error"})
      }

};

export const fileInfo = async (req,res)=>{
    try{
        
        const authUser = req.user;
        const {fileId} = req.body
        const collection = await Collections.findOne({author: authUser._id});
        if(!collection)
        {
           return res.status(404).json({error: "You don't have any files"})
        }
        if(!collection.files.includes(fileId))
        {
            return res.status(404).json({error: "You don't have this file"})
        }

        const file = await Files.findOne({_id: fileId});
        if(!file)
        {
            return res.status(404).json({error: "File not found"})
        }

        res.status(200).json({
            fileId : file._id, 
            fileName : file.fileName,
            createdDate: file.createdDate,
            modifiedDate: file.modifiedDate,
            size : file.size,                              //size is in bytes
        });


    }catch(error){
        console.log("Error in fileInfo user controller: ", error.message)
        return res.status(401).json({error: "Internal server error"})
    }
}


