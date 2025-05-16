'use client';

import { Button as AntButton } from 'antd';
import { ButtonProps as AntButtonProps } from 'antd/lib/button';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<AntButtonProps, 'children'> {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <AntButton {...props}>{children}</AntButton>
); 