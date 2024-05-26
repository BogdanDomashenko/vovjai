import { RefObject, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useClickOutside = (ref: RefObject<any>, callback?: () => void) => {
  useEffect(() => {
    if (!ref.current) return;
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      if (ref.current && !ref.current.contains(e.target)) {
        if (callback) {
          callback();
        }
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, callback]);
};
