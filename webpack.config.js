const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist'                //tells webpack-dev-server where to look for the output files
    },
    /*                                  //usefull if there are more than one entry point
    optimization: {
        runtimeChunk: 'single',
    },
    */
};