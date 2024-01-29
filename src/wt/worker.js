import {
  parentPort, workerData,
} from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  let res = {};
  const data = workerData.data.toString().trim();
  if (!data) {
    res = {
      status: 'error',
      data: null
    }
  }
  let isNumber = !/[^\d]+/g.test(data);

  if (!isNumber) {
    res = {
      status: 'error',
      data: null
    }
  } else {
    res = {
      status: 'resolved',
      data: nthFibonacci(workerData.data)
    }
  }
  parentPort.postMessage(res);
};

sendResult();