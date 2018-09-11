import * as path from 'path'
import * as webpack from 'webpack'

export const commonConfig: webpack.Configuration = {
  entry: './main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@app': './app'
    }
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist')
  }
}
