const webpack = require('webpack');
require('dotenv').config();
const withImages = require('next-images');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const nextConfig = {
    publicRuntimeConfig: {
        GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
    },
    typescript: {
        ignoreDevErrors: true,
    },
    poweredByHeader: false,
    webpack(config, options) {
        config.node = {
            fs: 'empty',
        };

        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});

        config.plugins.push(new webpack.DefinePlugin(env));

        config.module.rules.push({
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    publicPath: '/_next/static',
                    outputPath: '../public/static/images/',
                    name: '[name].[ext]',
                },
            },
        });

        config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    publicPath: '/_next/static',
                    outputPath: '../public/static/fonts/',
                    name: '[name].[ext]',
                },
            },
        });
        config.module.rules.push({
            test: /\.html$/,
            use: {
                loader: 'html-loader'
            }
        });
        // Resolve alias path
        if (config.resolve.plugins) {
            config.resolve.plugins.push(new TsconfigPathsPlugin());
        } else {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
        }

        return config;
    },
    withImages: withImages(),
    withBundleAnalyzer: require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
    }),
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    },
};

module.exports = nextConfig;