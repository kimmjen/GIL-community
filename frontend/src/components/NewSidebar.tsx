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
    { id: 'community', name: '공동체', path: '/community' },
    { id: 'sermons', name: '설교', path: '/sermons' },
    { id: 'bible', name: '성경 읽기', path: '/bible' },
    { id: 'prayer', name: '기도 제목', path: '/prayer' },
    { id: 'events', name: '모임 & 행사', path: '/events' },
    { id: 'gallery', name: '활동 사진', path: '/gallery' },
  ]

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  if (!mounted) {
    return (
      <aside className="w-64 h-full bg-white border-r border-gray-200 shadow-sm">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="w-10 h-10 rounded-xl bg-gray-200 animate-pulse"></div>
        </div>
        <div className="px-4 py-6 space-y-2">
          {Array(7).fill(0).map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </aside>
    )
  }

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">GIL</h1>
            <p className="text-xs text-gray-500 font-medium">Community</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="px-4 py-6">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  pathname === item.path
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{item.name}</span>
                {pathname === item.path && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 px-4 mb-3">빠른 액션</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200">
              <span>새 프로젝트</span>
            </button>
            <button className="w-full flex items-center px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200">
              <span>질문하기</span>
            </button>
            <button className="w-full flex items-center px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200">
              <span>스터디 생성</span>
            </button>
          </div>
        </div>

        {/* Status Card */}
        <div className="mt-8 mx-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-200">
          <div className="flex items-center space-x-3 mb-3">
            <div>
              <p className="text-sm font-semibold text-gray-800">온라인</p>
              <p className="text-xs text-gray-600">활동 중</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            현재 3개의 프로젝트와 2개의 스터디에 참여하고 있습니다.
          </p>
        </div>
      </nav>
    </aside>
  )
}
