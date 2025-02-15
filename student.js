import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name : String,
    age : Number,
    gender : String
});
export const Student = mongoose.model("students",studentSchema);

// export default Student;