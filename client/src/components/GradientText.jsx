import { useEffect, useRef } from 'react';

export default function GradientText({ 
  children, 
  colors = ["#6b7280", "#FFFFFF", "#000000", "#FFFFFF", "#6b7280"],
  animationSpeed = 3,
  showBorder = false,
  className = ""
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const colorStops = colors.map((color, i) => 
      `${color} ${(i / (colors.length - 1)) * 100}%`
    ).join(', ');

    textRef.current.style.background = `linear-gradient(90deg, ${colorStops})`;
    textRef.current.style.backgroundSize = '200% auto';
    textRef.current.style.WebkitBackgroundClip = 'text';
    textRef.current.style.WebkitTextFillColor = 'transparent';
    textRef.current.style.backgroundClip = 'text';
    textRef.current.style.animation = `gradient ${animationSpeed}s ease infinite`;
  }, [colors, animationSpeed]);

  return (
    <>
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      <h1 
        ref={textRef}
        className={`${className} ${showBorder ? 'border-2' : ''}`}
      >
        {children}
      </h1>
    </>
  );
}