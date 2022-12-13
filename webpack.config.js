const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist'                                                    //tells webpack-dev-server where to look for the output files
    },
    /*
    optimization: {                                                         //usefull if there are more than one entry point
        runtimeChunk: 'single',
    },
    */
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],         //here, webpack will apply loaders from last to first. (css then style)
            },
        ],
    },
};