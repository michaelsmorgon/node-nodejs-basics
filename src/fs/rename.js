import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from "node:url";

const rename = async () => {
  const errorMsg = 'FS operation failed';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePathWrong = path.join(__dirname, '/files', 'wrongFilename.txt');
  const filePathCorrect = path.join(__dirname, '/files', 'properFilename.md');

  fs.rename(filePathWrong, filePathCorrect, (err) => {
    if (err) {
      throw new Error(errorMsg);
    }
  })
};

await rename();