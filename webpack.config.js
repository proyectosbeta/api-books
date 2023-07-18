const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    index: path.resolve(__dirname, './app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  externals: [nodeExternals()],
  plugins: [new Dotenv(), new CleanWebpackPlugin()],
  resolve: {
    alias: {
      config: path.resolve(__dirname, './app/config'),
      controllers: path.resolve(__dirname, './app/controllers'),
      models: path.resolve(__dirname, './app/models'),
      services: path.resolve(__dirname, './app/services'),
      routes: path.resolve(__dirname, './app/v1/routes'),
    },
    modules: ['node_modules'],
  },
};
