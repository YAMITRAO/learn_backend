const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    database:'learn_backend',
    user: 'root',
    password: "yADAV@12236",
})

module.exports = pool.promise();