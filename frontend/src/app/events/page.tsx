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

export default function Events() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">모임 & 행사</h1>
          <p className="text-gray-600">길 공동체의 다양한 모임과 행사에 참여하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">⛪</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">주일 예배</h3>
              <p className="text-gray-600 mb-4">매주 주일 공동체 예배 일정과 정보.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                예배 정보
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">수요 모임</h3>
              <p className="text-gray-600 mb-4">매주 수요일 성경 공부와 나눔 시간.</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                모임 참여
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">🏕️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">수련회</h3>
              <p className="text-gray-600 mb-4">정기 수련회와 특별 집회 안내.</p>
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                수련회 정보
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">🎉</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">특별 행사</h3>
              <p className="text-gray-600 mb-4">생일파티, 송년회 등 특별한 행사들.</p>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                행사 일정
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">봉사 활동</h3>
              <p className="text-gray-600 mb-4">지역사회와 함께하는 봉사 활동.</p>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                봉사 참여
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">📅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">일정 캘린더</h3>
              <p className="text-gray-600 mb-4">모든 모임과 행사의 전체 일정.</p>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                캘린더 보기
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </DashboardLayout>
  )
}
