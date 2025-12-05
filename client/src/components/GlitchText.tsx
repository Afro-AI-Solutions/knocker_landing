import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
    children: string;
    className?: string;
    glitchIntensity?: 'low' | 'medium' | 'high';
}

export function GlitchText({
    children,
    className = '',
    glitchIntensity = 'medium'
}: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const intervals = {
            low: 5000,
            medium: 3000,
            high: 1500
        };

        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, intervals[glitchIntensity]);

        return () => clearInterval(interval);
    }, [glitchIntensity]);

    return (
        <span
            className={`relative inline-block ${isGlitching ? 'glitch' : ''} ${className}`}
            data-text={children}
            style={{
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 700
            }}
        >
            <span className="neon-text-cyan">{children}</span>
        </span>
    );
}
