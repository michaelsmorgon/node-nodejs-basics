import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'node:path';

const spawnChildProcess = async (args) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'script.js');

  const child = fork(filePath, args);
  child.on('message', (message) => {
    console.log(`Main received message: ${message}`);
  });
  child.send(args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([5, 20, 30]);
