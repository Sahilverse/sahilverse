import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/siteConfig'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0C10',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(231,233,237,0.1) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />

        {/* Signal glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 55% at 50% 40%, rgba(175,201,255,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
          <span
            style={{
              color: '#8A909B',
              fontSize: '15px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
            }}
          >
            SOFTWARE ENGINEER · NEPAL
          </span>

          <span
            style={{
              color: '#E7E9ED',
              fontSize: '104px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginTop: '8px',
            }}
          >
            SAHILVERSE
          </span>

          <span
            style={{
              color: '#AFC9FF',
              fontSize: '36px',
              fontWeight: 400,
              marginTop: '4px',
            }}
          >
            {siteConfig.name}
          </span>

          <span
            style={{
              color: '#8A909B',
              fontSize: '20px',
              marginTop: '16px',
              maxWidth: '680px',
            }}
          >
            Building since 2021. Shipping since 2024.
          </span>
        </div>

        {/* URL — bottom right */}
        <span
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            color: '#AFC9FF',
            fontSize: '15px',
            letterSpacing: '0.15em',
            fontFamily: 'monospace',
            opacity: 0.7,
          }}
        >
          sahildahal.com.np
        </span>

        {/* Signal bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: '#AFC9FF',
            opacity: 0.6,
          }}
        />
      </div>
    ),
    size,
  )
}
