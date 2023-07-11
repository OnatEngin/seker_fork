//database manipulasyonu icin burayi kullanacagim


const sqlite3 = require('sqlite3').verbose();

function qry_msg () {

    const db = new sqlite3.Database('./wwdata.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("DB connection successfull"); 
    });

    //db.run("INSERT INTO messages(body) VALUES ('${msg}')");

    /*
    db.get(imq, (err, row) => {
        if (err) {
        return console.error(err.message);
        }
        return row
        ? console.log(row.id, row.name)
        : console.log(`burada bisey yok`);
    
    });
    */

    console.log("DB ACİK QRY FONKSIYONU CALISIYOR");

    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("DB closed");
    });

}

module.exports = qry_msg;