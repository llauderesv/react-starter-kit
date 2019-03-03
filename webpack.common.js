const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const IsDevMode = process.env.NODE_ENV.trim() !== 'production';

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles/${
        IsDevMode ? '[name].css' : '[name].[contenthash].css'
      }`,
      chunkFilename: `styles/${
        IsDevMode ? '[id].css' : '[id].[contenthash].css'
      }`,
    }),
    new OptimizeCssAssetsPlugin({}),
    new HtmlWebpackPlugin({ template: path.relative(__dirname, 'index.html') }),
    new CleanWebpackPlugin(['dist']),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-3'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          IsDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        loader: 'file-loader',
        options: {
          name: IsDevMode ? '[name].[ext]' : '[name].[hash].[ext]',
          outputPath: 'assets/images',
        },
      },
    ],
  },
};
