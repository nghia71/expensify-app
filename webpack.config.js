const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  // entry: './src/playground/redux-101.js',
  // entry: './src/playground/redux-expensify.js',
  // entry: './src/playground/hoc.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader', 
      options: {
        presets: [
          ['@babel/preset-env', { targets: "defaults" }],
          ['@babel/preset-react', { targets: "defaults" }],
        ],
        plugins: [
          ["@babel/plugin-proposal-class-properties", { "loose": true}],
        ]
      },
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
