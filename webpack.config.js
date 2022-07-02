const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
module.exports = {
  mode: 'development',
  entry: '/frontend/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'backend/dist/public/scripts'),
    filename: '[name].[contenthash].js',
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: '/node_modules',
      },
      {
        test: /.(png|jpg|jpeg|webp)$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: () =>
        '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><div id="root"></div></body></html>',
      filename: 'index.html',
      filename: join(__dirname, 'backend/dist/public/index.html'),
    }),
  ],
};
