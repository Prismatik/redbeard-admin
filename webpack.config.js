var webpack = require('webpack');

var environments = {
  development: {
    context: __dirname + '/src',

    entry: {
      javascript: './app.js',
      html: './index.html',
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        }
      ]
    },

    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    }
  },

  production: {
    context: __dirname + '/src',

    entry: {
      javascript: './app.js',
      html: './index.html',
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        }
      ]
    },

    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],

    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    }
  }
}

module.exports = environments[process.env.NODE_ENV] || environments.development;
