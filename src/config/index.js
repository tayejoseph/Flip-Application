// @flow

const env = JSON.parse(JSON.stringify(process.env)).NODE_ENV;

interface Const {
  productionBaseURL: string;
  testBaseURL: string;
  env: string;
  isDev: boolean;
}

export const Constants: Const = {
  testBaseURL: 'https://myflipapp-297309.uc.r.appspot.com/api',
  env,
  isDev: env === 'development',
};
