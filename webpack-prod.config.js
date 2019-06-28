var webpack = require('webpack');

const common = {
  // Important! Do not remove ''. If you do, imports without
  // an extension won't work anymore!
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

module.exports = {
  entry: [
  // our entry file
  './gh-pages/src/bootStrap.js'
  ],
  output: {
    path: __dirname + '/target/webapp',
    filename: 'bundle.js',
    publicPath: "/"
  },
  devtool:'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules(?!\/react-awesome-svg)/,
              use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
      }
    ]
  },
  plugins: [
  ],
};
