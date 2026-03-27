'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPageAnimations() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Page heading + subtitle slide up on load
    tl.fromTo(
      '[data-gsap="title"]',
      { y: 22, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65 }
    ).fromTo(
      '[data-gsap="subtitle"]',
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.3'
    );

    // Each section reveals as it enters the viewport
    gsap.utils.toArray('[data-gsap="section"]').forEach((section) => {
      gsap.fromTo(
        section,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });

    // Profile photo subtle scale-in
    gsap.fromTo(
      '[data-gsap="profile-img"]',
      { scale: 0.93, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-gsap="profile-img"]',
          start: 'top 88%',
          once: true,
        },
      }
    );

    // KDH cards stagger in
    const cards = gsap.utils.toArray('[data-gsap="card"]');
    if (cards.length) {
      gsap.fromTo(
        cards,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 88%',
            once: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return null;
}
