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
      <header className="h-16 border-b border-white/30 backdrop-blur-xl bg-white/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="flex items-center justify-between h-full px-6 relative z-10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
          <div className="w-32 h-6 bg-white/20 rounded-lg animate-pulse"></div>
        </div>
      </header>
    )
  }

  return (
    <header className="h-16 border-b border-white/30 backdrop-blur-xl bg-white/20 relative overflow-hidden shadow-lg">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5"></div>
      
      {/* Animated background element */}
      <div className="absolute top-0 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="flex items-center justify-between h-full px-6 relative z-10">
        {/* Left Side - Brand */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white text-sm font-bold">GIL</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </div>
            <div className="group-hover:scale-105 transition-transform duration-300">
              <h2 className="text-sm font-bold text-gray-800">Gil Community</h2>
              <p className="text-xs text-gray-600">개발자 커뮤니티</p>
            </div>
          </div>
        </div>

        {/* Right Side - Controls */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <div className="relative group">
            <button 
              className="p-3 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30 group-hover:shadow-lg"
              onClick={() => setNotifications(0)}
            >
              <div className="relative">
                <div className="w-5 h-5 border-2 border-gray-600 rounded-lg relative group-hover:border-blue-500 transition-colors">
                  <div className="absolute top-0.5 right-0.5 w-1.5 h-1 bg-gray-600 rounded-sm group-hover:bg-blue-500 transition-colors"></div>
                  <div className="absolute bottom-0.5 left-0.5 right-0.5 h-1.5 bg-gray-600/20 rounded-sm group-hover:bg-blue-500/20 transition-colors"></div>
                </div>
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-xs text-white flex items-center justify-center font-medium shadow-lg animate-pulse">
                    {notifications}
                  </span>
                )}
              </div>
            </button>
          </div>

          {/* Theme Toggle */}
          <div className="relative group">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30 group-hover:shadow-lg"
            >
              <div className="relative">
                {isDark ? (
                  <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full relative shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full"></div>
                    <div className="absolute inset-0 bg-yellow-400/50 rounded-full animate-pulse"></div>
                  </div>
                ) : (
                  <div className="w-5 h-5 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full relative shadow-lg group-hover:shadow-slate-500/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-inner"></div>
                  </div>
                )}
              </div>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 pl-4 border-l border-white/30 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-sm animate-pulse"></div>
            </div>
            <div className="group-hover:scale-105 transition-transform duration-300">
              <p className="font-semibold text-gray-800 text-sm">김민준</p>
              <p className="text-xs text-green-600 font-medium">Developer</p>
            </div>
            
            {/* Dropdown indicator */}
            <div className="w-4 h-4 border border-gray-400 rounded group-hover:border-gray-600 transition-colors cursor-pointer">
              <div className="w-2 h-2 border-r border-b border-gray-400 group-hover:border-gray-600 transform rotate-45 translate-x-0.5 translate-y-0.5 transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
