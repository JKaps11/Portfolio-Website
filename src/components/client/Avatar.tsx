// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
'use client';

import { Avatar as AntAvatar } from 'antd';
import { AvatarProps as AntAvatarProps } from 'antd/lib/avatar';
import { ReactNode } from 'react';

interface AvatarProps extends Omit<AntAvatarProps, 'children'> {
  children?: ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ children, ...props }) => (
  <AntAvatar {...props}>{children}</AntAvatar>
); 