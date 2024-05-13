import path from "path";
import Files from "../model/file.model.js";
import Collections from "../model/collection.model.js"; 
import fs from "fs/promises";
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 function

export const create = async (req, res) => {
    try {
        const author = req.user._id;
        const { title } = req.body;

        let collection = await Collections.findOne({ author });
         
        if (!collection) {
            collection = await Collections.create({ author });
        }

        const fileId = uuidv4();

        const dataFilePath = path.join("", `userStorage/${fileId}.html`);

        const newFile = new Files({
            fileName: title,
            uuid: fileId,
            createdDate: new Date(),
            size: 0,
            path: dataFilePath,
        });

        await newFile.save();

        collection.files.push(newFile._id);
        await collection.save();

        await fs.writeFile(dataFilePath, "", 'utf8');

        return res.status(201).json({
            _id: newFile._id,
            fileName: newFile.fileName,
            createdDate: newFile.createdDate
        });
    } catch (error) {
        console.log("Error in create file controller", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const save = async (req, res) => {
    try {
        const {id: fileId } = req.params; 
        const { content } = req.body;
        const author = req.user._id;

        const collection = await Collections.findOne({ author });
         
        if (!collection) {
            return res.status(401).json({ error: "You don't have any collections" });
        }

        if (!collection.files.includes(fileId)) {
            //console.log("file: ", fileId, " not in collection: ", collection._id);
            return res.status(401).json({ error: "You don't have access to this file" });
        }

        const file = await Files.findOne({_id: fileId });
        
        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }

        await fs.writeFile(file.path, content, 'utf8');

        const stats = await fs.stat(file.path);
        file.size = stats.size;
        await file.save();

        return res.status(200).json({ message: "Content saved successfully" });

    } catch (error) {
        console.log("Error in save file controller", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const retrive = async (req, res) => {
    try {
        const { id: fileId } = req.params;
        const author = req.user._id;
        const collection = await Collections.findOne({ author });
        if (!collection) {
            return res.status(401).json({ error: "You don't have any collections" });
        }
        if (!collection.files.includes(fileId)) {
           // console.log("file: ", fileId, "Not in collection: ", collection._id);
            return res.status(401).json({ error: "You don't have access to this file" });
        }
        const file = await Files.findOne({ _id: fileId });
        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }
        const content = await fs.readFile(file.path, 'utf8');
        res.status(200).json({ content });
    }catch(error){
        console.log("Error in retrive file controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const remove = async(req, res) =>{
       try{
 
             const {id: fileId} = req.params;
             const author = req.user._id;
             const collection = await Collections.findOne({ author });

             if(!collection)
             {
                return res.status(401).json({error: "You don't have any collections"})  
             }

             if(!collection.files.includes(fileId))
             {
                return res.status(401).json({error: "You don't have access to this file or file is not present"})
             }

             

             
             collection.files.pull(fileId);
             await collection.save();

             const file = await Files.findOneAndDelete({_id: fileId}); 
             await fs.unlink(file.path);   

             res.status(200).json({message: `${file.fileName} deleted successfully `})

       }catch(error)
       {
          console.log("Error in delete file controller", error.message);
          return res.status(500).json({ error: "Internal server error"})
       }
};