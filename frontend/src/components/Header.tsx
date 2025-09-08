'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [notifications, setNotifications] = useState(3)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <header className="h-16 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between h-full px-6">
          <div className="w-8 h-8 rounded bg-gray-200 animate-pulse"></div>
          <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </header>
    )
  }

  return (
    <header className="h-16 border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Side - Search */}
        <div className="flex items-center space-x-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="검색..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            />
          </div>
        </div>

        {/* Right Side - Controls */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative text-sm"
              onClick={() => setNotifications(0)}
            >
              <span className="text-xl">🔔</span>
              기도 요청
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-medium">
                  {notifications}
                </span>
              )}
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            <button className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
            title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="relative">
            className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm"
                <span className="text-white text-sm font-medium">김</span>
              </div>
            {isDark ? '라이트 모드' : '다크 모드'}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">김민준</p>
              <p className="text-xs text-gray-500">개발자</p>
            </div>
          </div>

          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <span className="text-xl">⚙️</span>
          </button>
        </div>
      </div>
    </header>
  )
}

          <button className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
            설정
