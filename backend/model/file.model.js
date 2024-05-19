import mongoose from "mongoose";


const fileSchema = new mongoose.Schema({

    fileName :{
        type: String,
        required: true
    },
    createdDate :{
        type: Date,
        required:true
    },
    modifiedDate :{
        type: Date,
        required:true,
    },
    size : {
        type: Number,
        required: true
    },
    content : {
        type: String,
        required: true
    }

});

const Files = mongoose.model("File", fileSchema);
export default Files;