const path = require('path');

module.exports =  {
    mode: 'development',
    entry: path.resolve(__dirname,'index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            // aqui van los loaders
            {
                test: /\.css$/,//que tipo de archivo quiero reconocer
                use: [
                    'style-loader',
                    'css-loader',
                ],//que loader se va a encatgar del archivo
            }
        ]
    }
}
