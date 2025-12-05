import React from 'react';
import { motion } from 'framer-motion';

interface ParticleBackgroundProps {
    particleCount?: number;
    className?: string;
}

export function ParticleBackground({ particleCount = 20, className = '' }: ParticleBackgroundProps) {
    const particles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 10,
        color: [
            'rgba(139, 92, 246, 0.3)',
            'rgba(168, 85, 247, 0.3)',
            'rgba(59, 130, 246, 0.3)',
            'rgba(147, 51, 234, 0.3)',
            'rgba(236, 72, 153, 0.3)',
        ][Math.floor(Math.random() * 5)],
    }));

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full blur-xl"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        background: particle.color,
                    }}
                    animate={{
                        y: [0, -30, -60, -30, 0],
                        x: [0, 20, -20, 10, 0],
                        scale: [1, 1.2, 0.8, 1.1, 1],
                        opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
