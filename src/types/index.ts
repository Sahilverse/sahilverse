export type Mass = 'origin' | 'faint' | 'standard' | 'shipped' | 'showcase' | 'flagship'

export interface Project {
  title: string
  year: string
  blurb: string
  mass: Mass
  lit: boolean
  href?: string
}

export interface Transmission {
  index: string
  title: string
  summary: string
}

export interface StackGroup {
  label: string
  items: string[]
}

export interface GlobeIcon {
  name: string
  path: string
}
