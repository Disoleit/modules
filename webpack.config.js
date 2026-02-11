const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    // entry: './src/js/index.js',
    // output: {
    //     path: path.resolve(__dirname, './dist'),
    //     filename: 'app.bundle.js'
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCSSExtractPlugin()
    ]
}