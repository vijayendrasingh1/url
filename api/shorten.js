import { kv } from '@vercel/kv';

export default async function handler(req, res) {

  let { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL required" });
  }

  // auto https
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  const id = Math.random().toString(36).substring(2, 7);

  await kv.set(id, JSON.stringify({
    url: url,
    clicks: 0
  }));

  res.json({
    short: `${req.headers.host}/${id}`
  });
}
