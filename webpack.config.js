const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 4000,
    historyApiFallback: true,
  },
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].js',
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'async',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          },
        }, ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new Dotenv(),
  ],
};
