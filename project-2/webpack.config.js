var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  "faker", "lodash", "react", "react-dom", "react-input-range",
  "react-redux", "react-router", "redux", "redux-form", "redux-thunk"
]

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules:[
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }

    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

//BABELRC file that instructs babel which pices of
//syntax try to transform inside of our code base

// babel-preset-env only takes care of es2015 to es5 transpilation

// we pass react so it knows how to handle the transpilation of jsx



//CONFIG

// purpose of exclude is to not run babel-loader on the node_modules
// node modules are already in esc5 so it is a waste of resources
//

//css-loader  :  allows webpack to read css files that are importated to our project

// styles-loader : takes all our styles modules and sticks them in our index.html as style tags




// plugins are like loaders but they look at the total sum.
// loader look at individual files.

//  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // })

    // this tells webpack to look at the total sum of all our project files
    // between our bundle entry point and our vendor_lips entry point
    // if there are any duplicates, pull them out and only add them to the vendor
    // entry point.
    //

    // names: ['vendor', 'manifest']
    // this tells webpack if anything has changed with the vendor



    // new HtmlWebpackPlugin({
    //   template: 'src/index.html'
    // })

    // this tells webpack to create our script tags inside of our index.html document
