const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = "production" !== "production"

module.exports = {
    mode: "production",
    entry: {
        index: { import: "./src/index.js" }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/i, //only css
                use: [
                    // MiniCssExtractPlugin.loader, ## for production
                    'style-loader',
                    'css-loader',
                    "postcss-loader",
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/i, //only css
                use: [
                    // MiniCssExtractPlugin.loader, ## for production
                    'style-loader',
                    'css-loader',
                    "postcss-loader",
                    'sass-loader'
                ],
            },
        ],
    },
    output: {
        filename: "components.bundle.min.js",
        library: 'fstrComponents',
        libraryTarget: 'umd',
        clean: true
    },
    plugins: [].concat([new MiniCssExtractPlugin()]),
}