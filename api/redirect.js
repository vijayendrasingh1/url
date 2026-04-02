import { kv } from '@vercel/kv';

export default async function handler(req, res) {

  const id = req.url.slice(1);

  const data = await kv.get(id);

  if (!data) {
    return res.status(404).send("Invalid Link");
  }

  let obj = JSON.parse(data);

  obj.clicks++;

  await kv.set(id, JSON.stringify(obj));

  res.writeHead(302, {
    Location: obj.url
  });
  res.end();
}
