import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "RSS",
    "short_name": "RSS",
    "description": "Roof Safety Solutions",
    "start_url": "/",
    "display": "standalone",
    "background_color": "white",
    "theme_color": "#000000",
    "icons": [
      {
        "src": "/logo192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/logo512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }
}