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

export default function Community() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">길 공동체</h1>
          <p className="text-gray-600">온누리교회 청년부 길 공동체에서 함께 성장하고 나누어요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">멤버</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">공동체 멤버</h3>
              <p className="text-gray-600 mb-4">함께하는 청년들과 연결되고 소통하세요.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                멤버 보기
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">기도</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">기도 나눔</h3>
              <p className="text-gray-600 mb-4">서로의 기도 제목을 나누고 함께 기도해요.</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                기도 제목 보기
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">그룹</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">소그룹</h3>
              <p className="text-gray-600 mb-4">소그룹별 활동과 나눔을 확인하세요.</p>
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                소그룹 보기
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">모임</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">정기 모임</h3>
              <p className="text-gray-600 mb-4">주일 예배와 수요 모임 일정을 확인하세요.</p>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                모임 일정
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">공지</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">공지사항</h3>
              <p className="text-gray-600 mb-4">중요한 공지사항과 안내를 확인하세요.</p>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                공지 보기
              </button>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">나눔</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">삶 나눔</h3>
              <p className="text-gray-600 mb-4">일상의 이야기와 간증을 나누어요.</p>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                나눔 글쓰기
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </DashboardLayout>
  )
}
