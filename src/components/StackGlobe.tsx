'use client'

import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'
import {
  siTypescript, siPython, siPrisma, siReact, siJupyter, siCplusplus,
  siNextdotjs, siNodedotjs, siExpress, siNestjs, siDjango, siDotnet,
  siTailwindcss, siPostgresql, siMongodb, siRedis, siDocker, siNginx,
  siLinux, siPytorch, siOpencv, siGit, siArduino, siFirebase, siSocketdotio,
} from 'simple-icons'
import type { GlobeIcon } from '@/types'

const ICON_DATA: GlobeIcon[] = [
  { name: 'TypeScript',   path: siTypescript.path   },
  { name: 'Python',       path: siPython.path       },
  { name: 'Prisma',       path: siPrisma.path       },
  { name: 'React',        path: siReact.path        },
  { name: 'Jupyter',      path: siJupyter.path      },
  { name: 'C++',          path: siCplusplus.path    },
  { name: 'Next.js',      path: siNextdotjs.path    },
  { name: 'Node.js',      path: siNodedotjs.path    },
  { name: 'Express',      path: siExpress.path      },
  { name: 'NestJS',       path: siNestjs.path       },
  { name: 'Django',       path: siDjango.path       },
  { name: '.NET',         path: siDotnet.path       },
  { name: 'Tailwind CSS', path: siTailwindcss.path  },
  { name: 'PostgreSQL',   path: siPostgresql.path   },
  { name: 'MongoDB',      path: siMongodb.path      },
  { name: 'Redis',        path: siRedis.path        },
  { name: 'Docker',       path: siDocker.path       },
  { name: 'Nginx',        path: siNginx.path        },
  { name: 'Linux',        path: siLinux.path        },
  { name: 'PyTorch',      path: siPytorch.path      },
  { name: 'OpenCV',       path: siOpencv.path       },
  { name: 'Git',          path: siGit.path          },
  { name: 'Arduino',      path: siArduino.path      },
  { name: 'Firebase',     path: siFirebase.path     },
  { name: 'Socket.io',    path: siSocketdotio.path  },
]

const SIZE = 500
const RADIUS = 200
const ICON_SIZE = 22
const CX = SIZE / 2
const CY = SIZE / 2

interface Point { x: number; y: number; z: number }

function fibonacciSphere(n: number, r: number): Point[] {
  const golden = (1 + Math.sqrt(5)) / 2
  return Array.from({ length: n }, (_, i) => {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / n)
    const phi = (2 * Math.PI * i) / golden
    return {
      x: r * Math.sin(theta) * Math.cos(phi),
      y: r * Math.sin(theta) * Math.sin(phi),
      z: r * Math.cos(theta),
    }
  })
}

function rotateY(p: Point, cos: number, sin: number): Point {
  return { x: p.x * cos + p.z * sin, y: p.y, z: -p.x * sin + p.z * cos }
}

function StaticFallback() {
  return (
    <div
      className="w-full rounded-full relative flex items-center justify-center"
      style={{ maxWidth: SIZE, aspectRatio: '1', border: '1px solid var(--line)' }}
      aria-label="Technology stack"
    >
      <div className="flex flex-wrap items-center justify-center gap-4 p-10">
        {ICON_DATA.slice(0, 12).map((icon) => (
          <svg key={icon.name} viewBox="0 0 24 24" width={20} height={20}
            fill="currentColor" className="text-muted/50" aria-label={icon.name}>
            <path d={icon.path} />
          </svg>
        ))}
      </div>
    </div>
  )
}

export function StackGlobe() {
  const prefersReduced = useReducedMotion()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const angleRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const visibleRef = useRef(false)
  const tickCount = useRef(0)
  const [globeScale, setGlobeScale] = useState(1)
  const [, forceUpdate] = useState(0)

  const basePositions = useMemo(() => fibonacciSphere(ICON_DATA.length, RADIUS), [])

  const tick = useCallback(() => {
    if (!visibleRef.current || document.hidden) {
      rafRef.current = requestAnimationFrame(tick)
      return
    }
    angleRef.current += 0.003
    tickCount.current += 1
    if (tickCount.current % 2 === 0) forceUpdate((n) => n + 1)
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  // Responsive scale — measure wrapper width and scale globe to fit
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const update = () => setGlobeScale(Math.min(1, el.offsetWidth / SIZE))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Intersection + RAF
  useEffect(() => {
    if (prefersReduced || !wrapperRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting },
      { threshold: 0.1 },
    )
    obs.observe(wrapperRef.current)
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      obs.disconnect()
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [prefersReduced, tick])

  if (prefersReduced) return <StaticFallback />

  const cos = Math.cos(angleRef.current)
  const sin = Math.sin(angleRef.current)
  const rotated = basePositions
    .map((p, i) => ({ ...rotateY(p, cos, sin), icon: ICON_DATA[i] }))
    .sort((a, b) => a.z - b.z)

  return (
    // Outer wrapper: measures available width, sets visible height from scale
    <div
      ref={wrapperRef}
      className="select-none"
      style={{ width: '100%', maxWidth: SIZE, height: SIZE * globeScale }}
    >
      {/* Inner canvas: always SIZE×SIZE, scaled to fit wrapper */}
      <div
        aria-label="Technology stack globe"
        style={{
          width: SIZE,
          height: SIZE,
          transform: `scale(${globeScale})`,
          transformOrigin: 'top left',
          position: 'relative',
        }}
      >
        {/* Globe ring */}
        <div
          className="absolute inset-0 rounded-full"
          aria-hidden
          style={{ border: '1px solid var(--line)', opacity: 0.4 }}
        />

        {rotated.map(({ x, y, z, icon }) => {
          const depth = (z + RADIUS) / (2 * RADIUS)
          const iconScale = 0.4 + depth * 0.7
          const opacity = 0.1 + depth * 0.75
          const color = depth > 0.6 ? '#AFC9FF' : '#8A909B'

          return (
            <div
              key={icon.name}
              className="absolute"
              title={icon.name}
              style={{
                left: CX + x - ICON_SIZE / 2,
                top: CY - y - ICON_SIZE / 2,
                width: ICON_SIZE,
                height: ICON_SIZE,
                transform: `scale(${iconScale})`,
                opacity,
                transformOrigin: 'center',
                color,
              }}
            >
              <svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="currentColor">
                <path d={icon.path} />
              </svg>
            </div>
          )
        })}
      </div>
    </div>
  )
}
