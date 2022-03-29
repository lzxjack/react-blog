const { override, fixBabelImports } = require('customize-cra');

const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'eval-cheap-module-source-map' : false;
  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  rewiredMap()
);
