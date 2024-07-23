const hostname = process.env.NEXT_PUBLIC_SERVER_URL
  ? process.env.NEXT_PUBLIC_SERVER_URL.split('https://')[1]
  : 'utfs.io';

if (!['utfs.io', 'localhost'].includes(hostname)) {
  throw new Error(`Invalid hostname: ${hostname}`);
}

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost', 'utfs.io'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname,
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
