import os from 'os';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import path from 'node:path';

const performCalculations = async () => {
  let numberFib = 10;
  const cpus = os.cpus();
  const numbersOfCore = cpus.length;

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'worker.js');

  Promise.all(
    Array(numbersOfCore).fill().map((val, ind) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(filePath, {
          workerData: {
            data: numberFib++,
            index: ind
          }
        });
        worker.on('message', (res) => {
          resolve(res);
        });
      });
    })
  )
  .then((workerResult) => {
    console.log(workerResult);
  });
};

await performCalculations();