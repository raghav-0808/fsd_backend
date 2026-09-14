const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Raghav Portfolio</title>
      <style>
        body { font-family: Arial; margin: 0; padding: 0; background: #f4f4f4; }
        header { background: #333; color: #fff; padding: 20px; text-align: center; }
        section { padding: 20px; }
        h2 { color: #333; }
        .box { background: #fff; margin: 20px 0; padding: 15px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <header>
        <h1>Raghav</h1>
        <p>2nd Year B.Tech CSE Student, ABES College Ghaziabad</p>
      </header>

      <section class="box">
        <h2>Skills</h2>
        <p>C++, Java, DSA, HTML, CSS, JavaScript, and more.</p>
      </section>

      <section class="box">
        <h2>Education</h2>
        <p><b>12th:</b> Dayawati Modi Public School, Modinagar (2023–2025)</p>
        <p><b>10th:</b> St. Teresa's Academy, Modinagar (2021–2023)</p>
      </section>

      <section class="box">
        <h2>Certifications</h2>
        <p>Scaler Certification in C++</p>
      </section>

      <section class="box">
        <h2>Projects</h2>
        <p>Animal Rescue Project (SIH 2026)</p>
      </section>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Portfolio running at http://localhost:3000/");
});
