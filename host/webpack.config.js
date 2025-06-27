const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    historyApiFallback: {
      index: '/index.html',
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9001,
    allowedHosts: 'all',
    devMiddleware: {
      writeToDisk: true,
    },
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.jsx', '.js', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'Host',
    }),
    new ModuleFederationPlugin({
      name: 'Host',
      remotes: {
        DashboardApp: 'DashboardApp@http://localhost:9002/remoteEntry.js',
        ListApp: 'ListApp@http://localhost:9004/remoteEntry.js',
        RegisterApp: 'RegisterApp@http://localhost:9003/remoteEntry.js',
        ModalRegister: 'RegisterApp@http://localhost:9003/remoteEntry.js',
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom'],
        },
      },
    }),
  ],
  target: 'web',
};
