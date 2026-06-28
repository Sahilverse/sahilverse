import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/siteConfig'
import { buildPersonJsonLd, buildWebsiteJsonLd, buildProjectsJsonLd, buildFaqJsonLd } from '@/lib/jsonLd'
import { Analytics } from '@vercel/analytics/next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Sahilverse`,
    template: `%s — ${siteConfig.name} — Sahilverse`,
  },
  description: siteConfig.description,
  keywords: [
    'Sahil Dahal', 'Sahilverse', 'software engineer', 'Nepal',
    'full-stack developer', 'machine learning', 'systems engineer',
    'backend developer', 'web developer Nepal',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'profile',
    url: siteConfig.url,
    siteName: 'Sahilverse',
    title: `${siteConfig.name} — Sahilverse`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Sahilverse_',
    creator: '@Sahilverse_',
    title: `${siteConfig.name} — Sahilverse`,
    description: siteConfig.description,
  },
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0A0C10',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPersonJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }} />
        {buildProjectsJsonLd().map((schema) => (
          <script key={schema.name} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
        <link rel="me" href={siteConfig.socials.github} />
        <link rel="me" href={siteConfig.socials.linkedin} />
        <link rel="me" href={siteConfig.socials.twitter} />
        <link rel="me" href={siteConfig.socials.instagram} />
        <link rel="me" href={siteConfig.socials.youtube} />
      </head>
      <body className="min-h-full bg-void text-foreground font-display antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
