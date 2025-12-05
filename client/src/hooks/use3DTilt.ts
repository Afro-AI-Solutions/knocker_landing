import { useRef, useState, useEffect } from 'react';

interface Tilt3DOptions {
  max?: number; // Maximum tilt angle in degrees
  perspective?: number; // Perspective value
  scale?: number; // Scale on hover
  speed?: number; // Transition speed
  easing?: string; // CSS easing function
  glare?: boolean; // Enable glare effect
  maxGlare?: number; // Maximum glare opacity
}

interface Tilt3DReturn {
  ref: React.RefObject<HTMLDivElement>;
  style: React.CSSProperties;
}

export function use3DTilt(options: Tilt3DOptions = {}): Tilt3DReturn {
  const {
    max = 15,
    perspective = 1000,
    scale = 1.05,
    speed = 400,
    easing = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    glare = false,
    maxGlare = 0.5,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;
      
      const tiltX = percentY * max;
      const tiltY = -percentX * max;
      
      const transformValue = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      setTransform(transformValue);

      if (glare) {
        const glareX = (percentX + 1) * 50;
        const glareY = (percentY + 1) * 50;
        const glareOpacity = Math.min(
          Math.abs(percentX) + Math.abs(percentY),
          maxGlare
        );
        
        setGlareStyle({
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}), transparent)`,
        });
      }
    };

    const handleMouseLeave = () => {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
      setGlareStyle({});
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [max, perspective, scale, glare, maxGlare]);

  const style: React.CSSProperties = {
    transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: `transform ${speed}ms ${easing}`,
    transformStyle: 'preserve-3d',
    position: 'relative',
  };

  return { ref, style };
}
