// process: 当前node进程
// process.env: 系统环境的信息
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  isDevelopment,
  isProduction
};
