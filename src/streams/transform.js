import process from 'node:process';
import { Transform, pipeline } from 'stream';

const transform = async () => {
  const transf = new Transform({
    transform(chunk, enc, callback) {
      const reverse = chunk.toString().trim().split('').reverse().join('');
      callback(null, reverse + '\n');
    }
  });

  pipeline(
    process.stdin,
    transf,
    process.stdout,
    (err) => {
      console.log(err);
    }
  )
};

await transform();