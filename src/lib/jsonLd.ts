import { siteConfig } from './siteConfig'

export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: ['Sahilverse', 'sahilverse'],
    url: siteConfig.url,
    jobTitle: 'Software Engineer',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
    },
    sameAs: Object.values(siteConfig.socials),
  }
}

export function buildWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.brand,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  }
}
