const Database = require('sqlite-async')

function execute(db) {
    // criar as tabelas do banco de dados.
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)