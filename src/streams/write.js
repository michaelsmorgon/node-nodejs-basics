import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  process.stdin.pipe(fs.createWriteStream(filePath));
  process.stdin.resume();
};

await write();