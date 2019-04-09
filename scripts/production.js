/*eslint-disable */
'use strict';

process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('../config/webpack.prod');

webpack(config, (error, stats) => {
  if (error) {
    console.error(error.stack || error);
    if (error.details) {
      console.error(error.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  console.log(
    stats.toString({
      chunks: true, // Makes the build much quieter
      colors: true, // Shows colors in the console
    }),
  );
});
