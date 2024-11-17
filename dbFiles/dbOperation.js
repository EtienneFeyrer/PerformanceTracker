import e from 'express';
import config from './dbConfig.js';
import sql from 'mssql';

const getStudents = async () => {
    try {
        let pool = await sql.connect(config);
        let students = await pool.request().query('SELECT * FROM users')
        {/*console.log(students);*/}
        return students;
    } catch (error) {
        {/*console.log(error);*/}
    }
}

const createStudent = async (student) => {
    try {
        let pool = await sql.connect(config);
        let request = pool.request();

        // Enable IDENTITY_INSERT
        await request.query('SET IDENTITY_INSERT users ON');

        // Perform the insert operation
        let result = await request
            .input('username', sql.NVarChar, student.username)
            .input('password', sql.NVarChar, student.password)
            .query('INSERT INTO users (username, password) VALUES (@username, @password)');

        // Disable IDENTITY_INSERT
        await request.query('SET IDENTITY_INSERT users OFF');

        {/*console.log(result);*/}
        return result;
    } catch (error) {
        console.error('Error creating student:', error);
    }
}

//Opperartions for Mileage-Table

const getMileage = async () => {
    try {
        let pool = await sql.connect(config);
        let mileage = await pool.request().query('SELECT * FROM Mileage')
        {/*console.log(mileage);*/}
        return mileage;
    } catch (error) {
        console.log(error);
    }
}

const createMileage = async (mileage) => {
    try {
        let pool = await sql.connect(config);
        let request = pool.request();

        // Enable IDENTITY_INSERT
        await request.query('SET IDENTITY_INSERT Mileage ON');

        // Perform the insert operation
        let result = await request
            .input('Student_ID', sql.Int, mileage.Student_ID)
            .input('ENTRY_Date', sql.Date, mileage.ENTRY_Date)
            .input('Mileage', sql.Numeric, mileage.Mileage)
            .query('INSERT INTO Mileage (Student_ID, ENTRY_Date, Mileage) VALUES (@Student_ID, @ENTRY_Date, @Mileage)');

        // Disable IDENTITY_INSERT
        await request.query('SET IDENTITY_INSERT Mileage OFF');

        {/*console.log(result);*/}
        return result;
    } catch (error) {
        console.error('Error creating Mileage:', error);
    }
}

const getMileageDaily = async () => {
    try {
        let pool = await sql.connect(config);
        let dailymileage = await pool.request().query('SELECT * FROM StudentMileageSummaryPerDay' )
        {/*console.log(dailymileage);*/}
        return dailymileage;
    } catch (error) {
        console.log(error);
    }
}

const getMileageMonthly = async () => {
    try {
        let pool = await sql.connect(config);
        let Monthlymileage = await pool.request().query('SELECT * FROM StudentMileageSummaryPerMonth' )
        {/*console.log(Monthlymileage);*/}
        return Monthlymileage;
    } catch (error) {
        console.log(error);
    }
}

const getMileageTotal = async () => {
    try {
        let pool = await sql.connect(config);
        let Totalmileage = await pool.request().query('SELECT * FROM StudentMileageSummaryTotal' )
        {/*console.log(Totalmileage);*/}
        return Totalmileage;
    } catch (error) {
        console.log(error);
    }
}



export default getStudents;
export { createStudent };
export { getMileage };
export { createMileage };
export { getMileageDaily };
export { getMileageMonthly };
export { getMileageTotal };