'use client'

import dynamic from 'next/dynamic'

const StackGlobe = dynamic(() => import('./StackGlobe').then((m) => m.StackGlobe), {
  ssr: false,
  loading: () => (
    <div className="w-[340px] h-[340px] rounded-full opacity-10" style={{ border: '1px solid var(--line)' }} />
  ),
})

export function GlobeWrapper() {
  return <StackGlobe />
}
