'use client';

import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
}

export const FadeIn: React.FC<FadeInProps> = ({ children }) => (
  <div className="fade-in h-full w-full">
    {children}
  </div>
); 