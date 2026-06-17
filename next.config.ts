import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    // Turbopack's dev filesystem cache is on by default in Next 16.1+, but it
    // is still beta. On startup Turbopack deserializes this cache from `.next`
    // into memory — on this setup that step ran out of memory and crash-looped
    // ("Fatal javascript OOM ... during deserialization"). Disabling it for dev
    // removes that startup step entirely; dev still works, just without the
    // cross-session cache speedup.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
