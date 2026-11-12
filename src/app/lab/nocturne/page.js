import { Italiana, Manrope } from 'next/font/google';
import Nocturne from './Nocturne';

const display = Italiana({ subsets: ['latin'], weight: '400', variable: '--lab-display', preload: false });
const body = Manrope({ subsets: ['latin'], variable: '--lab-body', preload: false });

export const metadata = { title: 'Nocturne — KDAD Lab' };

export default function Page() {
  return (
    <div className={`lab-root ${display.variable} ${body.variable}`}>
      <Nocturne />
    </div>
  );
}
