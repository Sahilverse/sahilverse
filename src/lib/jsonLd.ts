import { siteConfig } from './siteConfig'

export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: ['Sahilverse', 'sahilverse'],
    url: siteConfig.url,
    image: `${siteConfig.url}/portrait.png`,
    email: siteConfig.email,
    jobTitle: 'Software Engineer',
    description: siteConfig.description,
    knowsAbout: [
      'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 'Django', 'Express.js', 'PostgreSQL', 'MongoDB', 'Docker',
      'Machine Learning', 'Full-Stack Development', 'Software Engineering',
      'Nepal',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
      addressLocality: 'Sundarharaincha',
    },
    sameAs: Object.values(siteConfig.socials),
  }
}

const AUTHOR_REF = {
  '@type': 'Person',
  '@id': siteConfig.url,
  name: siteConfig.name,
} as const

export function buildProjectsJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Devio',
      description:
        'Full-scale developer learning platform with isolated multi-language code execution, GPU-accelerated video transcoding, CTF lab orchestration, real-time collaboration, and gamification. 78% of surveyed users said they\'d use it.',
      url: 'https://devio.live',
      applicationCategory: 'EducationalApplication',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: AUTHOR_REF,
      datePublished: '2025',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'eSewa Python SDK',
      description:
        "Open-source Python package for integrating Nepal's primary payment gateway into any application. Framework-agnostic. 4,200+ total downloads, 350+ monthly installs on PyPI.",
      url: 'https://pypi.org/project/esewa',
      downloadUrl: 'https://pypi.org/project/esewa',
      applicationCategory: 'DeveloperApplication',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: AUTHOR_REF,
      datePublished: '2025',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Deepfake Detection System',
      description:
        'Multimodal deepfake detection using spatial CNN (EfficientNet-B2) and frequency-domain CNN (FFT + ResNet-18) fused through a custom Cross-Attention architecture. 95% accuracy, 0.99 AUC on FaceForensics++.',
      url: 'https://github.com/sahilverse/Deepfake-Detection',
      applicationCategory: 'DeveloperApplication',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: AUTHOR_REF,
      datePublished: '2026',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'NepDai',
      description:
        'A programming language with Nepali-keyword syntax, built from scratch in TypeScript. Custom lexer, recursive-descent parser, tree-walking interpreter, and CLI with REPL, AST viewer, and token inspector. Published as a global npm package (npm install -g nepdai).',
      url: 'https://nepdai.vercel.app',
      applicationCategory: 'DeveloperApplication',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: AUTHOR_REF,
      datePublished: '2025',
    },
  ]
}

export function buildFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Sahil Dahal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sahil Dahal is a software engineer from Nepal, also known as Sahilverse. Self-taught since 2021, shipping to production since 2024. He builds full-stack systems, machine learning models, and production infrastructure. His work includes Devio (a developer learning platform), a deepfake detection system with 95% accuracy, and an open-source Python package with 4,200+ downloads.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Sahilverse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sahilverse is the personal brand of Sahil Dahal, a software engineer from Nepal. It represents his work across full-stack web development, machine learning, and systems engineering. The official website is sahildahal.com.np.',
        },
      },
      {
        '@type': 'Question',
        name: 'What has Sahil Dahal built?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sahil Dahal has built Devio (a full-scale developer learning platform, 78% user satisfaction), the eSewa Python SDK (4,200+ PyPI downloads, 350+ monthly installs), a Deepfake Detection System (95% accuracy, 0.99 AUC on FaceForensics++), and NepDai (a programming language with Nepali-keyword syntax published to npm), among other projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Sahil Dahal available for hire?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Sahil Dahal is open to software engineering roles, consulting, and freelance projects. He can be reached at ${siteConfig.email} or through ${siteConfig.url}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Sahil Dahal use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sahil Dahal works with TypeScript, Python, C#, C++, React, Next.js, Node.js, NestJS, Django, ASP.NET Core, Docker, Redis, PostgreSQL, MongoDB, PyTorch, and OpenCV.',
        },
      },
    ],
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
