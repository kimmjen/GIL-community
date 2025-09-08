'use client'

import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/contexts/ThemeContext'

// 동적 import로 클라이언트 사이드 렌더링 최적화
const DashboardLayout = dynamic(() => import('@/layout/DashboardLayout'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">로딩 중...</p>
      </div>
    </div>
  )
})

const DashboardBlocks = dynamic(() => import('@/components/DashboardBlocks'), {
  ssr: false
})

export default function Home() {
  return (
    <ThemeProvider>
      <DashboardLayout>
        <DashboardBlocks />
      </DashboardLayout>
    </ThemeProvider>
  )
}
