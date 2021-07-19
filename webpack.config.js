const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const babelRule = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: "babel-loader"
}

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    module: {
        rules: [babelRule]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new CopyWebpackPlugin({ patterns: [{ from: "./wasm/build/bin/wasm32/debugExecutable", to: "./"}] }),
        new CopyWebpackPlugin({ patterns: [{ from: "./public/manifest.json", to: "./"}] }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
