// hooks/useFadeInOnScroll.tsx
import { useEffect } from 'react';

const useFadeInOnScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const fadeInElements = document.querySelectorAll('.fade-in');

      fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useFadeInOnScroll;
