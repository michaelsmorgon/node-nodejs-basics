import path from 'node:path';
import http from 'node:http';
import fs from 'node:fs';
import { release, version } from 'os';
import { fileURLToPath } from "node:url";
import './files/c.js';

const random = Math.random();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let filePath;
if (random > 0.5) {
  filePath = path.join(__dirname, 'files', 'a.json');
} else {
  filePath = path.join(__dirname, 'files', 'b.json');
}
const rawData = fs.readFileSync(filePath);
export const unknownObject = JSON.parse(rawData);

const __filename = fileURLToPath(import.meta.url);
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Request accepted');
  res.end();
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});
