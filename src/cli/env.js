import process from 'node:process';

const parseEnv = () => {
  const vars = process.env;

  const rssVars = [];
  Object.keys(vars).filter((data) => {
    if (!data.indexOf('RSS_')) {
      rssVars.push(`${data}=${process.env[data]}`);
    }
  });
  console.log(rssVars.join('; '));
};

parseEnv();