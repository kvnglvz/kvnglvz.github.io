import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(window?.innerWidth ? window.innerWidth : 0);
  const [height, setHeight] = useState(window?.innerHeight ? window.innerHeight : 0);

  const listener = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      };
    }
  }, []);

  return {
    width,
    height
  };
};
