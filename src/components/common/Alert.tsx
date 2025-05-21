'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface AlertProps {
  message: string;
  color?: string;
  visible?: boolean;
  delayMs?: number;
  durationMs?: number;
}

export function Alert({
  message,
  color = 'text-white',
  visible: controlledVisible,
  delayMs = 1500,
  durationMs = 4000,
}: AlertProps) {
  const [autoVisible, setAutoVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  const isControlled = typeof controlledVisible === 'boolean';
  const isVisible = isControlled ? controlledVisible : autoVisible;

  useEffect(() => {
    if (isControlled || !message) return;

    const showTimer = setTimeout(() => setAutoVisible(true), delayMs);
    const exitTimer = setTimeout(() => setExiting(true), delayMs + durationMs);
    const unmountTimer = setTimeout(() => setAutoVisible(false), delayMs + durationMs + 300);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, [isControlled, delayMs, durationMs, message]);

  if (!isVisible || !message) return null;

  return createPortal(
    <div className={`arrow-key-alert-container ${exiting ? 'slide-exit' : ''}`}>
      <div className="arrow-key-alert-wrapper">
        <p className={`arrow-key-alert ${color}`}>{message}</p>
      </div>
    </div>,
    document.body
  );
}
