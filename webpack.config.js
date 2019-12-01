const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const Dotenv = require('dotenv-webpack')

// directories
const rootDir = path.resolve(__dirname, './')
const srcDir = path.resolve(rootDir)
const distDir = path.resolve(rootDir, 'dist/assets/')

module.exports = {
  entry: [
    './main.js'
  ],
  output: {
    path: distDir,
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentedSyntax: true
              }
            }
          },
          {
            loader: 'sass-resources-loader',
            options: { resources: path.join(srcDir, 'assets/sass/global.sass') }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true }
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': srcDir,
      '~comp': path.join(srcDir, 'components')
    }
  },
  devServer: {
    proxy: {
      '/': 'http://feed-me-sugar.myshopify.com'
    }
  }
}
