import sqlite3 from "sqlite3";
import path from "path";

const __dirname = import.meta.dirname;

let db;

// Inicializar DB y crear tablas
export const db_initialize_create = async () => {
  return new Promise((resolve, reject) => {
    const filename = path.join(__dirname, "db", "data.db");

    db = new sqlite3.Database(filename, (err) => {
      if (err) {
        reject(err);
        return;
      }

      console.log("Connected to SQLite database");

      db.serialize(() => {
        // Tabla users
        db.run(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        // Tabla items
        db.run(`
          CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            owner_user_id INTEGER
          )
        `);

        resolve(db);
      });
    });
  });
};

// Obtener DB
export const get_db = () => {
  if (!db) {
    throw new Error("DB not initialized. Call db_initialize_create() first.");
  }

  return db;
};