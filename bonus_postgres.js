var pgp = require('pg-promise')(/*options*/);

var cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'weather_db',
    user: 'postgres'
};
// alternative:
// var cn = 'postgres://username:password@host:port/database';

var db = pgp(cn); // database instance;

// select and return user name from id:
db.query('SELECT name FROM weather_history LIMIT 5')
    .then(data => {
        console.log(data); // print user name;
    })
    .catch(error => {
        console.log(error); // print the error;
    });