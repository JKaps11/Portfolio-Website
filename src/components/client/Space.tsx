// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
'use client';

import { Space as AntSpace } from 'antd';
import { SpaceProps as AntSpaceProps } from 'antd/lib/space';
import { ReactNode } from 'react';

interface SpaceProps extends Omit<AntSpaceProps, 'children'> {
  children: ReactNode;
}

export const Space: React.FC<SpaceProps> = ({ children, ...props }) => (
  <AntSpace {...props}>{children}</AntSpace>
); 