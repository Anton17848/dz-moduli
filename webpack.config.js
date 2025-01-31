const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
   module: {
    rules: [
        {
            test: /\.txt$/,
            loader: 'raw-loader'
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
    ]
   },
   plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({})
   ]
}
