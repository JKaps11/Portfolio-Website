'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Alert } from '@/components/common/Alert';

export interface ContactAlertProps {
  status?: 'success' | 'error';
}

export function ContactAlert({ status }: ContactAlertProps) {
  const visible = status === 'success' || status === 'error';

  useEffect(() => {
    console.log('[ContactAlert] status:', status);
  }, [status]);

  const message =
    status === 'success'
      ? 'Email sent successfully!'
      : status === 'error'
      ? 'Failed to send email. Please try again.'
      : '';

  const color =
    status === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white';

  const router = useRouter();

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => {
      router.replace('/contact');
    }, 4500);
    return () => clearTimeout(timeout);
  }, [visible, router]);

  return (
    <Alert
      message={message}
      color={color}
      visible={visible}
      delayMs={500}
      durationMs={4000}
    />
  );
}
