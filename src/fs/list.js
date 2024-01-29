import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from "node:url";

const list = async () => {
  const errorMsg = 'FS operation failed';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dirPath = path.join(__dirname, '/files');

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      throw new Error(errorMsg);
    }
    files.forEach((file, index) => {
      console.log(`${index + 1}: ${file}`);
    });
  });
  
};

await list();