export type Project = {
  name: string;
  description: string;
  href: string;
  meta?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'realtime-rl-code',
    description: 'Code release. Decision-making under real-time inference constraints.',
    href: 'https://github.com/Aneeshers/realtime-rl-code',
    meta: 'JAX · Reinforcement Learning',
    featured: true,
  },
  {
    name: 'semantic3d',
    description: 'End-to-end pipeline for reconstructing 3D scenes from RGB video, detecting semantically labeled 3D objects, and querying the resulting scene through an LLM interface.',
    href: 'https://github.com/FirasBDarwish/semantic3d',
    meta: '3D Reconstruction · Object Detection · LLM',
    featured: true,
  },
  {
    name: 'ConvKAN3D',
    description: 'Python package for 3D convolutional layers using Kolmogorov-Arnold Networks (KANs).',
    href: 'https://github.com/FirasBDarwish/ConvKAN3D',
    meta: 'PyTorch · Kolmogrov-Arnold Networks',
    featured: true,
  },
  {
    name: 'PyTorch4D',
    description: '4D Layers and Functions Compatible with PyTorch.',
    href: 'https://github.com/FirasBDarwish/PyTorch4D',
    meta: 'PyTorch',
    featured: true,
  },
  {
    name: 'MemoMate',
    description: 'multi-platform memo tracker.',
    href: 'https://github.com/FirasBDarwish/NoteEverywhere',
    meta: 'flask · pymongo · docker',
    featured: true,
  },
];
