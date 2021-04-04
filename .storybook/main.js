/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const { resolve } = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(mdx|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: resolve(__dirname, '../src/components'),
      containers: resolve(__dirname, '../src/containers'),
      hooks: resolve(__dirname, '../src/hooks'),
      pages: resolve(__dirname, '../src/pages'),
      store: resolve(__dirname, '../src/store'),
      utils: resolve(__dirname, '../src/utils'),
      styles: resolve(__dirname, '../src/styles'),
    }
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [require.resolve('babel-loader')],
    })
    return config
  },
}
