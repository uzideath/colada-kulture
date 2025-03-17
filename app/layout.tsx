import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Colada Kulture',
  description: 'Mobile coffee cart service for corporate events, weddings, parties, and more. Elevate your gathering with freshly brewed specialty coffee from Colada Kulture.',
  generator: 'Next.js',
  openGraph: {
    title: 'Colada Kulture',
    description: 'Mobile coffee cart service for corporate events, weddings, parties, and more.',
    url: 'https://coladakulture.com',
    siteName: 'Colada Kulture',
    images: [
      {
        url: 'https://media.discordapp.net/attachments/1308465432574824471/1351255643226636411/header1.png?ex=67d9b662&is=67d864e2&hm=5579cfd537b0de5c2ede17c8189a044e70cb80a6cfceab31a517f835a76b2383&=&format=webp&quality=lossless&width=1052&height=1052',
        width: 1200,
        height: 630,
        alt: 'Colada Kulture - Specialty Coffee Service',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colada Kulture',
    description: 'Mobile coffee cart service for corporate events, weddings, parties, and more.',
    images: ['https://media.discordapp.net/attachments/1308465432574824471/1351255643226636411/header1.png?ex=67d9b662&is=67d864e2&hm=5579cfd537b0de5c2ede17c8189a044e70cb80a6cfceab31a517f835a76b2383&=&format=webp&quality=lossless&width=1052&height=1052'],
  },
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
