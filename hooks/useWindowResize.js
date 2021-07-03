import { useState, useEffect } from 'react';

const useWindowResize = () => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

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

export default useWindowResize;