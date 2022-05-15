const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 1 Entry point where to start bundling.
    entry: path.resolve(__dirname, './src/index.tsx'),
    // 2 Code transpilation using babel.
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts(x?))$/,
          exclude: /node-modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    // 3 Final directory where bundle will be placed.
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: 'bundle.js'
    },
    // 4 Plugins.
    plugins: [
        new CleanWebpackPlugin(), // Cleans prod files on every build (index.html & bundles)
        new HtmlWebpackPlugin({
          title: "TicTacToe",
          template: path.resolve(__dirname, "./src/index.html")  // Auto generates index.html inside /dist
    })],
    // 5 Directory where the files are served to the webpack-server.
    devServer: {
      static: path.resolve(__dirname,'./dist')
    }
};
