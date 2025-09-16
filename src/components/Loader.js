import React from 'react';

export default function Loader({ label = 'Loading…', size = 'lg' }) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };
  const ringSize = sizes[size] || sizes.lg;

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="inline-flex flex-col items-center justify-center">
        <div className="relative">
          {/* Outer animated ring */}
          <div className={`rounded-full ${ringSize} border-4 border-sky-400 border-t-transparent animate-spin`}></div>
          {/* Inner static ring for depth */}
          <div className="absolute inset-2 rounded-full border-4 border-sky-200/40"></div>
          {/* Soft glow */}
          <div className="pointer-events-none absolute -inset-3 rounded-full bg-sky-400/10 blur-xl"></div>
        </div>
        {label && (
          <div className="mt-5 text-slate-600 text-sm font-medium tracking-wide">{label}</div>
        )}
      </div>
    </div>
  );
}
