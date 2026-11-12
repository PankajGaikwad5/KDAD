import Link from 'next/link';
import { NAV } from './data';

/** Minimal header shared by variants; each variant styles it through className props. */
export default function LabHeader({ className = '', brandClass = '', linkClass = '', brand }) {
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 flex items-start justify-between gap-6 px-4 sm:px-8 pt-5 sm:pt-7 pointer-events-none ${className}`}
    >
      <Link href='/' className={`pointer-events-auto leading-tight ${brandClass}`}>
        {brand || (
          <>
            Karan Desai
            <span className='block opacity-60'>Architecture + Design</span>
          </>
        )}
      </Link>
      <nav aria-label='Primary' className='pointer-events-auto hidden md:flex gap-7'>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className={linkClass}>
            {n.label}
          </Link>
        ))}
      </nav>
      <Link href='/contact-us' className={`pointer-events-auto md:hidden ${linkClass}`}>
        Contact
      </Link>
    </header>
  );
}
