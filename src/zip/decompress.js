import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const decompress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const gsFilePath = path.join(__dirname, 'files', 'archive.gz');
  const readStream = fs.createReadStream(gsFilePath);
  const writeStream = fs.createWriteStream(filePath);
  pipeline(readStream, zlib.createGunzip(), writeStream);
};

await decompress();