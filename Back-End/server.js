import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../Front-End/HomePage")));

app.listen(port, () => {
    console.log(`Server is running and listening on port ${port}.`);
    console.log("Connected...");
});