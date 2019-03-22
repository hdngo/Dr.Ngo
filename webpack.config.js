const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',  
  entry: ['./src/index.js', './src/index.scss'],
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true
  },
  output: {
    filename: '[name].js', // use [name].[has].js for prod
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
  },
  module: {
      rules: [
          // Babel
          {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              }
          },
          // CSS
          {
              test: /\.(sa|sc|c)ss$/,
              use: [
                /* MiniCss for Prod, style-loader for dev */
                  MiniCssExtractPlugin.loader,
                //   'style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
              ]
          },
          // images
          {
              test: /\.(png|PNG|svg|jpg|gif|ico)$/,
              use: [
                  'file-loader'
              ]
          }
      ]
  },
  plugins: [
    // 
    //   new CleanWebpackPlugin(['dist']),
      new CopyPlugin([
      ]),
      new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
          options: {
              postcss: [
                  autoprefixer()
              ]
          }
      })
  ]
};