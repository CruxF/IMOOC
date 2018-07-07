// webpack打包前端资源(css、js、图片、字体等),减少HTTP请求
// path是node中的一个基本包，用来处理路径
const path = require('path')

// 引入html-webpack-plugin插件，自动将打包后js文件导入html文件中
const HTMLPlugin = require('html-webpack-plugin')

// 引入webpack
const webpack = require('webpack')

// 把非JS文件的其他文件单独打包，目的是为了提高web程序性能
const ExtractPlugin = require('extract-text-webpack-plugin')

// 检测NODE_ENV中的值
const isDev = process.env.NODE_ENV === 'development'
const config = {
  // 指明项目是运行在web浏览器中
  target: 'web',
  // 入口文件，设置为绝对路径
  entry: path.join(__dirname, 'src/index.js'),
  // 出口文件，设置为绝对路径，同时设置文件名
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  // 定义特殊文件处理规则
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader'
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '[name]-aaa.[ext]'
        }
      }]
    }]
  },
  plugins: [
    // DefinePlugin可以在编译时期创建全局变量,该特性适用于开发版本同线上版本在某些常量上有区别的场景
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ]
}
if(isDev) {
  config.module.rules.push({
    test: /\.styl/,
    use: ['style-loader', 'css-loader', {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      }
    }, 'stylus-loader']
  })
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    // 启动热更新
    hot: true
  }
  config.plugins.push(
  	new webpack.HotModuleReplacementPlugin(), 
  	new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.styl/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        }
      }, 'stylus-loader']
    })
  }, )
  config.plugins.push(
  	new ExtractPlugin('styles.[contentHash:8].css'), 
  	new webpack.optimize.CommonsChunkPlugin({
    	name: 'vendor'
  	}), 
  	new webpack.optimize.CommonsChunkPlugin({
    	name: 'runtime'
  	})
  )
}
module.exports = config