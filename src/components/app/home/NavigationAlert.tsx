'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export function ArrowHintToast() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 1500);
    const exitTimer = setTimeout(() => setExiting(true), 4000);
    const unmountTimer = setTimeout(() => setVisible(false), 4300); // match animation

    return () => {
      clearTimeout(showTimer);
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!visible) return null;

  return createPortal(
    <div className={`arrow-key-alert-container ${exiting ? 'slide-exit' : ''}`}>
      <div className="arrow-key-alert-wrapper">
        <p className="arrow-key-alert">Use your arrow keys to explore</p>
      </div>
    </div>,
    document.body
  );
}
