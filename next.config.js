/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
    },
})

module.exports = nextConfig
