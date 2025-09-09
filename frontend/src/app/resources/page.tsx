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

export default function Resources() {
  const resourceCategories = [
    {
      id: 1,
      title: '성경 읽기 도구',
      description: '말씀 읽기와 묵상에 도움이 되는 자료들',
      icon: 'from-blue-500 to-blue-600',
      count: 12,
      resources: [
        { name: '개역개정 성경', description: '온라인 성경 읽기', url: 'https://bible.com/', type: '성경' },
        { name: '매일성경', description: '일일 묵상 자료', url: '#', type: '묵상' },
        { name: '큐티 나침반', description: '체계적인 큐티 가이드', url: '#', type: '큐티' },
        { name: '성경 지도', description: '성경 지리 정보', url: '#', type: '자료' }
      ]
    },
    {
      id: 2,
      title: '찬양 및 예배',
      description: '찬양과 예배에 필요한 리소스',
      icon: 'from-green-500 to-green-600',
      count: 18,
      resources: [
        { name: '새찬송가', description: '찬송가 악보와 음원', url: '#', type: '찬양' },
        { name: 'CCM 악보', description: '현대 기독교 음악 악보', url: '#', type: '악보' },
        { name: '예배 순서지', description: '주일 예배 순서', url: '#', type: '예배' },
        { name: '성가대 연습곡', description: '성가대 연습 자료', url: '#', type: '연습' }
      ]
    },
    {
      id: 3,
      title: '신앙 서적',
      description: '신앙 성장에 도움이 되는 추천 도서',
      icon: 'from-purple-500 to-purple-600',
      count: 25,
      resources: [
        { name: '순전한 기독교', description: 'C.S. 루이스 저', url: '#', type: '도서' },
        { name: '기도', description: 'O.헬리스비 저', url: '#', type: '도서' },
        { name: '묵상과 기도', description: '존 스토트 저', url: '#', type: '도서' },
        { name: '청년을 위한 QT', description: '큐티 입문서', url: '#', type: '도서' }
      ]
    },
    {
      id: 4,
      title: '선교 및 전도',
      description: '선교와 전도에 필요한 자료들',
      icon: 'from-orange-500 to-orange-600',
      count: 8,
      resources: [
        { name: '복음 소책자', description: '전도용 복음 자료', url: '#', type: '전도' },
        { name: '간증 가이드', description: '간증 작성법', url: '#', type: '간증' },
        { name: '선교지 소식', description: '해외 선교지 현황', url: '#', type: '선교' },
        { name: '전도 훈련 자료', description: '효과적인 전도법', url: '#', type: '훈련' }
      ]
    },
    {
      id: 5,
      title: '청년 사역',
      description: '청년들을 위한 특별 자료',
      icon: 'from-teal-500 to-teal-600',
      count: 15,
      resources: [
        { name: '청년 큐티', description: '청년 맞춤 묵상 자료', url: '#', type: '큐티' },
        { name: '진로 상담', description: '기독교적 진로 지도', url: '#', type: '상담' },
        { name: '결혼 준비', description: '기독교 결혼관', url: '#', type: '교육' },
        { name: '청년 리더십', description: '청년 리더 양성', url: '#', type: '리더십' }
      ]
    },
    {
      id: 6,
      title: '교육 자료',
      description: '성경 공부와 교육 프로그램',
      icon: 'from-red-500 to-red-600',
      count: 20,
      resources: [
        { name: '새가족 교육', description: '새신자 교육 과정', url: '#', type: '교육' },
        { name: '성경 공부 교재', description: '체계적인 성경 학습', url: '#', type: '교재' },
        { name: '제자훈련', description: '제자도 훈련 과정', url: '#', type: '훈련' },
        { name: '소그룹 가이드', description: '소그룹 운영 매뉴얼', url: '#', type: '가이드' }
      ]
    }
  ]

  const popularResources = [
    { name: '오늘의 말씀', category: '성경', downloads: 1240, rating: 4.9 },
    { name: '새찬송가 앱', category: '찬양', downloads: 890, rating: 4.8 },
    { name: '기도 노트', category: '기도', downloads: 756, rating: 4.7 },
    { name: '청년 큐티', category: '묵상', downloads: 634, rating: 4.6 },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">신앙 자료실</h1>
            <p className="text-gray-600">신앙 생활에 도움이 되는 다양한 자료들을 모았습니다.</p>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            자료 추천하기
          </button>
        </div>

        {/* Popular Resources */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">인기 자료</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularResources.map((resource, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{resource.name}</h4>
                    <p className="text-sm text-gray-600">{resource.category}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">📥 {resource.downloads}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-gray-600">{resource.rating}</span>
                    </div>
                  </div>
                  <button className="w-full px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    다운로드
                  </button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCategories.map((category) => (
            <GlassCard key={category.id} size="md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.icon} flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">📚</span>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                    {category.count}개
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                </div>

                <div className="space-y-2">
                  {category.resources.slice(0, 3).map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{resource.name}</p>
                        <p className="text-xs text-gray-600">{resource.description}</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {resource.type}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                  전체 보기
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Resource Stats */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">자료실 현황</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">128</div>
              <div className="text-sm text-gray-600">전체 자료</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">24</div>
              <div className="text-sm text-gray-600">이번 주 추가</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-1">3.2K</div>
              <div className="text-sm text-gray-600">총 다운로드</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">4.7</div>
              <div className="text-sm text-gray-600">평균 평점</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
