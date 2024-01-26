import fs from 'node:fs';
import path from 'node:path';

const copy = async () => {
  const errorMsg = 'FS operation failed';
  const dirPathFrom = path.resolve('./src/fs/files');
  const dirPathTo = path.resolve('./src/fs/files_copy');

  fs.stat(dirPathFrom, (err, stats) => {
    if (err !== null || !stats.isDirectory()) {
      throw new Error(errorMsg);
    }
  });

  fs.stat(dirPathTo, (err) => {
    if (err === null) {
      throw new Error(errorMsg);
    }
  });

  copyRecursive(dirPathFrom, dirPathTo);
};

const copyRecursive = (pathFrom, pathTo) => {
  fs.stat(pathFrom, (err, stats) => {
    if (err === null && stats.isDirectory()) {
      fs.mkdir(pathTo, (err) => {
        throwError(err);
      });
      fs.readdir(pathFrom, (err, files) => {
        throwError(err);
        files.forEach((file) => {
          copyRecursive(path.join(pathFrom, file), path.join(pathTo, file));
        });
      });
    } else {
      fs.copyFile(pathFrom, pathTo, (err) => {
        throwError(err);
      });
    }
  });
}

const throwError = (err) => {
  if (err) {
    throw new Error(errorMsg);
  }
}

await copy();
