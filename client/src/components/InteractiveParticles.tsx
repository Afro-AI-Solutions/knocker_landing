import React, { useEffect, useRef, useCallback, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export const InteractiveParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const colors = ['#a855f7', '#8b5cf6', '#06b6d4', '#ec4899', '#3b82f6'];

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      size: Math.random() * 3 + 1,
      alpha: Math.random() * 0.5 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }, []);

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 10000));
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle(canvas));
  }, [createParticle]);

  const updateParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesRef.current.forEach((particle) => {
      const dx = mousePos.x - particle.x;
      const dy = mousePos.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle) * force * 0.03;
        particle.vy += Math.sin(angle) * force * 0.03;
        particle.alpha = Math.min(particle.alpha * 1.02, 0.9);
      } else {
        particle.alpha = Math.max(particle.alpha * 0.99, 0.3);
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      particle.vx *= 0.99;
      particle.vy *= 0.99;
    });
  }, [mousePos]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesRef.current.forEach((particle) => {
      ctx.save();
      ctx.globalAlpha = particle.alpha;
      
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    particlesRef.current.forEach((particle, i) => {
      particlesRef.current.slice(i + 1).forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.save();
          const opacity = (150 - distance) / 150 * 0.8;
          ctx.globalAlpha = opacity * Math.min(particle.alpha, otherParticle.alpha);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    updateParticles(canvas);
    drawParticles(ctx, canvas);
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles(canvas);
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    animate();

    const handleResize = () => resizeCanvas();
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [resizeCanvas, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
    />
  );
};
