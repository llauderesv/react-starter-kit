/*eslint-disable */
'use strict';

process.env.NODE_ENV = 'development';

const PORT = 3001;

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev');

// Enable hot reload
config.entry.main.unshift(
  `webpack-dev-server/client?http://localhost:${PORT}/`,
  'webpack/hot/dev-server',
);

// Initialize a webpack configuration...
const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
  open: `http://localhost:${PORT}/`, // Automatically open browser when webpack was run
  publicPath: '/',
  historyApiFallback: true, // Enable routing in dev mode
  compress: true, // For optimization purposes
});

server.listen(PORT, 'localhost', function(error, result) {
  if (error) {
    return console.error(error);
  }

  console.log(`Listening at http://localhost:${PORT}/`);
});
