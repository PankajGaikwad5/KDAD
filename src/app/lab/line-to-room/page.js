import { Archivo } from 'next/font/google';
import LineToRoom from './LineToRoom';

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--lab-body', preload: false });

export const metadata = { title: 'Line to Room — KDAD Lab' };

export default function Page() {
  return (
    <div className={`lab-root ${archivo.variable}`} style={{ '--lab-display': 'var(--lab-body)' }}>
      <LineToRoom />
    </div>
  );
}
