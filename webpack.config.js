const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',  // 輸出文件名
        library: 'PIXIEUI',  // 庫的名稱
        libraryTarget: 'umd',  // 使庫可以在多種環境中使用 (CommonJS, AMD, 全局變量)
        clean: true,  // 在每次打包時清理 dist 目錄
    },
    resolve: {
        alias: {
            '@fonts': path.resolve(__dirname, 'src/fonts'),  // 為字體文件夾設置一個別名
        },
        extensions: ['.js', '.jsx']
    },
    externals: {
        react: 'React',  // 將 react 設為外部依賴，避免重複打包
        'react-dom': 'ReactDOM',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,                // 處理 CSS 文件
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,  // 處理字體文件的規則
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',  // 指定輸出目錄和文件名
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    devServer: {

        hot: true,
        port: 3000,
        open: true
    }
}