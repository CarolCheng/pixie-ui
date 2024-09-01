const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
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
                '@': path.resolve(__dirname, 'src'),  // 為字體文件夾設置一個別名
                '@fonts': path.resolve(__dirname, 'src/assets/fonts'),  // 為字體文件夾設置一個別名
                '@assets': path.resolve(__dirname, 'src/assets'),  // 為字體文件夾設置一個別名
            },
            extensions: ['.js', '.jsx']
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
                    test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'img/[name].[hash:8][ext]',  // 指定輸出目錄和文件名
                    },
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
        externals: isProduction ? {
            react: 'React',
            'react-dom': 'ReactDOM',
        } : {},
        devServer: {
            hot: true,
            port: 3000,
            open: true
        }
    }

}