'use client';

import { Row as AntRow, Col as AntCol } from 'antd';
import { RowProps as AntRowProps } from 'antd/lib/grid/row';
import { ColProps as AntColProps } from 'antd/lib/grid/col';
import { ReactNode } from 'react';

interface RowProps extends Omit<AntRowProps, 'children'> {
  children: ReactNode;
}

interface ColProps extends Omit<AntColProps, 'children'> {
  children: ReactNode;
}

export const Row: React.FC<RowProps> = ({ children, ...props }) => (
  <AntRow {...props}>{children}</AntRow>
);

export const Col: React.FC<ColProps> = ({ children, ...props }) => (
  <AntCol {...props}>{children}</AntCol>
); 