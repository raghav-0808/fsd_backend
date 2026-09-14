const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

let f = "products.json";

if (!fs.existsSync(f)) {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push({ id: i, name: "Product " + i, price: i * 10 });
  }
  fs.writeFileSync(f, JSON.stringify(arr));
}

app.get("/", (req, res) => {
  res.send("<h2>Welcome! Use /products to see data</h2>");
});

app.get("/products", (req, res) => {
  let d = JSON.parse(fs.readFileSync(f));
  res.json(d);
});

app.get("/products/:id", (req, res) => {
  let d = JSON.parse(fs.readFileSync(f));
  let p = d.find(x => x.id == req.params.id);
  if (p) res.json(p);
  else res.send("Not Found");
});

app.post("/products", (req, res) => {
  let d = JSON.parse(fs.readFileSync(f));
  let p = req.body;
  p.id = d.length + 1;
  d.push(p);
  fs.writeFileSync(f, JSON.stringify(d));
  res.send("Added: " + JSON.stringify(p));
});

app.put("/products/:id", (req, res) => {
  let d = JSON.parse(fs.readFileSync(f));
  let i = d.findIndex(x => x.id == req.params.id);
  if (i >= 0) {
    d[i] = { ...d[i], ...req.body };
    fs.writeFileSync(f, JSON.stringify(d));
    res.send("Updated: " + JSON.stringify(d[i]));
  } else res.send("Not Found");
});

app.delete("/products/:id", (req, res) => {
  let d = JSON.parse(fs.readFileSync(f));
  let p = d.find(x => x.id == req.params.id);
  d = d.filter(x => x.id != req.params.id);
  fs.writeFileSync(f, JSON.stringify(d));
  res.send("Deleted: " + JSON.stringify(p));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
