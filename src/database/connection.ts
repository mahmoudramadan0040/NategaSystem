import db from '../database/index'
import Statistics from '../models/statistics.model';
import Student from '../models/student.model';
import Subject_grade from '../models/subject_grade.model';
import Subject_score from '../models/subject_score.model';

const connect = ()=>{
    Statistics
    Student
    Subject_grade
    Subject_score
    db.sync({
        logging:console.log,
        force:true
   }).then(() => {
        console.log('Connection has been established successfully.');
   }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
   });
}
export default connect