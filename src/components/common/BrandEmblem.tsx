import React from 'react';

interface BrandEmblemProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export const BrandEmblem: React.FC<BrandEmblemProps> = ({
  className = '',
  size = 44,
  showText = true,
  textColor = 'text-botanical-charcoal',
  subtextColor = 'text-botanical-teal'
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Botanical Logo Emblem Mark */}
      <div 
        className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        <svg 
          viewBox="0 0 200 200" 
          width="100%" 
          height="100%"
          className="drop-shadow-sm"
        >
          {/* Subtle Outer Enclosing Circle */}
          <circle 
            cx="100" 
            cy="100" 
            r="94" 
            fill="#FAF9F5" 
            stroke="#E6D2B3" 
            strokeWidth="3.5" 
          />

          {/* Golden Yellow Half Sun */}
          <path 
            d="M 72 54 A 28 28 0 0 1 128 54 Z" 
            fill="#F7B638" 
          />

          {/* Warm Sand Chamomile Petals fanning downwards */}
          {/* Petal 1 (Far Left) */}
          <path 
            d="M 96 56 C 90 70, 48 72, 52 88 C 55 98, 68 100, 76 90 C 85 79, 98 58, 98 56 Z" 
            fill="#E6D2B3" 
          />
          {/* Petal 2 (Mid Left) */}
          <path 
            d="M 98 56 C 90 74, 68 90, 72 106 C 75 116, 88 118, 93 107 C 98 92, 99 60, 99 56 Z" 
            fill="#E6D2B3" 
          />
          {/* Petal 3 (Center Down) */}
          <path 
            d="M 96 56 C 93 76, 90 102, 93 116 C 95 125, 105 125, 107 116 C 110 102, 107 76, 104 56 Z" 
            fill="#E6D2B3" 
          />
          {/* Petal 4 (Mid Right) */}
          <path 
            d="M 102 56 C 110 74, 132 90, 128 106 C 125 116, 112 118, 107 107 C 102 92, 101 60, 101 56 Z" 
            fill="#E6D2B3" 
          />
          {/* Petal 5 (Far Right) */}
          <path 
            d="M 104 56 C 110 70, 152 72, 148 88 C 145 98, 132 100, 124 90 C 115 79, 102 58, 102 56 Z" 
            fill="#E6D2B3" 
          />

          {/* Botanical Teal Blue Leaves */}
          {/* Left Leaf */}
          <path 
            d="M 96 172 C 68 170, 28 145, 28 106 C 53 106, 88 126, 96 172 Z" 
            fill="#398DA5" 
          />
          {/* Right Leaf */}
          <path 
            d="M 104 172 C 132 170, 172 145, 172 106 C 147 106, 112 126, 104 172 Z" 
            fill="#398DA5" 
          />
        </svg>
      </div>

      {/* Typography Wordmark */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif tracking-tight font-semibold text-lg leading-tight ${textColor}`}>
            Chamomile
          </span>
          <span className={`text-[10px] tracking-[0.24em] font-sans font-bold uppercase ${subtextColor}`}>
            Media • Studio
          </span>
        </div>
      )}
    </div>
  );
};
