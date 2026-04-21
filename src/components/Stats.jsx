import { useState, useEffect, useRef } from 'react';

function useCountUp(end, duration = 2000, startCounting) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return count;
}

function StatItem({ number, suffix, label }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(number, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-numero">{count}{suffix}</div>
      <div className="stat-texto">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats" data-aos="fade-up">
      <div className="contenedor grid-stats">
        <StatItem number={15} suffix="+" label="Años de Experiencia" />
        <StatItem number={500} suffix="+" label="Proyectos Terminados" />
        <StatItem number={100} suffix="%" label="Garantía de Calidad" />
      </div>
    </section>
  );
}

export default Stats;
