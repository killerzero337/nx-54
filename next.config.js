/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dk30psegu",
        NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "hkhpkcfr"
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ]
    }

}

module.exports = nextConfig
