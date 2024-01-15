const mysql = require ("mysql3");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root'
    database: "QTAX.db",
    password: "qtax"
});

mosule.exports = pool.promise();
