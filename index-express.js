const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.get(/.*/, (req, res, next) => {
  const ext = path.extname(req.path);
  const filepath = path.join(
    __dirname,
    req.path === "/" ? "index.html" : ext ? req.path : req.path + ".html",
  );
  res.sendFile(filepath, (err) => {
    if (err) {
      if (err.code === "ENOENT") res.sendFile(path.join(__dirname, "404.html"));
      else {
        next(err);
      }
    }
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
