//database manipulasyonu icin burayi kullanacagim

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./wwdata.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("DB connection successfull"); 
});

let sql = 'SELECT id, name FROM contacts';

db.get(sql, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    return row
      ? console.log(row.id, row.name)
      : console.log(`burada bisey yok`);
  
  });

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("DB closed");
});
