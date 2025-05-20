// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
'use client';

import { Button as AntButton } from 'antd';
import { ButtonProps as AntButtonProps } from 'antd/lib/button';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<AntButtonProps, 'children'> {
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <AntButton style={{ fontSize: '1rem', fontWeight: 700 }} {...props}>{children}</AntButton>
); 