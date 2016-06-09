var path = require('path');

module.exports = {
  entry: "./static/src/index.js",
  output: {
    path: path.join(__dirname, '/static/dist'),
    filename: "bundle.js"
  },
  debug: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
    postLoaders: [
      {
        test: /\.js|jsx$/,
        loaders: ['es3ify-loader'],
      },
    ],
  }
};
