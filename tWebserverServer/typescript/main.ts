import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Serve static files from the browser folder
app.use(express.static(path.resolve(__dirname, "../../tWebserverBrowser")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../tWebserverBrowser/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});