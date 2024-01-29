import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const errorMsg = 'FS operation failed';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw new Error(errorMsg);
    }

    console.log(data.toString());
  })
};

await read();