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

export default function SermonsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">설교</h1>
          <p className="text-gray-600">하나님의 말씀으로 은혜받는 온누리교회 설교 모음입니다.</p>
        </div>

        {/* Recent Sermons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <GlassCard variant="default" size="md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">최근 설교</h2>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>전체</option>
                  <option>주일 설교</option>
                  <option>수요 예배</option>
                  <option>특별 집회</option>
                </select>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "하나님의 계획과 우리의 순종",
                    pastor: "담임목사님",
                    date: "2024.09.08",
                    scripture: "로마서 8:28-30",
                    duration: "45분",
                    views: 1240
                  },
                  {
                    title: "믿음으로 살아가는 청년",
                    pastor: "청년부 목사님",
                    date: "2024.09.01",
                    scripture: "히브리서 11:1-6",
                    duration: "38분",
                    views: 890
                  },
                  {
                    title: "사랑의 실천",
                    pastor: "담임목사님",
                    date: "2024.08.25",
                    scripture: "고린도전서 13:1-13",
                    duration: "42분",
                    views: 1580
                  }
                ].map((sermon, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{sermon.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{sermon.scripture}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{sermon.pastor}</span>
                          <span>{sermon.date}</span>
                          <span>{sermon.duration}</span>
                          <span>조회 {sermon.views}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                          듣기
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                          다운로드
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Sermon */}
            <GlassCard variant="elevated" size="md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">추천 설교</h3>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">청년을 위한 특별 시리즈</h4>
                <p className="text-sm text-gray-600 mb-3">"하나님이 주신 꿈을 향해"</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  시리즈 보기
                </button>
              </div>
            </GlassCard>

            {/* Sermon Categories */}
            <GlassCard variant="default" size="md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">설교 카테고리</h3>
              <div className="space-y-2">
                {[
                  { category: "주일 설교", count: 124 },
                  { category: "수요 예배", count: 87 },
                  { category: "청년부 설교", count: 45 },
                  { category: "특별 집회", count: 23 }
                ].map((cat, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <span className="text-sm font-medium text-gray-900">{cat.category}</span>
                    <span className="text-xs text-blue-600 font-medium">{cat.count}개</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
