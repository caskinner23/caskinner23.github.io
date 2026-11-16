/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build plain HTML/CSS/JS files that GitHub Pages can serve (no server needed).
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
