var path = require('path');

module.exports = {
  entry: "./fe/js/index.js",
  output: {
    path: path.join(__dirname, '/public/js'),
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
          presets: ['react', 'es2015'],
          cacheDirectory: true
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
