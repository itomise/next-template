/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/
const { resolve } = require('path')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  distDir: isProd ? '.next-prod' : '.next',
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src')
    return config
  },
  trailingSlash: true,
}

module.exports = nextConfig
