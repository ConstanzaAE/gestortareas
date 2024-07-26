const path = require('path');

module.exports = {
    entry: './src/index.js', //punto de entrada de la aplicacion
    output: {
        filename: 'bundle.js', //nombre dek archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida 
    },
    module: {
        rules: [
            {
                test: /\.css$/, //regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], // librerias loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, //regex para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //loader para pasar JS moderno a JS mas auntiguo para todos los navegadores 
                    options: {
                        presents: ['@babel/present-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //generar source maps para facilitar la depuracion
    devServer: {
        contenteBase: path.resolve(__dirname, 'dist'), //carpeta principal del servidor 
        compress: true, //habilitar la compresion gzip 
        port: 9000, //puerto del servidor de desarrollo 
    },
};