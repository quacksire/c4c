/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-daisyui'],
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'api.unsplash.com', 'picsum.photos', 'source.unsplash.com'],
    },
}

module.exports = nextConfig