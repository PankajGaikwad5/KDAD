import { Bodoni_Moda, Jost } from 'next/font/google';
import Corridor from './Corridor';

const display = Bodoni_Moda({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--lab-display', preload: false });
const body = Jost({ subsets: ['latin'], variable: '--lab-body', preload: false });

export const metadata = { title: 'Corridor — KDAD Lab' };

export default function Page() {
  return (
    <div className={`lab-root ${display.variable} ${body.variable}`}>
      <Corridor />
    </div>
  );
}
