import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 1.2,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(from);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const currentCount = Math.floor(progress * (to - from) + from);
            setCount(currentCount);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(to);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [from, to, duration, hasAnimated]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};
