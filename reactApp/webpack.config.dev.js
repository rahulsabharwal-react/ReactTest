'use strict';
const webpack = require("webpack");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

    //// PLUGGINS ////
// cleans 'dist' folder everytime before a new build
const CleanPLugin = new CleanWebpackPlugin(
    ['./assets/js']);
const HtmlPlugin = new HtmlWebpackPlugin({
    template: "index.html"
  });
module.exports = (env) => {
    // VARIABLES
    const jsIdentifier = './assets/js/[name].js';
    const plugins = [CleanPLugin, HtmlPlugin];

    // BUILDING WEBPACK
    const config = {};
    config.mode = env;
    config.resolve = {
        extensions: ['.js', '.jsx']
    };
    config.devtool = 'source-map';

    config.entry =
        {
            'mainReact.min': path.join(__dirname, "src/index.js")
        };
    config.output = {
        path: __dirname,
        filename: jsIdentifier,
        chunkFilename: jsIdentifier
    };

    config.optimization = {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-redux|formik|yup)[\\/]/,
                    name: 'vendorReact',
                    chunks: 'all',
                    priority: 20
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    mangle: false,
                    keep_classnames: true,
                    keep_fnames: true,
                    output: {
                        comments: false
                    }
                }
            })
        ]
    };

    config.plugins = plugins;

    config.module = {
        rules: [
            {
                test: /\.(js|jsx)$/, exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-3']
                    }
                }
            }
        ]
    };
    return config;
};