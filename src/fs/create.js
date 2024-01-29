import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from "node:url";

const create = async () => {
  const errorMsg = 'FS operation failed';
  const text = 'I am fresh and young';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, '/files', '/fresh.txt');
  
  fs.stat(filePath, (err) => {
    if (err === null) {
      throw new Error(errorMsg);
    }
  });

  fs.writeFile(filePath, text, (err) => {
    if (err) {
      throw new Error(errorMsg);
    }
  });
};

await create();