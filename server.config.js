// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {

  entry: path.resolve(__dirname, 'src/server/index.js'),

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

  tarjet: 'node',

  resolve: {
    extensions: ['*', '.js'],
  },
}
