const webpack = require('webpack');

module.exports = {
  entry: {
    src: './src/index.js',
  },
  output: {
    path: './dist',
    publicPath: '/public',
    chunkFilename: '[chunkhash:12].js',
    filename: '[chunkhash:12].js',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: ['path/to/src'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=[hash:12].[ext]',
      },
    ],
  },
};
