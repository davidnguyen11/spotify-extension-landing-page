/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.tunease.com',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://www.tunease.com/contact',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: 'https://www.tunease.com/privacy-policy',
        permanent: true,
      },
    ]
  },
}
