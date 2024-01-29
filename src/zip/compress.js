import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const compress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const gsFilePath = path.join(__dirname, 'files', 'archive.gz');
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(gsFilePath);
  pipeline(readStream, zlib.createGzip(), writeStream);
};

await compress();