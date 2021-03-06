const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.ts',
        touch: './src/touch.ts',
        video: './src/video.ts',
        // app: './src/framework/Framework.ts',
    },
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: '[name].bundle.js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            onlyCompileBundledFiles: true
                        }
                    }
                ],
            },

            {
                // STYLE
                test: /\.(sa|sc|c)ss|css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['> 0%'],
                                    cascade: false
                                }),
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            // {
            //     // DATA IMAGES
            //     test: /\.(png|jpe?g|svg)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192
            //             }
            //         }
            //     ],
            //     include: [
            //         path.resolve(__dirname, `src/icons`)
            //     ],
            // },
            {
                // IMAGES
                test: /\.(png|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]?[hash]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 85
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '80-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            // webp: {
                            //     quality: 75
                            // }
                        }
                    }
                ],
                include: [
                    path.resolve(__dirname, `src/img`)
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': `${__dirname}`,
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};