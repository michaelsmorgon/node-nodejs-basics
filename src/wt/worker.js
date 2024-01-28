import process from 'node:process';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  console.log('Please enter a Natural Number: ');

  // Begin reading from stdin so the process does not exit.
  process.stdin.on('data', (chunk) => {
    const data = chunk.toString().trim();
    if (!data) {
      return;
    }
    let isNumber = !/[^\d]+/g.test(data);

    if (!isNumber) {
      console.log('You should enter a Natural Number: ');
      return;
    }
    process.stdout.write('--------------------\n');
    console.log('You entered: ' + data);
    process.stdout.write(`Fibonacci result: ${nthFibonacci(data)}\n`);
    process.stdout.write('--------------------\n');
    process.stdout.write('Please enter a Natural Number: ');
  });
};

sendResult();