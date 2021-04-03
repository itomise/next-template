/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/
const isProd = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  distDir: isProd ? '.next-prod' : '.next',
  trailingSlash: true,
  pwa: {
    dest: 'public',
  },
})

module.exports = nextConfig
