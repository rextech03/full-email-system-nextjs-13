/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
},
disableExperimentalFeaturesWarning: true,
  typescript: {
    ignoreBuildErrors: true,
 },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            // hostname: 'images.unsplash.com',
           
          },
        ],
      },
}

module.exports = nextConfig
