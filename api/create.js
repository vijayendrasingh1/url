import fs from "fs";

export default function handler(req, res) {

  const { folder, url } = req.query;

  const file = "./data/links.json";
  let data = JSON.parse(fs.readFileSync(file));

  const id = Math.random().toString(36).substring(2, 8);

  if (!data[folder]) data[folder] = {};

  data[folder][id] = {
    url: url,
    clicks: 0
  };

  fs.writeFileSync(file, JSON.stringify(data, null, 2));

  res.send({
    shortLink: `${req.headers.host}/${folder}/${id}`
  });
}
