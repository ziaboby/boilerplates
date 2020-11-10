const path = require('path'),
    pkjson = require('./package.json'),
    webpack = require('webpack'),
    ESLintPlugin = require('eslint-webpack-plugin');

const dockerWebpackDevServerSettings = process.env.IS_DOCKER ? {
    port: process.env.CLIENT_PORT,
    host: '0.0.0.0',
    disableHostCheck: true,
    watchOptions: {
        poll: true
    }
}
    : {}

module.exports = (env, argv) => {
    const filename = 'script' + (argv.mode === 'production' ? '.' + pkjson.version + '.min' : '') + '.js';
    return {
        entry: './src/index.tsx',
        output: {
            filename,
            path: path.resolve(__dirname, 'public')
        },
        resolve: {
            extensions: ['.jsx', '.js', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
            ]
        },
        stats: {
            // all: true,
            all: false,
            builtAt: true,
            cached: true,
            errors: true,
            errorDetails: true,
            logging: 'warn',
            moduleTrace: true,
            outputPath: true,
            //warnings: true       
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            ...dockerWebpackDevServerSettings
        },
        plugins: [
            new ESLintPlugin({ context: './src', extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
            new webpack.DefinePlugin({
                'process.env.SERVER_PORT': JSON.stringify(process.env.SERVER_PORT)
            })]
    };
};
