import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export function FloatingCard({
    children,
    className = '',
    delay = 0,
    duration = 6
}: FloatingCardProps) {
    return (
        <motion.div
            className={`preserve-3d ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            animate={{
                y: [0, -15, 0],
                rotateX: [0, 2, 0],
                rotateY: [0, 2, 0],
            }}
            whileHover={{
                y: -20,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
            }}
            style={{
                transformStyle: 'preserve-3d',
            }}
        >
            {children}
        </motion.div>
    );
}
