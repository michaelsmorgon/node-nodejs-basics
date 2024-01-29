import { argv } from 'node:process';

const parseArgs = () => {
  const props = [];
  const values = [];
  argv.forEach((data, ind) => {
    if (ind > 1) {
      if (!data.indexOf('--')) {
        props.push(data.replace('--', ''));
      } else {
        values.push(data);
      }
    }
  });

  const res = props.reduce((acc, data, index) => {
    acc.push(`${data} is ${values[index]}`);
    return acc;
  }, []);
  console.log(res.join(', '));
};

parseArgs();