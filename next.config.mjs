/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{ hostname: "images.unsplash.com" },
        { hostname: "lh3.googleusercontent.com" },
        { hostname: "cdn11.bigcommerce.com" },
        ]
    },
};

export default nextConfig;
