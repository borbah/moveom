const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config
      .module
      .rule('svg')
      .uses
      .clear()
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    config
      .module
      .rule('vue')
      .uses
      .get('vue-loader')
      .tap(({ loaders, loaders: { scss }, ...options }) => ({
        ...options,
        loaders: {
          ...loaders,
          scss: [
            ...scss,
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  './src/assets/styles/_variables.scss',
                  './src/assets/styles/_mixins.scss',
                ],
              },
            },
          ],
        },
      }));

    config
      .resolve
      .alias
      .set('assets', path.resolve(__dirname, '.', 'src/assets'));
  },
  devServer: {
    disableHostCheck: true,
  },
};
