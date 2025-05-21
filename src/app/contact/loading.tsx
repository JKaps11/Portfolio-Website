'use client';

import { Spin } from 'antd';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-6 w-80 p-8 rounded-xl shadow-md bg-white relative overflow-hidden">
        <Spin size="large" />

        {/* Shimmer bar */}
        <div className="w-full h-6 rounded-md relative bg-gray-200 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_100%]" />
        </div>

        {/* Optional second bar (like a content placeholder) */}
        <div className="w-full h-12 rounded-md relative bg-gray-200 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_100%]" />
        </div>
      </div>
    </div>
  );
}
