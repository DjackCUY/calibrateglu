import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/list")
      .then((res) => res.json())
      .then((rows) => setData(rows));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Data Glucose dari ESP32</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nilai</th>
            <th>Jenis</th>
            <th>Timestamp</th>
            <th>Device ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.id}</td>
              <td>{row.nilai}</td>
              <td>{row.jenis}</td>
              <td>{row.time}</td>
              <td>{row.device_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
