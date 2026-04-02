let links = {
  rtry: {
    wxo9ez: "https://google.com"
  }
};

export default function handler(req, res) {

  const parts = req.url.split("/");
  const folder = parts[1];
  const id = parts[2];

  if (links[folder] && links[folder][id]) {
    res.writeHead(302, {
      Location: links[folder][id]
    });
    res.end();
  } else {
    res.status(404).send("Invalid Link");
  }
}
