const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const globImporter = require('node-sass-glob-importer');
const devConfig = require('./webpack.config.dev');

const isDev = process.env.NODE_ENV === 'development';

const babelPresetEnvOptions = {
  useBuiltIns: 'usage',
  corejs: 3,
};

const transformRuntimeOptions = {
  corejs: false,
  regenerator: true,
};

const babelOptions = {
  presets: [
    ['@babel/preset-env', babelPresetEnvOptions],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', transformRuntimeOptions],
  ],
};

const babelReactOptions = {
  presets: [
    '@babel/react',
    ['@babel/preset-env', babelPresetEnvOptions],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', transformRuntimeOptions],
  ],
};

module.exports = () => merge(
  {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle-[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: babelOptions,
          }],
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: babelReactOptions,
          }],
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => {
                  const productionPlugins = [postcssPresetEnv(), cssnano()];
                  const devPlugins = [postcssPresetEnv()];

                  return isDev ? devPlugins : productionPlugins;
                },
              },
            }, {
              loader: 'sass-loader',
              options: {
                importer: globImporter(),
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          }],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          }],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!.gitkeep'],
        cleanStaleWebpackAssets: false,
      }),
      new MiniCssExtractPlugin({
        filename: 'bundle-[hash].css',
      }),
    ],
  },
  (isDev ? devConfig : {}),
);
