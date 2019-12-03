const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/dev/deploy/dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/dev/deploy'),
        publicPath: 'https://localhost:9003/dist',
        https: true,
        port: 9003,
        hot: true
    }
};