import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = crypto.createHash('sha256').setEncoding('hex');

  fs.createReadStream(filePath)
    .pipe(hash)
    .on('finish', () => {
      console.log(hash.read());
    })
};

await calculateHash();