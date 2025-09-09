'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { mockNotifications } from '@/data/mockNotificationData'
import { Notification } from '@/types/notifications'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [showNotifications, setShowNotifications] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const unreadCount = notifications.filter(n => !n.isRead).length

  // 알림 읽음 처리
  const markAsRead = (notificationId: string) => {
    setNotifications(prev => prev.map(notif =>
      notif.id === notificationId ? { ...notif, isRead: true } : notif
    ))
  }

  // 모든 알림 읽음 처리
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, isRead: true })))
  }

  // 시간 포맷팅
  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (minutes < 1) return '방금 전'
    if (minutes < 60) return `${minutes}분 전`
    if (hours < 24) return `${hours}시간 전`
    return `${days}일 전`
  }

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
              placeholder="성경 구절, 설교, 기도 제목 검색..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            />
          </div>
        </div>

        {/* Right Side - Controls */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
            >
              <span className="text-xl">🔔</span>
              <span className="hidden md:inline text-sm">알림</span>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-medium">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">알림</h3>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      모두 읽음
                    </button>
                  )}
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      새로운 알림이 없습니다
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                          !notification.isRead ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => {
                          markAsRead(notification.id)
                          if (notification.actionUrl) {
                            // 실제 라우팅은 나중에 구현
                            console.log(`Navigate to: ${notification.actionUrl}`)
                          }
                          setShowNotifications(false)
                        }}
                      >
                        <div className="flex items-start space-x-3">
                          <span className={`text-lg ${notification.color}`}>
                            {notification.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {notification.title}
                              </p>
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {formatTimeAgo(notification.createdAt)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {notifications.length > 0 && (
                  <div className="p-3 border-t border-gray-200">
                    <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700">
                      모든 알림 보기
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
            title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
            <span className="hidden md:inline text-sm">
              {isDark ? '라이트 모드' : '다크 모드'}
            </span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-medium">김</span>
              </div>
              {/* 온라인 상태 표시 */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">김민준</p>
              <p className="text-xs text-gray-500">길 공동체</p>
            </div>
          </div>

          {/* Settings */}
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            title="설정"
          >
            <span className="text-xl">⚙️</span>
          </button>
        </div>
      </div>

      {/* 클릭 외부 영역 감지 */}
      {showNotifications && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowNotifications(false)}
        />
      )}
    </header>
  )
}
