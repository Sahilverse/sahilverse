import { Background } from '@/components/background/Background'
import { Nav } from '@/components/Nav'
import { Hud } from '@/components/Hud'
import { Entry } from '@/components/Entry'
import { Origin } from '@/components/Origin'
import { Expansion } from '@/components/Expansion'
import { Transmissions } from '@/components/Transmissions'
import { Composition } from '@/components/Composition'
import { Signal } from '@/components/Signal'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <Hud />
      <main id="main" className="relative z-10">
        <Entry />
        <Origin />
        <Expansion />
        <Transmissions />
        <Composition />
        <Signal />
      </main>
      <Footer />
    </>
  )
}
