import autoprefixer from "autoprefixer";
const {data} = autoprefixer;

const config = {
    user: 'Etienne', //Student
    password: 'Etienne2193', //Schule123
    server: 'DESKTOP-R2C3227', //EC2AMAZ-Q9IFEPM,(local),DESKTOP-R2C3227
    database: 'student_tables', //student_tables
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}
export default config;
