const path = require("path");
const eslintFormatter = require("eslint-friendly-formatter");

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
  module: {
    rules: [{
      enforce: "pre", // 编译前检查
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
      options: {
        formatter: eslintFormatter // 默认的错误提示方式
      },
      include: [path.resolve(__dirname, "src")] // 指定检查的目录
    },
    {
      // 正则表达式
      test: /\.(js|jsx)$/,
      // node_modules目录下的文件除外
      exclude: /node_modules/,
      use: {
        // loaders的元素执行顺序是从右往左
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"], // ES2015+转换为es5
          plugins: ["@babel/plugin-transform-react-jsx"], // 转化JSX语法
          cacheDirectory: true // 利用缓存，提高性能
        }
      }
    }
    ]
  },
  devServer: {
    overlay: true
  }
};