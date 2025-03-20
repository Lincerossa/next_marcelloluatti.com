'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useIsMobile } from '@/hooks';

const MagicMouse = () => {
  const isMobile = useIsMobile();
  const [{ clientX: left, clientY: top }, setMousePosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    window.addEventListener('mousemove', setMousePosition);
    return () => {
      window.removeEventListener('mousemove', setMousePosition);
    };
  }, []);

  if (isMobile) {
    return null;
  }
  return (
    <>
      <div
        style={{
          left,
          top,
        }}
        className={`hidden md:block bg-rose-500 -translate-x-1/2 -translate-y-1/2 fixed h-2 w-2 rounded-full pointer-events-none z-3`}
      />
      <motion.div
        initial={{ left: 0, top: 0 }}
        animate={{ left, top }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          zIndex: 3,
          border: '2px solid #ff2056',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          width: '20px',
          height: '20px',
        }}
      />
    </>
  );
};

export default MagicMouse;
