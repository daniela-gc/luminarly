// Imports: Dependencies
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
require("babel-register");

// Webpack Configuration
module.exports = {
  // Entry
  entry: './src/index.js',
  
  // Output
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },

  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // CSS Files
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ] 
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/mystyles.css'),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}
