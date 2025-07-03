const http = require("http");
const path = require("path");
const fs = require("fs").promises;
const PORT = 3000;

async function readPages(filepath) {
  try {
    const data = await fs.readFile(filepath, "utf-8");
    return data;
  } catch (err) {
    throw err;
  }
}

const printError = (res, err) => {
  console.error("error found", err);
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end("500 Internal Server Error");
};

const respondPage = async (res, filepath) => {
  const data = await readPages(filepath);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
};

const server = http.createServer(async (req, res) => {
  const ext = path.extname(req.url);
  const filepath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : ext ? req.url : req.url + ".html",
  );
  try {
    await respondPage(res, filepath);
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        await respondPage(res, path.join(__dirname, "404.html"));
      } catch (err) {
        printError(res, err);
      }
    } else {
      printError(res, err);
    }
  }
});

server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
