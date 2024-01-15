const express = require('express');
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./QTAXDB.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to QTAXDB db in sqlite');
    }
});

const app = express();

app.get('/', (req, res) => {
    res.send("hiii");
});

app.get('/all-logins', (req, res) => {
    db.all('SELECT * FROM login', (err, rows) => {
        if (err) {
            console.error(err.message);
        } else {
            // Handle the retrieved rows here
            res.json(rows)
        }
    });
});


app.listen(3000, () => {
    console.log("listening to port 3000");
});