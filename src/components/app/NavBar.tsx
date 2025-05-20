// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { HomeOutlined } from '@ant-design/icons'

const navOptions = [
  { label: 'Projects',    value: '/projects'    },
  { label: 'Skills',      value: '/skills'      },
  { label: <HomeOutlined />, value: '/'         },
  { label: 'Experience',  value: '/experience'  },
  { label: 'Contact Me',  value: 'mailto:jkaps11@gmail.com' },
] as const

const NavBarSelector: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    return navOptions.findIndex(opt => opt.value === pathname)
  })
  const homeRef = useRef<HTMLButtonElement>(null)
  const [lastNav, setLastNav] = useState(0);
  const NAV_THROTTLE = 300; // ms

  // Update activeIndex when pathname changes
  useEffect(() => {
    const newIndex = navOptions.findIndex(opt => opt.value === pathname)
    if (newIndex !== -1) {
      setActiveIndex(newIndex)
    }
  }, [pathname])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && activeIndex > 0) {
        handleNavigation(activeIndex - 1)
      } else if (e.key === 'ArrowRight' && activeIndex < navOptions.length - 1) {
        handleNavigation(activeIndex + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  const handleNavigation = (index: number) => {
    const now = Date.now();
    if (now - lastNav < NAV_THROTTLE) return;
    setLastNav(now);

    setActiveIndex(index);
    const option = navOptions[index];
    if (option.value.startsWith('mailto:')) {
      window.location.href = option.value;
    } else {
      router.push(option.value);
    }
  };

  return (
    <nav className="custom-nav-bar">
      <div className="custom-nav-inner">
        <div className="nav-group">
          {navOptions.slice(0, 2).map((opt, idx) => (
            <button
              key={opt.value}
              className={`custom-nav-btn${activeIndex === idx ? ' active' : ''}`}
              onClick={() => handleNavigation(idx)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {navOptions.slice(2, 3).map((opt, idx) => (
          <button
            key={opt.value}
            ref={homeRef}
            className={`custom-icon-button ${activeIndex === idx + 2 ? ' active' : ''}`}
            aria-label="Home"
            onClick={() => handleNavigation(idx + 2)}
          >
            <HomeOutlined />
          </button>
        ))}
        <div className="nav-group">
          {navOptions.slice(3).map((opt, idx) => (
            <button
              key={opt.value}
              className={`custom-nav-btn${activeIndex === idx + 3 ? ' active' : ''}`}
              onClick={() => handleNavigation(idx + 3)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBarSelector