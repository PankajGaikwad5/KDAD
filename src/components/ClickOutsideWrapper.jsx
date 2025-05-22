'use client';
import { useRouter } from 'next/navigation';

const ClickOutsideWrapper = ({ children, carouselElement }) => {
  const router = useRouter();

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      router.push('/projects');
    }
  };

  return (
    <div
      onClick={handleClick}
      className='h-screen flex items-center justify-center '
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default ClickOutsideWrapper;
