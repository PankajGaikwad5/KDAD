'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VARIANTS } from './data';

export default function LabSwitch() {
  const path = usePathname();
  return (
    <nav className='lab-switch' aria-label='Homepage variants'>
      <Link href='/lab' aria-current={path === '/lab' ? 'page' : undefined}>
        Lab
      </Link>
      {VARIANTS.map((v, i) => (
        <Link
          key={v.slug}
          href={`/lab/${v.slug}`}
          title={v.title}
          aria-current={path === `/lab/${v.slug}` ? 'page' : undefined}
        >
          {i + 1}
        </Link>
      ))}
    </nav>
  );
}
