/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
         protocol: "https",
         hostname: "nikearprod.vtexassets.com",
         pathname: "/assets/**",
      },
      {
      protocol: "https",
      hostname: "nikearprod.vtexassets.com",
      pathname: "/arquivos/**",
     }
    ],
  },
};

export default nextConfig;
  