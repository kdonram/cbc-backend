import { Student } from "../student.js";

let arr = [];
export function getStudent(req,res){
    Student.find().then((StudentList)=>{
        StudentList.map((student)=>{
            arr.push(student.name);
        });
        res.send(arr);
    }).catch((error)=>{
        console.log(error);
    })
}

export function saveStudent(req,res){
    res.send("This is a post request.");
    const newStu = new Student(req.body);

    newStu.save().then(()=>{
        console.log("New student is created");
    }).catch((error)=>{
        console.log(error);
    });
}

export function deleteStudent(req,res){
    Student.deleteOne({name: req.body.name}).then(()=>{
        res.send(`Student ${req.body.name} has been deleted.`);
    });
}
