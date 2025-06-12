import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Serve static files from the browser folder
app.use(express.static(path.resolve(__dirname, "../../tWebserverBrowser")));

// Serve the main file directory
app.use(express.static(path.join(__dirname, '../../tWebserverBrowser')));

// Serve the main JavaScript file
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});