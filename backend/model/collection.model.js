import mongoose from "mongoose";


const collectionSchema = new mongoose.Schema({
 
     author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
    files: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "File",
            default : [],
        }
    ]


})

const Collections = mongoose.model("Collection", collectionSchema);
export default Collections;