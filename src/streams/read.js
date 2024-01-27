import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  fs.createReadStream(filePath)
    .on('data', (chunk) => {
      process.stdout.write(chunk.toString());
    });
};

await read();