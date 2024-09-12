import express from 'express';
import getStudents, { createStudent, getMileage, createMileage, getMileageDaily, getMileageMonthly, getMileageTotal } from './dbFiles/dbOperation.js';
import cors from 'cors';
import student from './dbFiles/student.js';

const API_PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api', function(req, res) {
    console.log('API called');
  res.json({message:'Hello from the API'});
});

app.get('/students', function(req, res) {
    console.log('called students');
    getStudents().then(result => {
        res.json(result.recordset);
    });
});

app.get('/mileage', function(req, res) {
    console.log('called mileage');
    getMileage().then(result => {
        res.json(result.recordset);
    });
});

app.post('/mileage', function(req, res) {
    console.log('posted mileage');
    createMileage(req.body).then(result => {
        res.json(result);
    });
});

app.post('/quit', function(req, res) {
    console.log('called quit');
  res.json({message: 'Goodbye'});
});

app.get('/mileage/daily', function(req, res) {
    console.log('called daily mileage');
    getMileageDaily().then(result => {
        res.json(result.recordset);
    });
});

app.get('/mileage/monthly', function(req, res) {
    console.log('called monthly mileage');
    getMileageMonthly().then(result => {
        res.json(result.recordset);
    });
});

app.get('/mileage/total', function(req, res) {
    console.log('called total mileage');
    getMileageTotal().then(result => {
        res.json(result.recordset);
    });
});


// let Pam = new student("Pam Grace", "password");
// console.log(Pam);
// getStudents().then(res=>console.log(res.recordset));

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
//createStudent(Pam)
