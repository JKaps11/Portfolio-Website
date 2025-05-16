'use client';

import { Typography as AntTypography } from 'antd';
import { ReactNode } from 'react';

const { Title: AntTitle, Paragraph: AntParagraph } = AntTypography;

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
  className?: string;
}

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ level, children, className }) => (
  <AntTitle level={level} className={className}>{children}</AntTitle>
);

export const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <AntParagraph className={className}>{children}</AntParagraph>
); 