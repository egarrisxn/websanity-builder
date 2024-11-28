export default function manifest() {
  return {
    name: 'WebSanity Builder',
    short_name: 'WSB',
    description: 'Builder your next site with Next.js & Sanity!',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
