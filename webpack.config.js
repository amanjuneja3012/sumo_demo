'use strict';

var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ManifestPlugin    = require('webpack-manifest-plugin');
var fs                = require('fs');
var PROD              = process.env.NODE_ENV == 'production';

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin("[name].css"),
    new ManifestPlugin()
];

var loaders = [{
        test   : /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
    },            
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    // Optionally extract less files
    // or any other compile-to-css language
    {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }
];

var watch = true;
var config;

if (PROD) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings : false
            }
        })
    );
    watch=false;
    config = {
        module : {
            loaders:loaders
        },
        watch: watch,
        entry  :{
          main: ['./app/src/main/containers/main.jsx']
        },
        output : {
            path: path.join(__dirname,'app/dist/'),
            filename: '[name].[chunkhash].js',
            chunkFilename: '[name].[chunkhash].js'
        },
        plugins: plugins,
        resolve: {
            extensions: ['', '.js','.jsx']
        }
    };
} else {
    config = {
        module : {
            loaders:loaders
        },
        watch: watch,
        entry  :{
           main: ['./app/src/main/containers/main.jsx']
        },
        output : {
            path: path.join(__dirname,'app/dist/public/'),
            filename: '[name].bundle.js',
        },
        plugins: plugins,
        resolve: {
            extensions: ['', '.js','.jsx']
        }
    };
}  

module.exports = config;
