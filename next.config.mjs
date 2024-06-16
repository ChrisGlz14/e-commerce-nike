/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'nikearprod.vtexassets.com',
          pathname: '/arquivos/ids/**',
        },
        {
          protocol: 'https',
          hostname: 'nikearprod.vtexassets.com',
          pathname: '/assets/vtex.file-manager-graphql/images/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  