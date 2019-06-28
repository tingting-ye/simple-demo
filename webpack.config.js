const path = require('path');

module.exports = {
  // 打包环境
  mode: "development",
  // 文件入口
  entry: './src/index.jsx',
  // 文件打包出口
  output: {
    // __dirname 指向webpack.config.js文件的绝对路径
    path: path.resolve(__dirname,'dist'),
    filename:"bundle.js"
  },
  module: {
    rules: [
      {
        // 正则表达式
        test: /\.(js|jsx)$/,
        // node_modules目录下的文件除外
        exclude: /(node_modules|bower_components)/,
        use: {
          // loaders的元素执行顺序是从右往左
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // ES2015+转换为es5
            plugins: ['@babel/plugin-transform-react-jsx'] // 转化JSX语法
          }
        }
      }
    ]
  }
}