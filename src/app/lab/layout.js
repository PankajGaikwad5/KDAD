import './lab.css';
import LabSwitch from './_shared/LabSwitch';

// Experimental homepage variants. Not linked from the site, not indexed.
export const metadata = {
  title: 'Lab — Karan Desai Architecture + Design',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function LabLayout({ children }) {
  return (
    <>
      {children}
      <LabSwitch />
    </>
  );
}
