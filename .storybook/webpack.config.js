var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

// From https://github.com/s-panferov/awesome-typescript-loader
// If you want to use new paths and baseUrl feature of TS 2.0 please include TsConfigPathsPlugin.
// This feature is available only for webpack@2.1.
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  node: {
      fs: 'empty'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '..', 'src'),
      "node_modules",
    ],
    plugins: [
      new TsConfigPathsPlugin({
        configFileName: path.resolve(__dirname, '..', 'tsconfig.json'),
      })
    ]
  },
  module: {
    rules: [{
      test: [/\.(ts|tsx)$/],
      loader: "awesome-typescript-loader",
      options: {
        configFileName: path.resolve(__dirname, '..', 'tsconfig.json'),
      },
    }, {
      test: /\.css$/,
      include: path.join(__dirname, '..', 'src'),
      use: ['style-loader', {
        loader: 'typings-for-css-modules-loader?modules',
        options: {
          modules: true,
          namedExport: true,
          localIdentName: '[path][name]__[local]__[hash:base64:5]',
        }
      }]
    }, {
      test: /\.tpl.html/,
      loader: 'html-loader',
    }, {
      test: /\.(svg)(\?.+)?$/,
      loader: 'react-svg-loader'
    }, {
      test: /\.(ico|png|jpg|gif|eot|ttf|woff|woff2)(\?.+)?$/,
      loader: 'url-loader?limit=50000'
    }]
  },
}