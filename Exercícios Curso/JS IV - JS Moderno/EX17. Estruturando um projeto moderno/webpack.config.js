// webpack.config.js

const path = require('path')

module.exports = {
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist') // _dirname -> diretório atual
      },
      compress: true,
      port: 8000
    },
    entry: {
      index: './src/index.js'
    },
    mode: 'production',
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /.js$/,
        use: ['babel-loader']
      }]
    },
    output: {
      filename: '[name].min.js'
    }
  }