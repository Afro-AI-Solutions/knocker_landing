import { useEffect, useState } from "react";

interface LoadScreenProps {
  onLoadComplete: () => void;
}

export function LoadScreen({ onLoadComplete }: LoadScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="text-center relative z-10">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"
              style={{ animationDuration: '1s' }}
            ></div>
            <div 
              className="absolute inset-2 rounded-full border-2 border-transparent border-r-primary/60 animate-spin"
              style={{ animationDuration: '2s', animationDirection: 'reverse' }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/icon.png"
                alt="Knocker"
                width={64}
                className="animate-pulse object-contain"
              />
            </div>
          </div>
          
          <img
            src="/light_logo.png"
            alt="Knocker AI"
            width={180}
            className="mx-auto mb-2 object-contain"
          />
          <p className="text-muted-foreground">Initializing systems...</p>
        </div>
        
        <div className="relative w-64 mx-auto">
          <div className="w-full h-1 bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-300 shadow-lg shadow-primary/30"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-primary text-sm font-mono">
            {progress}% LOADED
          </div>
        </div>
      </div>
    </div>
  );
}