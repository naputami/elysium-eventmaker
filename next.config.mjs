/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "pub-f77eb0b23bad4fd184860bda49426cd5.r2.dev",
                pathname: "/**",
                protocol: "https",
            },
        ],
    },
};

export default nextConfig;