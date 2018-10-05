const path = require('path')

const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const projectDir = path.resolve(__dirname)
const srcDir = path.join(projectDir, 'src')
const publicDir = path.join(srcDir, 'server', 'public', 'js')
const mainAppEntryPoint = path.join(srcDir, 'frontend', 'index.lsc')
const ISDEV = process.env.NODE_ENV !== 'production'

const webpackOptions = {
  entry: mainAppEntryPoint,
  output: {
    filename: 'index.js',
    path: publicDir
  },
  mode: process.env.NODE_ENV,
  target: 'web',
  devtool: ISDEV ? 'source-map' : 'none',
  context: projectDir,
  module: {
    rules: [
      {
        test: /.lsc$/,
        exclude: [
          /(node_modules)/
        ],
        loader: 'babel-loader',
        options: {
          sourceMap: ISDEV,
          presets: [
            [
              "@lightscript",
              {
                "env": {
                  targets: { ie: 9 },
                  ignoreBrowserslistConfig: true,
                  useBuiltIns: false,
                  modules: false
                }
              }
            ]
          ],
          plugins: [
            // Polyfill Babel runtime
            ['@babel/plugin-transform-runtime',
              {
                corejs: false,
                helpers: false,
                regenerator: true,
              }
            ],
            // Allow the use of generators
            ['@babel/plugin-transform-regenerator',
              { async: false }
            ]
          ]
        }
      },
      {
        test: [/\.css$/, /\.scss$/, /\.sass$/, /\.styl$/, /\.less$/],
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.lsc', '.js']
  },
  optimization: {
    minimize: !ISDEV
  },
  plugins: [
    new webpack.DefinePlugin({ ISDEV }),
    new Dotenv({
      path: 'config/.env',
    }),
  ]
}

module.exports = webpackOptions
