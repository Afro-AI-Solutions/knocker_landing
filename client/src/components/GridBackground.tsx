import React from 'react';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
    className?: string;
    animated?: boolean;
}

export function GridBackground({ className = '', animated = true }: GridBackgroundProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {/* Base dark background */}
            <div className="absolute inset-0 bg-[var(--dark-bg)]"></div>

            {/* Animated grid */}
            <motion.div
                className="absolute inset-0 cyber-grid opacity-30"
                animate={animated ? {
                    backgroundPosition: ['0px 0px', '50px 50px'],
                } : {}}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            ></motion.div>

            {/* Perspective grid at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[400px] overflow-hidden">
                <div
                    className="absolute bottom-0 left-0 right-0 h-[800px] cyber-grid opacity-20"
                    style={{
                        transform: 'perspective(500px) rotateX(60deg)',
                        transformOrigin: 'center bottom',
                        background: `
              linear-gradient(var(--grid-color) 2px, transparent 2px),
              linear-gradient(90deg, var(--grid-color) 2px, transparent 2px)
            `,
                        backgroundSize: '100px 100px',
                        maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
                    }}
                ></div>
            </div>

            {/* Glowing orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full opacity-20 blur-[100px]"
                style={{
                    background: 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)'
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            ></motion.div>

            <motion.div
                className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[120px]"
                style={{
                    background: 'radial-gradient(circle, var(--neon-magenta) 0%, transparent 70%)'
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1
                }}
            ></motion.div>

            <motion.div
                className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full opacity-18 blur-[110px]"
                style={{
                    background: 'radial-gradient(circle, var(--neon-purple) 0%, transparent 70%)'
                }}
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.18, 0.28, 0.18]
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2
                }}
            ></motion.div>

            {/* Scanline effect */}
            <div className="absolute inset-0 scanlines pointer-events-none"></div>
        </div>
    );
}
