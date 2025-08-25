import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CYBERFUNK // 3D Neon Grid',
  description: 'Futuristic 3D cyberfunk landing with neon vibes and immersive parallax.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scanlines antialiased">
        {children}
      </body>
    </html>
  )
}
