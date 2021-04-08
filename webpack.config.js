const path = require('path')

module.exports = {
  devServer: {
    contentBase: './dist',
    port: 3000,
  },

  devtool: 'inline-source-map',

  entry: path.resolve(__dirname, './src/client/index.js'),

  mode: 'development',

  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
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

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },

  resolve: {
    extensions: ['*', '.js', 'css'],
  },
}

/*
const browserConfig = {
  devtool: 'cheap-module-source-map',

  entry: path.resolve(__dirname, './src/client/index.js'),

  mode: 'development',

  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'public/media/[name].[ext]',
              publicPath: (url) => url.replace(/public/, ''),
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
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['*', '.js', 'css'],
  },
}

const serverConfig = {
  devtool: 'cheap-module-source-map',

  entry: path.resolve(__dirname, './src/server/index.js'),

  mode: 'development',

  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: (url) => url.replace(/public/, ''),
          emitFile: false,
        },
      },
      {
        test: /\.css$/,
        use: ['css-loader/locals'],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    extensions: ['*', '.js', 'css'],
  },

  target: 'node',
}

module.exports = [browserConfig, serverConfig]

module.exports = {
  devServer: {
    contentBase: './dist',
  },

  devtool: 'inline-source-map',

  entry: path.resolve(__dirname, './src/client/index.js'),

  mode: 'development',

  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
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

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },

  resolve: {
    extensions: ['*', '.js', 'css'],
  },
}
*/
