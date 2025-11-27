import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <div 
      className={`relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50" />
      {children}
    </div>
  );
};
