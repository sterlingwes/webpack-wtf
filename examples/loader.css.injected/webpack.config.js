module.exports = {
  entry: './entry',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ['style', 'css']
      }
    ]
  }
}
