import mongoose from "mongoose";


const fileSchema = new mongoose.Schema({

    fileName :{
        type: String,
        required: true
    },
    uuid : {
        type: String,
        required: true
    },
    createdDate :{
        type: Date,
        required:true
    },
    size : {
        type: Number,
        required: true
    },
    path : {
        type: String,
        required: true
    }

});

const Files = mongoose.model("File", fileSchema);
export default Files;