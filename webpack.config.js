const path = require ('path');
module.exports = {
    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname,'build/js'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}    
                ]
            }
        ]
    },
}