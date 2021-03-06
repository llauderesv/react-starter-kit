/*eslint-disable */
const resolvePath = require('./path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const IsDevMode = process.env.NODE_ENV.trim() !== 'production';

// Put hash in asset file names when the build is in production...
const assetFilename = IsDevMode ? '[name].[ext]' : '[name].[hash].[ext]';

// Create hash css filename when build in production...
const cssFilename = IsDevMode ? '[name].css' : '[name].[contenthash].css';
const cssChunkFilename = IsDevMode ? '[id].css' : '[id].[contenthash].css';

// Webpack list of plugins
let plugins = [
  new MiniCssExtractPlugin({
    filename: `styles/${cssFilename}`,
    chunkFilename: `styles/${cssChunkFilename}`,
  }),
  /**
   * Minified CSS compilation
   */
  new OptimizeCssAssetsPlugin({}),
  new HtmlWebpackPlugin({
    template: resolvePath('src', 'index.html'),
  }),
  new CleanWebpackPlugin(['build']),
];

if (IsDevMode) {
  // Enable Hot module for performance improvement during development
  plugins = plugins.concat(new webpack.HotModuleReplacementPlugin({}));
}

module.exports = {
  // Entry point where in webpack first looks and serve as main page
  entry: {
    main: ['babel-polyfill', resolvePath('src', 'index.jsx')],
  },
  // Remove file extension when importing JavaScript files or Modules
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: plugins,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 0,
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
          // name(module) {
          //   // get the name. E.g. node_modules/packageName/not/this/part.js
          //   // or node_modules/packageName
          //   const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

          //   // npm package names are URL-safe, but some servers don't like @ symbols
          //   return `npm.${packageName.replace('@', '')}`;
          // },
        },
        /**
         * Optimize CSS minification
         *
         */
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        /**
         * Create a separate js files for all
         * components that shared within the App.
         *
         * */
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.s?css$/,
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
          name: assetFilename,
          outputPath: 'assets/images',
        },
      },
      {
        test: /\.(otf|tff)$/i,
        loader: 'file-loader',
        options: {
          name: assetFilename,
          outputPath: 'assets/fonts',
        },
      },
    ],
  },
};
