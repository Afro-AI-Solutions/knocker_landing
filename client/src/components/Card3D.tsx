import React, { ReactNode } from 'react';
import { use3DTilt } from '@/hooks/use3DTilt';

interface Card3DProps {
    children: ReactNode;
    className?: string;
    max?: number;
    scale?: number;
    glare?: boolean;
}

export function Card3D({
    children,
    className = '',
    max = 15,
    scale = 1.05,
    glare = true
}: Card3DProps) {
    const { ref, style } = use3DTilt({ max, scale, glare, maxGlare: 0.3 });

    return (
        <div
            ref={ref}
            style={style}
            className={`relative ${className}`}
        >
            {children}
        </div>
    );
}
