var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'simen',
    database: 'iotqdev'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Sudah Konek');
});

module.exports = conn;