'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface MenuItem {
  id: string
  name: string
  path: string
  active?: boolean
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
      <aside className="w-64 h-full backdrop-blur-xl bg-white/10 border-r border-white/20">
        <div className="h-16 flex items-center px-6 border-b border-white/20">
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
    <aside className="w-64 h-full backdrop-blur-xl bg-white/10 border-r border-white/20">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">GIL</h1>
            <p className="text-xs text-gray-600">Community</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeItem === item.id
                    ? 'bg-white/20 backdrop-blur-sm text-gray-900 shadow-lg'
                    : 'hover:bg-white/10 text-gray-700'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${
                  activeItem === item.id ? 'bg-blue-500' : 'bg-gray-400'
                }`}></div>
                <span className="font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <h3 className="text-sm font-semibold text-gray-600 px-4 mb-3">빠른 액션</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-gray-700">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm">새 프로젝트</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-gray-700">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">질문하기</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-gray-700">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-sm">스터디 생성</span>
            </button>
          </div>
        </div>

        {/* Status Card */}
        <div className="mt-8 mx-4 p-4 rounded-xl bg-gradient-to-r from-green-400/10 to-blue-500/10 backdrop-blur-sm border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">활동 상태</p>
              <p className="text-xs text-gray-600">온라인</p>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-600">
            <p>오늘 학습 시간: 2h 30m</p>
            <p>이번 주 커밋: 12회</p>
          </div>
        </div>
      </nav>
    </aside>
  )
}
