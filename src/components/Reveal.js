import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, threshold = 0.2, y = 12, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const style = {
    transitionDelay: delay ? `${delay}ms` : undefined,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px)' : `translateY(${y}px)`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
