import { useState, useEffect } from 'react';

const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

export const useCurrentWidth = () => {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {

    let timeoutId = null;
    const resizeListener = () => {

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 5);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return { width };
}

/**
 * retorna o tamanho da tela em pixels conforme
 * a tela é redimensionada
 */