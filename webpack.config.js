const path = require("path");
const eslintFormatter = require("eslint-friendly-formatter");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 打包环境
  mode: "development",
  // 文件入口
  entry: "./src/index.jsx",
  // 文件打包出口
  output: {
    // __dirname 指向webpack.config.js文件的绝对路径
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  // webpack-dev-server 能够用于快速开发应用程序
  devServer: {
    // contentBase不设置的话，默认是当前执行的目录，一般是项目根目录。会在项目根目录查找index.html文件
    // contentBase: path.resolve(__dirname, "dist"),
    // contentBase: "./",
    //一切服务都启用gzip 压缩
    compress: true, 
    // 端口号
    port: 8080, 
    // 默认打开页面
    open: true 
  },
  module: {
    rules: [
      {
      // 正则表达式
        test: /\.(js|jsx)$/,
        // node_modules目录下的文件除外
        exclude: /node_modules/,
        // 指定检查的目录
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "babel-loader",
            options: {
              // 据配置的目标浏览器或者运行环境来自动将ES2015+的代码转换为es5
              presets: ["@babel/preset-env"], 
              // 转化JSX语法
              plugins: ["@babel/plugin-transform-react-jsx"]
            }
          },
          {
            loader: "eslint-loader",
            options: {
              // 默认的错误提示方式
              formatter: eslintFormatter 
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    })
  ]
};