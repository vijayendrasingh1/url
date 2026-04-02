import fs from "fs";

export default function handler(req, res) {

  const data = JSON.parse(fs.readFileSync("./data/links.json"));

  res.send(data);
}
