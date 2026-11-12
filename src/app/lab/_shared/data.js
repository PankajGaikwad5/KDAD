// Lab-only data. Real project ids, routes and photography from the main site.
export const PROJECTS = [
  { name: 'The Dream Project', img: '/tdp/1.webp', id: '6791f5807a5dc4ac2d27e20e' },
  { name: 'Blue House', img: '/bluehouse/1.webp', id: '6792009a7a5dc4ac2d27e2a4' },
  { name: 'Project 86', img: '/project86/1.webp', id: '6791fe227a5dc4ac2d27e24e' },
  { name: 'Agra Fort', img: '/agrafort/1.webp', id: '6791ff907a5dc4ac2d27e27a' },
  { name: 'Red Fort', img: '/redfort/1.webp', id: '6791ffd37a5dc4ac2d27e285' },
  { name: 'Party Pad', img: '/partypad/1.webp', id: '6791fe767a5dc4ac2d27e259' },
  { name: 'KiahMoi', img: '/kiahmoi/1.webp', id: '6791fef67a5dc4ac2d27e264' },
  { name: 'Chaitya 777', img: '/chaitya/1.webp', id: '67c1f5807a5dc4ac2d27e777' },
  { name: 'Project 83', img: '/project83/cover.webp', id: '67c1f5807a5dc4ac2d27p083' },
];

export const projectHref = (p) => `/projectdetails/${p.id}`;

export const NAV = [
  { label: 'About', href: '/about-us' },
  { label: 'Projects', href: '/projects' },
  { label: 'Collaborations', href: '/collaborations' },
  { label: 'Publications', href: '/publications' },
  { label: 'Contact', href: '/contact-us' },
];

export const VARIANTS = [
  { slug: 'corridor', title: 'Corridor', note: 'Scroll walks you down a stone gallery; projects wake into colour as you reach them.' },
  { slug: 'nocturne', title: 'Nocturne', note: 'Your cursor is a lantern. Rooms appear only where you shine it.' },
  { slug: 'line-to-room', title: 'Line to Room', note: 'A floor plan draws itself, tilts into axonometric, raises its walls, and lets you in.' },
  { slug: 'stair', title: 'Stair', note: 'Projects wound around a marble newel. Scroll to descend the staircase.' },
  { slug: 'stone-dust', title: 'Stone Dust', note: 'Twenty thousand grains of stone sculpt themselves into each project.' },
];

export const SIGNATURE = '/assets/optimizedsign.gif';
