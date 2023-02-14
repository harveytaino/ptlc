/** @type {import('next').NextConfig} */

module.exports = {
  publicRuntimeConfig: {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE: process.env.EMAIL_TEMPLATE,
    EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: false,
      },
    ]
  },
}
