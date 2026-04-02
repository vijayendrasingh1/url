let links = {};

export default function handler(req, res) {

  const { folder, url } = req.query;

  const id = Math.random().toString(36).substring(2, 8);

  if (!links[folder]) links[folder] = {};

  links[folder][id] = {
    url: url,
    clicks: 0
  };

  res.send({
    shortLink: `${req.headers.host}/${folder}/${id}`
  });
}
