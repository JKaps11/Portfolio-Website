'use client';

import { Carousel as AntCarousel } from 'antd';
import { CarouselProps as AntCarouselProps } from 'antd/lib/carousel';
import { ReactNode } from 'react';

interface CarouselProps extends Omit<AntCarouselProps, 'children'> {
  children: ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => (
  <AntCarousel {...props}>{children}</AntCarousel>
); 