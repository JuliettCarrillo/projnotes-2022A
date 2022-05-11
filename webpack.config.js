// Importando dependencia path
// dependencia del core de Node
const path = require('path');
//Plugin Webpack
constMiniCssEstractPlugin=require('mini-css-extract-plugin');
module.exports = {
  // 1. Especificar el archivo de entrada
  entry: './client/index.js',
  // 2. Especificar el archivo de salida
  output: {
    // 2.1 Ruta ansoluta de la salida
    path: path.resolve(__dirname, 'public'),
    // 2.2 Nombre del archivo de salida
    //Para poder ser multiplataforma es necesario concatenar las rutas con path
    filename: path.join('javascript','bundle.js'),
    //Path Publico
    publicPath:'/',

  },
  //3. Modulos
  module:{
    rules:[
      //3.1 Esta es la primera regla de babel
      {
        //en todos los archivos con terminacion JS se aplique esta regla
        test:/\.js$/,
        exclude:/node_modules/,
        use:[
          //3.1.1 primer stage (configurador)
          {
            loader:'babel-loader',
            options:{
              presets:[
                [
                '@babel/preset-env',{
                  modules:false,
                  useBuiltIns:"usage",
                  targets:'>0.25%, not dead',
                  corejs:3
                }
              ]
            ]
            }
          }
        ]
      },
      //3.2 Reglas para Css
      {
        test:/\.css$/,
        use:[constMiniCssEstractPlugin.loader]
      }
    ]
  },
  // 4. Plugins
  plugins:[new constMiniCssEstractPlugin({
    filename:path.join('stylesheets','style.css')
  })]
  // // 3. Configurando el servidor de desarrollo
  // devServer: {
  //   // 3.1 Folder de archivos estaticos
  //   static: path.join(__dirname, 'public'),
  //   // 3.2 Puerto del servidor de desarrollo
  //   // de WP (Webpack)
  //   port: 8080,
  //   // 3.3 Definiendo host
  //   host: 'localhost'
  //}
};