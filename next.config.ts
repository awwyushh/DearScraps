import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing',
        permanent: true, // Set to false if you want a temporary redirect
      },
    ];
  },
};

module.exports = nextConfig;


export default nextConfig;
