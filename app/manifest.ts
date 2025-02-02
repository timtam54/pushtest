import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RSS',
    short_name: 'RSS',
    description: 'Roof Safety Solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: 'white',
    icons: [
      {
        src: '/logo192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}