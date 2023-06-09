import mongoose from "mongoose"



export const _exampleSchema_ = new mongoose.Schema({

    title:{
        type:String
    },
    content:{
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }

});