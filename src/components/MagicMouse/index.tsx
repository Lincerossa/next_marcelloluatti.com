'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const MagicMouse = () => {
  const [{ clientX: left, clientY: top }, setMousePosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    window.addEventListener('mousemove', setMousePosition);
    return () => window.removeEventListener('mousemove', setMousePosition);
  }, []);

  return (
    <>
      <div
        style={{
          left,
          top,
        }}
        className={`bg-[#3498db] -translate-x-1/2 -translate-y-1/2 fixed h-3 w-3 rounded-full pointer-events-none z-3`}
      />
      <motion.div
        initial={{ left: 0, top: 0 }}
        animate={{ left, top }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          zIndex: 3,
          border: '2px solid #3498db',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          width: '22px',
          height: '22px',
        }}
      />
    </>
  );
};

export default MagicMouse;
