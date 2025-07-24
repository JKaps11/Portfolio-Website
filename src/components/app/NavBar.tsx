// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { HomeOutlined, MailOutlined, ProjectOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'
import { useIsMobile } from '@/hooks/useIsMobile'

const desktopNavOptions = [
  { label: 'About Me',    value: '/about' },
  { label: 'Projects',    value: '/projects' },
  { label: <HomeOutlined />, value: '/' },
  { label: 'Experience',  value: '/experience' },
  { label: 'Contact Me',  value: '/contact' },
] as const

const mobileNavOptions = [
  { label: <UserOutlined/>,    value: '/about' },
  { label: <ProjectOutlined/>,    value: '/projects' },
  { label: <HomeOutlined />, value: '/' },
  { label: <SolutionOutlined/>,  value: '/experience' },
  { label: <MailOutlined/>, value: 'contact' },
] as const

const NavBarSelector: React.FC = () => {
  const isMobile = useIsMobile(600)
  const navOptions = isMobile ? mobileNavOptions : desktopNavOptions
  
  const router = useRouter()
  const pathname = usePathname()
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    return navOptions.findIndex(opt => opt.value === pathname)
  })
  const homeRef = useRef<HTMLButtonElement>(null)
  const [lastNav, setLastNav] = useState(0)
  const NAV_THROTTLE = 300 // ms

  useEffect(() => {
    const newIndex = navOptions.findIndex(opt => opt.value === pathname)
    if (newIndex !== -1) {
      setActiveIndex(newIndex)
    }
  }, [pathname])

  const handleNavigation = useCallback((index: number) => {
    const now = Date.now()
    if (now - lastNav < NAV_THROTTLE) return
    setLastNav(now)

    setActiveIndex(index)
    const option = navOptions[index]
    if (option.value.startsWith('mailto:')) {
      window.location.href = option.value
    } else {
      router.push(option.value)
    }
  }, [lastNav, router])

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
  }, [activeIndex, handleNavigation])


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
              style={{minWidth: isMobile ? '0px' : '120px'}}
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
