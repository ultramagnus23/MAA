import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/calendar", destination: "/events", permanent: true },
      { source: "/transparency", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
