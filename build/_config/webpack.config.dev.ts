import * as webpackMerge from 'webpack-merge'
import { commonConfig } from './webpack.config.common'

export = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'source-map'
})
