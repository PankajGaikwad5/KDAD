'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for previous choice
    const savedConsent = localStorage.getItem('kdad_cookie_consent');
    if (savedConsent) {
      setConsent(savedConsent);
      if (savedConsent === 'accepted') {
        activateTracking();
      }
    } else {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const activateTracking = () => {
    // 1. Google Analytics
    const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'; // Fallback to placeholder if not configured
    if (gaId && gaId !== 'G-XXXXXXXXXX' && !window.gaInitialized) {
      window.gaInitialized = true;
      const script1 = document.createElement('script');
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(script2);
    }

    // 2. Meta Pixel
    const pixelId = '4111080902498732'; // Hardcoded Meta Pixel ID from layout.js
    if (pixelId && !window.pixelInitialized) {
      window.pixelInitialized = true;
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }
  };

  const handleAccept = () => {
    localStorage.setItem('kdad_cookie_consent', 'accepted');
    setConsent('accepted');
    setIsVisible(false);
    activateTracking();
  };

  const handleDecline = () => {
    localStorage.setItem('kdad_cookie_consent', 'declined');
    setConsent('declined');
    setIsVisible(false);
  };

  if (consent !== null && !isVisible) return null;
  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 sm:w-auto max-w-md p-4 sm:p-3 bg-black/95 border border-neutral-800 backdrop-blur-md rounded-2xl sm:rounded-full text-white shadow-2xl transition-all duration-500 ease-out flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 px-5 text-[11px] font-light ${poppins.className}`}
    >
      <p className='text-neutral-300 leading-relaxed sm:leading-none'>
        We use cookies to improve your experience. See our{' '}
        <Link
          href='/privacy-policy'
          className='underline text-white hover:text-neutral-300 transition-colors'
        >
          Privacy Policy
        </Link>.
      </p>
      <div className='flex items-center justify-end w-full sm:w-auto gap-4 shrink-0'>
        <button
          onClick={handleDecline}
          className='text-[9px] text-neutral-400 hover:text-white transition-colors uppercase tracking-widest font-semibold'
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className='py-1.5 px-3.5 bg-white text-black hover:bg-neutral-200 transition-colors rounded-full text-[9px] uppercase tracking-widest font-bold'
        >
          Accept
        </button>
      </div>
    </div>
  );
}
