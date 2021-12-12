/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/
const isProd = process.env.NODE_ENV === 'production'
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

const nextConfig = {
  trailingSlash: true,
  pwa: {
    disable: !isProd,
    dest: 'public',
  },
}

module.exports = withPlugins([withPWA], nextConfig)
