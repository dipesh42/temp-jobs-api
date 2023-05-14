const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        requierd:[true,"Please provide company name"],
        maxlength:50
    },
    position: {
        type: String,
        requierd:[true,"Please provide position"],
        maxlength:100
    },
    status:{
        type: String,
        enum:['interview',"decline","pending"],
        default: "pending"
    },
    createdBy:{
        type : mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"Please provideuser"]
    }
},{timestamps:true});

module.exports = mongoose.model("Job",JobSchema);
