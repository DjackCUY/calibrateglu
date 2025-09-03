import mysql from "mysql2/promise";

export default async function handler(req, res) {
  try {
    const conn = await mysql.createConnection({
      host: "sql12.freesqldatabase.com",
      user: "sql12797219",
      password: "sql12797219",
      database: "sql12797219",
      port: 3306
    });

    const [rows] = await conn.execute("SELECT * FROM readings ORDER BY time DESC");

    await conn.end();

    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB error", detail: err.message });
  }
}
