'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Radio, RadioChangeEvent, Space } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import Link from 'next/link'

const navOptions = [
  { label: 'Projects',    value: '/projects'    },
  { label: 'Skills',      value: '/skills'      },
  { label: <HomeOutlined />, value: '/'         },
  { label: 'Experience',  value: '/experience'  },
  { label: 'Contact Me',  value: 'mailto:jkaps11@gmail.com' },
] as const

const NavSelector: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [value, setValue] = useState<string>(pathname)
  const homeRef = useRef<HTMLButtonElement>(null)

  // Keep in sync when user uses back/forward
  useEffect(() => {
    setValue(pathname)
  }, [pathname])

  // Auto-focus the Home button on mount
  useEffect(() => {
    homeRef.current?.focus()
  }, [])

  const onChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value as string
    setValue(newValue)
    if (newValue.startsWith('mailto:')) {
      window.location.href = newValue
    } else {
      router.push(newValue)
    }
  }

  return (
    <Space className="w-full justify-evenly">
      <Radio.Group
        block
        onChange={onChange}
        value={value}
        buttonStyle='solid'
        optionType="button"
        style={{ display: 'inline-flex', alignItems: 'center' }}
      >
        {navOptions.map(opt => {
          const isActive = value === opt.value

          // Render Home as a Link-wrapped button with ref
          if (opt.value === '/') {
            return (
              <Link key={opt.value} href="/" passHref>
                <button
                  ref={homeRef}
                  className="custom-icon-button"
                  aria-label="Home"               
                >
                  <HomeOutlined/>
                </button>
              </Link>
            )
          }

          // All other options as Radio.Button
          return (
            <Radio.Button
              key={opt.value}
              value={opt.value}
              aria-label={typeof opt.label === 'string' ? opt.label : undefined}
              style={{
                backgroundColor: isActive ? '#ffffff' : undefined,
              }}
              className='nav-button'
            >
              {opt.label}
            </Radio.Button>
          )
        })}
      </Radio.Group>
    </Space>
  )
}

export default NavSelector
