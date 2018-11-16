const path = require('path');

const host = 'http://test.emooc.com:6900';
module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '登录',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  devServer: {
    open: true,
    compress: true,

    proxy: {
      '/api': {
        target: host,
        pathRewrite: { '^/api': '' },
      },
      '/assetsView': {
        target: host,
      },
      '/videoView': {
        target: host,
      },
      '/videoConv': {
        target: host,
      },
      '/docView': {
        target: host,
      },
      '/dataDepot': {
        target: host,
      },
      '/settings': {
        target: host,
      },
    },
  },

  baseUrl: '',
  outputDir: 'pagesV2',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/less/variables.less'),
        path.resolve(__dirname, 'src/less/base.less'),
        path.resolve(__dirname, 'src/less/mixins.less'),
      ],
    },
  },

};
