import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: 'cyan' | 'magenta' | 'purple';
    animated?: boolean;
}

export function HolographicCard({
    children,
    className = '',
    glowColor = 'cyan',
    animated = true
}: HolographicCardProps) {
    const glowClass = `neon-glow-${glowColor}`;
    const borderClass = animated ? 'holographic-border-animated' : 'holographic-border';

    return (
        <motion.div
            className={`holographic cyber-glass ${borderClass} ${glowClass} rounded-xl p-6 ${className}`}
            whileHover={{
                scale: 1.02,
                boxShadow: glowColor === 'cyan'
                    ? '0 0 20px rgba(55, 138, 221, 0.5), 0 0 40px rgba(55, 138, 221, 0.3)'
                    : glowColor === 'magenta'
                        ? '0 0 20px rgba(24, 95, 165, 0.5), 0 0 40px rgba(24, 95, 165, 0.3)'
                        : '0 0 20px rgba(24, 95, 165, 0.5), 0 0 40px rgba(24, 95, 165, 0.3)',
                transition: { duration: 0.3 }
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}
