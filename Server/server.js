import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

/**
 * app comes with a .use() method that has a few methods 
 * Takes 1 arg: the middleware you wat to run
 * 
 * The client is the user's computer, so .use will basically send any file you put in the arg 
 */
app.use(express.static(path.join(__dirname + '/Client/public')));




/**
 * .get() has a few methods:
 * 1. GET - Read 
 * 2. POST - Create
 * 3. PUT - Update
 * 4. DELETE - Delete
 * 5. ALL - Will accept any method
 */
/**
 * Takes 2 arg:
 * 1. path
 * 2. Callback to run if an HTTP request that matchs The method above
 */
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Client/HomePage/index.html")
}) // fix this path because the path is saying that it is coming from ../ since it is in text format




app.listen(3000, () => {
    console.log("Listening on port: 3000");
});


/**
 * NOTES: 
 * path.join() is a node method the joins the url paths together.
 */