const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(" han g Hamza, Welcome to ArgoCD + Helm + GitHub Actions World!\n");
});

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});





