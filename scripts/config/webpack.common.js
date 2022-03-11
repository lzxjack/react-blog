const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const { ROOT_PATH } = require('../constant');
const { isDevelopment, isProduction } = require('../env');
const { myAntd } = require('../antd-theme');

const getCssLoaders = () => {
  const cssLoaders = [
    // 开发模式使用style-loader，生产模式MiniCssExtractPlugin.loader
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          // 模块化类名，防止重复
          localIdentName: '[local]--[hash:base64:5]'
        },
        sourceMap: isDevelopment
      }
    }
  ];

  // 加css前缀的loader配置
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          isProduction && [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true
              }
            }
          ]
        ]
      }
    }
  };

  // 生产模式时，才需要加css前缀
  isProduction && cssLoaders.push(postcssLoader);

  return cssLoaders;
};

const getCustomLoaders = () => {
  const cssLoaders = [
    // 开发模式使用style-loader，生产模式MiniCssExtractPlugin.loader
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDevelopment
      }
    }
  ];

  // 加css前缀的loader配置
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          isProduction && [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true
              }
            }
          ]
        ]
      }
    }
  };

  // 生产模式时，才需要加css前缀
  isProduction && cssLoaders.push(postcssLoader);

  return cssLoaders;
};

const getAntdLessLoaders = () => [
  isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      sourceMap: isDevelopment
    }
  },
  {
    loader: 'less-loader',
    options: {
      sourceMap: isDevelopment,
      lessOptions: {
        // antd 自定义主题
        modifyVars: myAntd,
        javascriptEnabled: true
      }
    }
  }
];

module.exports = {
  entry: {
    index: path.resolve(ROOT_PATH, './src/index')
  },

  plugins: [
    // html模板
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, './public/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    // 打包显示进度条
    new WebpackBar(),
    // webpack打包不会有类型检查，强制ts类型检查
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(ROOT_PATH, './tsconfig.json')
      }
    }),
    // 复制不用动态导入的资源
    new CopyWebpackPlugin({
      patterns: [
        {
          context: 'public',
          from: 'assets/*',
          to: path.resolve(ROOT_PATH, './build'),
          toType: 'dir',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'] // **表示任意目录下
          }
        }
      ]
    }),
    // 自动删除上一次打包的产物
    new CleanWebpackPlugin(),
    // 将antd中的moment.js替换为day.js
    new AntdDayjsWebpackPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: getCssLoaders()
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          ...getCssLoaders(),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /src/,
        use: getAntdLessLoaders()
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /\.custom.scss$/],
        use: [
          ...getCssLoaders(),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.custom.scss$/,
        use: [
          ...getCustomLoaders(),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.(tsx?|js)$/, // ts\tsx\js
        loader: 'babel-loader',
        options: { cacheDirectory: true }, // 缓存公共文件
        exclude: /node_modules/
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        // 自动选择导出为单独文件还是url形式
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        // 分割为单独文件，并导出url
        type: 'asset/resource'
      }
    ]
  },

  // 路径配置别名
  resolve: {
    alias: {
      '@': path.resolve(ROOT_PATH, './src')
    },
    // 若没有写后缀时，依次从数组中查找相应后缀文件是否存在
    extensions: ['.tsx', '.ts', '.js', '.json'],
    fallback: { crypto: false }
  },

  // 缓存
  cache: {
    // 基于文件系统的持久化缓存
    type: 'filesystem',
    buildDependencies: {
      // 当配置文件发生变化时，缓存失效
      config: [__filename]
    }
  }
};
