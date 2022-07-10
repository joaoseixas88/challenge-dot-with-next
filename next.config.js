/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images:{
		domains: ['picsum.photos', "github.com",'image.tmdb.org'],
		formats: ['image/avif', 'image/webp'],
	}
}

module.exports = nextConfig
