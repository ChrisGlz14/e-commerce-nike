/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'nikearprod.vtexassets.com',
                port: '',
                pathname: '/arquivos/ids/**',
            },
        ],
    },
};

export default nextConfig;
