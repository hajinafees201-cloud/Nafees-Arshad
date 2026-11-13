import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  showSubtitle = true,
  subtitleText = 'Head Office: Jhelum, Pakistan',
  className = '',
  lightText = false,
}) => {
  // Responsive sizing tailored so the logo height matches the adjacent company name and subtitle
  const sizeClasses = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8 rounded-lg',
    md: 'w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl',
    lg: 'w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl',
    xl: 'w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg lg:text-xl',
    lg: 'text-lg sm:text-xl lg:text-2xl',
    xl: 'text-xl sm:text-2xl lg:text-3xl',
  };

  const pixelDimensions = {
    sm: 32,
    md: 44,
    lg: 56,
    xl: 80,
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Official Approved Green "UH" Monogram Logo on Rounded Charcoal Background */}
      <div
        className={`${sizeClasses[size]} shrink-0 overflow-hidden bg-[#1E2024] shadow-md border border-slate-700/70 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center`}
      >
        <img
          src="/images/utility_home_export_logo.jpeg"
          alt="Utility Home Export Official Logo"
          width={pixelDimensions[size]}
          height={pixelDimensions[size]}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Brand Name Neatly Beside Logo */}
      {showText && (
        <div className="min-w-0 text-left flex flex-col justify-center">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`${textSizes[size]} font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight whitespace-nowrap ${
                lightText ? 'text-white' : 'text-slate-900'
              }`}
            >
              UTILITY HOME
            </span>
            <span className="text-[9px] sm:text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded tracking-wider uppercase shadow-2xs leading-none">
              EXPORTS
            </span>
          </div>

          {showSubtitle && (
            <span
              className={`text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold block truncate max-w-[170px] sm:max-w-[240px] xl:max-w-none leading-tight mt-0.5 ${
                lightText ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {subtitleText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
