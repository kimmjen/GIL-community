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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">커뮤니티</h1>
          <p className="text-gray-600">개발자들과 소통하고 지식을 공유하세요.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard size="md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">질문 & 답변</h3>
            <p className="text-gray-600 mb-4">개발 중 궁금한 점들을 질문하고 답변받으세요.</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              질문하기
            </button>
          </GlassCard>

          <GlassCard size="md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">프로젝트 쇼케이스</h3>
            <p className="text-gray-600 mb-4">완성한 프로젝트를 공유하고 피드백받으세요.</p>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              프로젝트 등록
            </button>
          </GlassCard>

          <GlassCard size="md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">스터디 그룹</h3>
            <p className="text-gray-600 mb-4">함께 공부할 동료들을 찾아보세요.</p>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              참여하기
            </button>
          </GlassCard>
        </div>
      </div>
    </DashboardLayout>
  )
}
