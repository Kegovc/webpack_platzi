const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports =  {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
        precios: path.resolve(__dirname,'src/js/precios.js'),
        contacto: path.resolve(__dirname,'src/js/contacto.js'),
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'js/[name].js'
    },
    module:{
        rules:[
            // aqui van los loaders
            {
                test: /\.css$/,//que tipo de archivo quiero reconocer
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    use: "css-loader"
            }),//que loader se va a encatgar del archivo
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("css/[name].css")
    ]
}
