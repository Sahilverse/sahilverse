import type { StackGroup } from '@/types'

export const stackGroups: StackGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'Python', 'C#', 'Java', 'C++'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'Tailwind'],
  },
  {
    label: 'Backend',
    items: ['Node', 'Express', 'NestJS', 'Django REST', 'ASP.NET Core'],
  },
  {
    label: 'Systems',
    items: ['Docker', 'Redis', 'BullMQ', 'MinIO', 'FFmpeg', 'Nginx', 'Linux'],
  },
  {
    label: 'Machine Learning',
    items: ['PyTorch', 'OpenCV', 'EfficientNet', 'ResNet'],
  },
]

export const globeIconNames = [
  'TypeScript',
  'Python',
  'C#',
  'React',
  'Java',
  'C++',
  'Next.js',
  'Node.js',
  'Express',
  'NestJS',
  'Django',
  '.NET',
  'Tailwind CSS',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'Nginx',
  'Linux',
  'PyTorch',
  'OpenCV',
  'Git',
  'Arduino',
  'Firebase',
  'Socket.io',
] as const
