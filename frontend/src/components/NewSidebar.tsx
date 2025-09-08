'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface MenuItem {
  id: string
  name: string
  path: string
}

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems: MenuItem[] = [
    { id: 'dashboard', name: '대시보드', path: '/' },
    { id: 'community', name: '커뮤니티', path: '/community' },
    { id: 'projects', name: '프로젝트', path: '/projects' },
    { id: 'learning', name: '학습', path: '/learning' },
    { id: 'challenges', name: '챌린지', path: '/challenges' },
    { id: 'mentoring', name: '멘토링', path: '/mentoring' },
    { id: 'resources', name: '리소스', path: '/resources' },
  ]

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  if (!mounted) {
    return (
      <aside className="w-64 h-full backdrop-blur-xl bg-white/20 border-r border-white/30">
        <div className="h-16 flex items-center px-6 border-b border-white/30">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
        </div>
        <div className="px-4 py-6 space-y-2">
          {Array(7).fill(0).map((_, i) => (
            <div key={i} className="h-12 bg-white/10 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </aside>
    )
  }

  return (
    <aside className="w-64 h-full backdrop-blur-xl bg-white/20 border-r border-white/30 relative overflow-hidden shadow-xl">
      {/* Sidebar background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5"></div>
      
      {/* Animated background element */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-5 w-20 h-20 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-white/30 relative z-10 group">
        <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">GIL</h1>
            <p className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors font-medium">Community</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="px-4 py-6 relative z-10">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  pathname === item.path
                    ? 'bg-white/30 backdrop-blur-sm text-gray-900 shadow-lg border border-white/50 scale-105'
                    : 'hover:bg-white/20 text-gray-700 hover:shadow-md hover:scale-102'
                }`}
              >
                {/* Active indicator glow */}
                {pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-50"></div>
                )}
                
                <div className={`w-2 h-2 rounded-full transition-all duration-300 relative z-10 ${
                  pathname === item.path 
                    ? 'bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse' 
                    : 'bg-gray-400 group-hover:bg-blue-400 group-hover:scale-125'
                }`}></div>
                <span className={`font-medium transition-all duration-300 relative z-10 ${
                  pathname === item.path ? 'font-semibold' : 'group-hover:font-semibold'
                }`}>{item.name}</span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>
            </li>
          ))}
        </ul>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-white/30">
          <h3 className="text-sm font-semibold text-gray-600 px-4 mb-3 flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span>빠른 액션</span>
          </h3>
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-gray-700 group relative overflow-hidden">
              <div className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>
              <span className="text-sm group-hover:font-medium transition-all duration-300">새 프로젝트</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-gray-700 group relative overflow-hidden">
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>
              <span className="text-sm group-hover:font-medium transition-all duration-300">질문하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-gray-700 group relative overflow-hidden">
              <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>
              <span className="text-sm group-hover:font-medium transition-all duration-300">스터디 생성</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
          </div>
        </div>

        {/* Status Card */}
        <div className="mt-8 mx-4 p-5 rounded-2xl bg-gradient-to-br from-green-400/20 to-blue-500/20 backdrop-blur-sm border border-white/40 shadow-xl relative overflow-hidden group">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Background glow */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
                {/* Status glow */}
                <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">활동 상태</p>
                <p className="text-xs text-green-600 font-bold">● 온라인</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <span className="text-xs text-gray-600">오늘 학습</span>
                <span className="text-xs text-gray-800 font-bold">2h 30m</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <span className="text-xs text-gray-600">이번 주 커밋</span>
                <span className="text-xs text-gray-800 font-bold">12회</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}
