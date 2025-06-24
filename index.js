const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const dbFilePath = 'wishlist.db';

async function main() {
  // Mit Datenbank verbinden
  const db = await sqlite.open({
    filename: dbFilePath,
    driver: sqlite3.Database,
  });

  // Daten aus Tabelle auslesen
  const products = await db.all('SELECT * FROM products');
  console.log(products);

  // Verbindung schließen
  await db.close();
}

main();
