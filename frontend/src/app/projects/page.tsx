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

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: '여름 성경 학교',
      description: '아이들을 위한 여름 성경 학교 준비 프로젝트',
      status: '진행중',
      progress: 75,
      category: ['교육', '봉사', '어린이'],
      leader: '김민수 형제',
      participants: 12,
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: '독거노인 돌봄 사역',
      description: '지역 독거노인분들을 위한 정기 방문 및 돌봄 사역',
      status: '진행중',
      progress: 90,
      category: ['봉사', '돌봄', '지역사회'],
      leader: '이영희 자매',
      participants: 8,
      startDate: '2024-03-01',
      endDate: '진행중',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      name: '청년 찬양팀 구성',
      description: '새로운 청년 찬양팀을 구성하여 예배를 섬기는 프로젝트',
      status: '모집중',
      progress: 40,
      category: ['찬양', '예배', '팀워크'],
      leader: '박성민 형제',
      participants: 6,
      startDate: '2024-09-15',
      endDate: '2024-12-31',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      name: '선교지 후원 프로젝트',
      description: '필리핀 선교지 어린이들을 위한 후원 및 편지 교류',
      status: '완료',
      progress: 100,
      category: ['선교', '후원', '국제'],
      leader: '최다윗 형제',
      participants: 15,
      startDate: '2024-01-01',
      endDate: '2024-08-31',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const categories = [
    { name: '봉사', count: 8, color: 'bg-blue-100 text-blue-800' },
    { name: '교육', count: 5, color: 'bg-green-100 text-green-800' },
    { name: '찬양', count: 3, color: 'bg-purple-100 text-purple-800' },
    { name: '선교', count: 4, color: 'bg-orange-100 text-orange-800' },
    { name: '돌봄', count: 6, color: 'bg-red-100 text-red-800' },
    { name: '청년', count: 7, color: 'bg-teal-100 text-teal-800' }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">공동체 프로젝트</h1>
            <p className="text-gray-600">함께 진행하는 의미 있는 사역들</p>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            새 프로젝트 제안
          </button>
        </div>

        {/* Project Categories */}
        <GlassCard size="md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">프로젝트 카테고리</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium ${category.color} cursor-pointer hover:opacity-80 transition-opacity`}
              >
                {category.name} ({category.count})
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Active Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <GlassCard key={project.id} size="md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === '진행중' ? 'bg-blue-100 text-blue-800' :
                      project.status === '완료' ? 'bg-green-100 text-green-800' :
                      project.status === '모집중' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    👥 {project.participants}명
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.category.map((cat, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">진행률</span>
                    <span className="text-gray-900 font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${project.color} h-2 rounded-full transition-all duration-300`}
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="text-gray-600">프로젝트 리더</p>
                      <p className="font-medium text-gray-900">{project.leader}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">기간</p>
                      <p className="font-medium text-gray-900 text-xs">
                        {project.startDate} ~ {project.endDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    {project.status === '모집중' ? '참여하기' : '자세히 보기'}
                  </button>
                  <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    공유
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Project Statistics */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">프로젝트 통계</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
              <div className="text-sm text-gray-600">전체 프로젝트</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">8</div>
              <div className="text-sm text-gray-600">진행 중</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-1">3</div>
              <div className="text-sm text-gray-600">모집 중</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">68</div>
              <div className="text-sm text-gray-600">참여 인원</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
