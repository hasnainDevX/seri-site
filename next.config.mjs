const nextConfig = {
  reactCompiler: false,
  images: {
    remotePatterns: [{protocol:'https',hostname:'cdn.sanity.io',pathname:'/images/zbxbb6jd/production/**'}],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [56, 112, 224, 288, 320],
    formats: ['image/webp'],
  },
  async headers() {
    return (process.env.VERCEL_ENV === 'preview' || process.env.SITE_NOINDEX === 'true') ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }] : []
  },
  async redirects() {
    return [
      { source: '/services/pmu-brows', destination: '/services/nano-combo-brows', permanent: true },
      { source: '/nano-combo-brows', destination: '/services/nano-combo-brows', permanent: true },
      { source: '/brow-lamination', destination: '/services/brow-lamination', permanent: true },
      { source: '/korean-lash-lift', destination: '/services/korean-lash-lift', permanent: true },
      { source: '/lash-extension', destination: '/services/lash-extensions', permanent: true },
    ]
  },
}
export default nextConfig
