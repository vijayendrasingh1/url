import fs from "fs";

export default function handler(req, res) {

  const file = "./data/links.json";
  const data = JSON.parse(fs.readFileSync(file));

  const parts = req.url.split("/");
  const folder = parts[1];
  const id = parts[2];

  if (data[folder] && data[folder][id]) {

    data[folder][id].clicks++;

    fs.writeFileSync(file, JSON.stringify(data, null, 2));

    res.writeHead(302, {
      Location: data[folder][id].url
    });
    res.end();

  } else {
    res.status(404).send("Invalid Link");
  }
}
