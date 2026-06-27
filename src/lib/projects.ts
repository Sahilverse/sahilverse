import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Movie Ticket Booking',
    year: '2024',
    blurb:
      'Full-stack cinema booking platform with interactive seat maps, eSewa payment integration, and QR-coded tickets. Prisma transactions ensure concurrent double-booking is structurally impossible.',
    mass: 'standard',
    lit: false,
    href: 'https://studioentertainment.vercel.app',
  },
  {
    title: 'NepDai',
    year: '2025',
    blurb:
      'A programming language with Nepali-keyword syntax, built from scratch. Complete pipeline: custom lexer, recursive-descent parser, and tree-walking evaluator. Published as a global npm package.',
    mass: 'standard',
    lit: false,
    href: 'https://nepdai.vercel.app',
  },
  {
    title: 'eSewa Python SDK',
    year: '2025',
    blurb:
      "Open-source Python package for integrating Nepal's primary payment gateway into any application. Framework-agnostic, published to PyPI — 4,200+ total downloads, 350+ monthly installs.",
    mass: 'shipped',
    lit: true,
    href: 'https://pypi.org/project/esewa',
  },
  {
    title: 'Devio',
    year: '2025–26',
    blurb:
      'Full-scale developer learning platform. Isolated multi-language code execution, GPU-accelerated video transcoding via BullMQ, on-demand CTF lab orchestration, real-time collaboration, and gamification — deployed on a self-managed VPS across 11 sprints. 78% of surveyed users said they\'d use it.',
    mass: 'flagship',
    lit: true,
    href: 'https://devio.live',
  },
  {
    title: 'Deepfake Detection System',
    year: '2026',
    blurb:
      'Multimodal deepfake detection — spatial CNN (EfficientNet-B2) and frequency-domain CNN (FFT + ResNet-18) fused through a custom Cross-Attention architecture with residual connections and Layer Norm. 95% accuracy, 0.99 AUC on FaceForensics++.',
    mass: 'showcase',
    lit: false,
    href: 'https://github.com/sahilverse/Deepfake-Detection',
  },
  {
    title: 'Dainiki',
    year: '2026',
    blurb:
      'Cross-platform journaling application built with .NET MAUI and Blazor Hybrid. Runs natively on Windows, macOS, iOS, and Android — with mood tracking, tagging, and analytics.',
    mass: 'standard',
    lit: false,
    href: 'https://github.com/sahilverse/Dainiki_Sahil_Dahal',
  },
  {
    title: 'TruthAdvisor Foundation',
    year: 'Client',
    blurb: 'Designed and built the complete website for Truth Advisor Education Foundation. Live and in production.',
    mass: 'shipped',
    lit: true,
    href: 'https://truthadvisorfoundation.com',
  },
  {
    title: 'Oscar Khadka',
    year: 'Client',
    blurb: 'Designed and built a live personal website for Advocate Oscar Khadka.',
    mass: 'shipped',
    lit: true,
    href: 'https://oscarkhadka.com.np',
  },
]
