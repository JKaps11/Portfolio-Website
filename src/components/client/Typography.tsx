// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
'use client';

import { Typography as AntTypography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { ReactNode } from 'react';

const { Title: AntTitle, Paragraph: AntParagraph, Text: AntText } = AntTypography;

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
  <AntParagraph style={{ fontSize: '16px' }} className={className}>{children}</AntParagraph>
);

export const Text: React.FC<TextProps> = ({ children, className }) => (
  <AntText className={className}>{children}</AntText>
);