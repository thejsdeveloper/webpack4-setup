const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common.config.js');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(webpackBaseConfig, {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ]
    }
})
