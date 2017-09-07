import webpack from 'webpack'
import gutil from 'gulp-util'
import path from 'path'

const isProduction = gutil.env.env === 'production'

const webpackConfig = {
  entry: path.resolve(__dirname, `./src/javascripts/entries/*`),
  output: {
    path: path.resolve(__dirname, `./dist/`),
    filename: `bundler-[name].js`,
    libraryTarget: 'umd',
    library: 'autoamazing'
  },
  resolve: {
    extensions: [
      '.js',
      '.es6'
    ],
    alias: {
      Utils: path.resolve(__dirname, `./src/javascripts/utils/`),
      Functions: path.resolve(__dirname, `./src/javascripts/functions/`),
      Components: path.resolve(__dirname, `./src/javascripts/components/`)
    }
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /(\.es6|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

if (isProduction) {
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

export { webpackConfig }
