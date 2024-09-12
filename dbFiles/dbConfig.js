import autoprefixer from "autoprefixer";
const {data} = autoprefixer;

const config = {
    user: 'Etienne',
    password: 'Etienne2193',
    server: 'DESKTOP-QFCUDM1',
    database: 'student_tables',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}
export default config;