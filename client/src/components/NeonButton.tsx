import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'cyan' | 'magenta' | 'purple';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export function NeonButton({
    children,
    onClick,
    variant = 'cyan',
    className = '',
    type = 'button'
}: NeonButtonProps) {
    const colorMap = {
        cyan: {
            border: 'border-[var(--neon-cyan)]',
            text: 'text-[var(--neon-cyan)]',
            glow: 'hover:shadow-[0_0_10px_var(--neon-cyan),0_0_20px_var(--neon-cyan),inset_0_0_10px_var(--neon-cyan)]',
            bg: 'before:bg-[var(--neon-cyan)]'
        },
        magenta: {
            border: 'border-[var(--neon-magenta)]',
            text: 'text-[var(--neon-magenta)]',
            glow: 'hover:shadow-[0_0_10px_var(--neon-magenta),0_0_20px_var(--neon-magenta),inset_0_0_10px_var(--neon-magenta)]',
            bg: 'before:bg-[var(--neon-magenta)]'
        },
        purple: {
            border: 'border-[var(--neon-purple)]',
            text: 'text-[var(--neon-purple)]',
            glow: 'hover:shadow-[0_0_10px_var(--neon-purple),0_0_20px_var(--neon-purple),inset_0_0_10px_var(--neon-purple)]',
            bg: 'before:bg-[var(--neon-purple)]'
        }
    };

    const colors = colorMap[variant];

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={`
        relative px-8 py-3 bg-transparent border-2 font-semibold uppercase tracking-wider
        transition-all duration-300 cursor-pointer overflow-hidden
        ${colors.border} ${colors.text} ${colors.glow}
        before:content-[''] before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300
        ${colors.bg}
        hover:before:opacity-20
        clip-path-[polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]
        ${className}
      `}
            style={{
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
}
