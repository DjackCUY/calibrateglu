import mysql from "mysql2/promise";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { nilai, jenis, timestamp, device_id } = req.body;

    if (!nilai || !jenis || !timestamp || !device_id) {
      return res.status(400).json({ error: "Data tidak lengkap" });
    }

    // koneksi ke freesqldatabase
    const conn = await mysql.createConnection({
      host: "sql12.freesqldatabase.com", // ganti sesuai detail db
      user: "sql12797219",
      password: "sql12797219",
      database: "sql12797219",
      port: 3306
    });

    // query insert
    await conn.execute(
      "INSERT INTO readings (nilai, jenis, time, device_id) VALUES (?, ?, ?, ?)",
      [nilai, jenis, timestamp, device_id]
    );

    await conn.end();

    res.status(200).json({ message: "Data berhasil disimpan" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB error", detail: err.message });
  }
}
