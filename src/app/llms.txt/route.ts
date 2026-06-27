import { siteConfig } from '@/lib/siteConfig'

const content = `# Sahil Dahal

> Sahil Dahal, also known as Sahilverse, is a software engineer from Nepal. Self-taught since 2021, shipping to production since 2024. He builds across the full stack — interfaces, servers, and the infrastructure keeping them running.

## Identity

- Full name: Sahil Dahal
- Also known as: Sahilverse, sahilverse
- Role: Software Engineer
- Location: Nepal
- Website: ${siteConfig.url}
- Building since: 2021
- Shipping since: 2024

## What he builds

Sahil works across web, systems, and machine learning. He builds full-stack platforms, open-source tooling, and ML models — not demos, but software that runs in production.

## Projects

### Devio (Flagship, 2025–26)
Full-scale developer learning platform. Isolated multi-language code execution, GPU-accelerated video transcoding via BullMQ, on-demand CTF lab orchestration, real-time collaboration, and gamification. Deployed on a self-managed VPS across 11 sprints. 78% of surveyed users said they'd use it.
URL: https://devio.live

### eSewa Python SDK (2025)
Open-source Python package for integrating Nepal's primary payment gateway into any application. Framework-agnostic, published to PyPI. 4,200+ total downloads, 350+ monthly installs.
URL: https://pypi.org/project/esewa

### Deepfake Detection System (2026)
Multimodal deepfake detection — spatial CNN (EfficientNet-B2) and frequency-domain CNN (FFT + ResNet-18) fused through a custom Cross-Attention architecture. 95% accuracy, 0.99 AUC on FaceForensics++.
URL: https://github.com/sahilverse/Deepfake-Detection

### NepDai (2025)
A programming language with Nepali-keyword syntax, built from scratch. Custom lexer, recursive-descent parser, and tree-walking evaluator. Published as a global npm package.
URL: https://nepdai.vercel.app

### Movie Ticket Booking (2024)
Full-stack cinema booking platform with interactive seat maps, eSewa payment integration, and QR-coded tickets. Prisma transactions ensure concurrent double-booking is structurally impossible.
URL: https://studioentertainment.vercel.app

### Dainiki (2026)
Cross-platform journaling application built with .NET MAUI and Blazor Hybrid. Runs natively on Windows, macOS, iOS, and Android — with mood tracking, tagging, and analytics.
URL: https://github.com/sahilverse/Dainiki_Sahil_Dahal

### TruthAdvisor Foundation (Client)
Designed and built the complete website for Truth Advisor Education Foundation. Live and in production.
URL: https://truthadvisorfoundation.com

### Oscar Khadka (Client)
Designed and built a live personal website for Advocate Oscar Khadka.
URL: https://oscarkhadka.com.np

## Technical Stack

Languages: TypeScript, Python, C#, C++, Java
Frontend: React, Next.js, React Native, Tailwind CSS
Backend: Node.js, Express, NestJS, Django REST, ASP.NET Core
Systems: Docker, Redis, BullMQ, MinIO, FFmpeg, Nginx, Linux
Databases: PostgreSQL, MongoDB
Machine Learning: PyTorch, OpenCV, EfficientNet, ResNet

## Links

- Homepage: ${siteConfig.url}
- GitHub: ${siteConfig.socials.github}
- LinkedIn: ${siteConfig.socials.linkedin}
- X / Twitter: ${siteConfig.socials.twitter}
- Instagram: ${siteConfig.socials.instagram}
- YouTube: ${siteConfig.socials.youtube}
- Email: ${siteConfig.email}
`

export function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
