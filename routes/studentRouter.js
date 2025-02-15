import express from 'express';
// import { Student } from '../student.js';
import { getStudent, saveStudent, deleteStudent } from '../controllers/controller.js';

//Create a student router

export const studentRouter = express.Router();


studentRouter.get('/',getStudent);

studentRouter.post('/',saveStudent);

studentRouter.delete('/',deleteStudent);
