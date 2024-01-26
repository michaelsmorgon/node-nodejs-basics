import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from "node:url";

const remove = async () => {
  const errorMsg = 'FS operation failed';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, '/files', 'fileToRemove.txt');

  fs.rm(filePath, (err) => {
    if (err) {
      throw new Error(errorMsg);
    }
  });
};

await remove();