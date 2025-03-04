import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url'

const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../Client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/dist', 'index.html')); 
});






const port = 80;
app.listen(port, () => {
    console.log("Listening on port: " + port);
})