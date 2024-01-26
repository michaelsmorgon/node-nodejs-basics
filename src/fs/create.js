import fs from 'node:fs';
import path from 'node:path';

const create = async () => {
  const errorMsg = 'FS operation failed';
  const text = 'I am fresh and young';
  const filePath = path.resolve('./src/fs/files/fresh.txt');

  fs.stat(filePath, (err) => {
    if (err === null) {
      throw new Error(errorMsg);
    }
  });

  fs.writeFile(filePath, text, (err) => {
    if (err) {
      throw new Error(errorMsg);
    }
    console.log('Done');
  });
};

await create();