module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // 环境变量（包含多个预定义的全局变量）
    browser: true,
    node: true,
  },
  globals: {
    // 全局变量（设置为 false 表示它不允许被重新赋值）
  },
  rules: {
    // 自定义规则
    // 禁止require
    'no-require-imports': false,
  },
};
