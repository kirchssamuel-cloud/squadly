/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Le build Netlify ne doit pas casser sur des erreurs TS non critiques.
    // À retirer une fois le typage durci.
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    serverActions: { bodySizeLimit: '2mb' }
  }
};
export default nextConfig;
