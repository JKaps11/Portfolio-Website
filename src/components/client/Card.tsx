'use client';

import { Card as AntCard } from 'antd';
import { CardProps as AntCardProps } from 'antd/lib/card';
import { ReactNode } from 'react';

interface CardProps extends Omit<AntCardProps, 'children'> {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => (
  <AntCard {...props}>{children}</AntCard>
); 