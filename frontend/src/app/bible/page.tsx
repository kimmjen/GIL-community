'use client'

import dynamic from 'next/dynamic'

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

const GlassCard = dynamic(() => import('@/components/ui/GlassCard'))

export default function Bible() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">성경 읽기</h1>
          <p className="text-gray-600">하나님의 말씀과 함께하는 시간을 가져보세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">📖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">오늘의 말씀</h3>
              <p className="text-gray-600 mb-4">매일 새로운 말씀으로 하루를 시작하세요.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                말씀 보기
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">📅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">성경 통독</h3>
              <p className="text-gray-600 mb-4">체계적인 성경 읽기 계획을 따라가세요.</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                통독 계획
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">💭</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">묵상 나눔</h3>
              <p className="text-gray-600 mb-4">말씀을 통해 받은 은혜를 나누어보세요.</p>
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                묵상 쓰기
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </DashboardLayout>
  )
}
