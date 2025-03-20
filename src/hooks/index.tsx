import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setSize] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return isMobile;
};
