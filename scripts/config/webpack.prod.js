const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.common');
const { ROOT_PATH } = require('../constant');

module.exports = merge(common, {
  target: 'browserslist',
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(ROOT_PATH, './build'),
    publicPath: './',
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].js',
    // 资源
    assetModuleFilename: 'assets/[name].[contenthash:8].[ext]'
  },
  plugins: [
    // 生产模式使用了MiniCssExtractPlugin.loader，则需要使用MiniCssExtractPlugin
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    })
    // 查看打包体积大小，启用一个本地服务器
    // new BundleAnalyzerPlugin()
  ],

  // 专门存放优化打包的配置
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      // JS压缩
      new TerserPlugin({
        extractComments: false, // 去除所有注释
        terserOptions: {
          compress: { pure_funcs: ['console.log'] } // 去除所有console.log函数
        }
      })
    ],
    // 代码分割
    splitChunks: {
      chunks: 'all',
      minSize: 0
    }
  }
});
