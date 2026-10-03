import React, { useState } from 'react';
import { Package } from 'lucide-react';

interface ImageFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Tifeexpress Logistics',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6 text-center border border-white/10 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
          <Package className="w-6 h-6" />
        </div>
        <span className="text-sm font-semibold text-slate-200 tracking-tight">{fallbackTitle}</span>
        <span className="text-xs text-slate-400 mt-1">Challenge Axis, Ibadan</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-900/60 animate-pulse flex items-center justify-center" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};
