const db =require('./app.js');

const query = "SELECT * from login";
db.all(query, function(err,rows){
    if(err){
        throw err;
    }
    rows.forEach((row) => {
        console.log(row);
    })

})