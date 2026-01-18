import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    productionBrowserSourceMaps: true,
    experimental: {
        optimizePackageImports: ["lucide-react"],
    },
};

export default nextConfig;
