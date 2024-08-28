// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入插件

module.exports = {
    entry: './src/index.js',  // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',             // 打包後的 JS 文件名稱
        library: 'PIXIEUI',                // 導出為全局變量 PIXIEUI
        libraryTarget: 'umd',              // 通用模塊定義（UMD）
        globalObject: 'this',
        publicPath: '/',                    // 設定公共資源路徑為根目錄
        clean: true                         // 清理 dist 文件夾
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,             // 處理 JavaScript 和 JSX 文件
                exclude: [
                    /node_modules/,              // 排除 node_modules
                    /submodules/  // 排除 src/submodules 目錄
                ],
                use: 'babel-loader'
            },
            {
                test: /\.css$/,                // 處理 CSS 文件
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2)$/,  // 處理字體文件
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',  // 指定輸出目錄和文件名
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 使用 public/index.html 作為模板
        }),
    ],
    devServer: {
        hot: true,
        port: 3000,
        open: true
    }
};