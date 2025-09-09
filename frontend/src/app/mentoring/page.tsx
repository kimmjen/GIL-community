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

export default function Mentoring() {
  const mentors = [
    {
      id: 1,
      name: '김요한 목사님',
      title: '신앙 생활 멘토',
      ministry: '온누리교회',
      experience: '12년',
      expertise: ['성경 공부', '기도 생활', '말씀 묵상', '신앙 상담'],
      rating: 4.9,
      sessions: 127,
      available: true,
      avatar: 'from-blue-500 to-blue-600',
      nextSlot: '이번 주 수요일 저녁',
      specialty: '청년 신앙 지도'
    },
    {
      id: 2,
      name: '이다윗 형제',
      title: '찬양 멘토',
      ministry: '길 공동체 찬양팀',
      experience: '8년',
      expertise: ['찬양 인도', '악기 연주', '작곡', '예배 기획'],
      rating: 4.8,
      sessions: 89,
      available: true,
      avatar: 'from-green-500 to-green-600',
      nextSlot: '토요일 오후',
      specialty: '찬양 사역'
    },
    {
      id: 3,
      name: '박에스더 자매',
      title: '전도 멘토',
      ministry: '선교부',
      experience: '10년',
      expertise: ['전도법', '간증', '관계 전도', '선교 심장'],
      rating: 5.0,
      sessions: 156,
      available: false,
      avatar: 'from-purple-500 to-purple-600',
      nextSlot: '다음 주 월요일',
      specialty: '전도와 선교'
    },
    {
      id: 4,
      name: '최바울 형제',
      title: '성경 공부 멘토',
      ministry: '신학생',
      experience: '6년',
      expertise: ['성경 해석', '신학', '큐티', '소그룹 인도'],
      rating: 4.7,
      sessions: 73,
      available: true,
      avatar: 'from-orange-500 to-orange-600',
      nextSlot: '금요일 저녁',
      specialty: '말씀 연구'
    }
  ]

  const mentoringTypes = [
    {
      type: '1:1 신앙 상담',
      description: '개인적인 신앙 고민과 문제를 나누고 해결책을 찾아보세요',
      duration: '1시간',
      icon: '💬',
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: '소그룹 성경 공부',
      description: '3-5명이 함께 성경을 깊이 있게 공부합니다',
      duration: '1.5시간',
      icon: '📖',
      color: 'from-green-500 to-green-600'
    },
    {
      type: '찬양 레슨',
      description: '악기 연주나 찬양 인도 실력을 향상시켜보세요',
      duration: '1시간',
      icon: '🎵',
      color: 'from-purple-500 to-purple-600'
    },
    {
      type: '전도 훈련',
      description: '효과적인 전도 방법과 간증을 배워보세요',
      duration: '2시간',
      icon: '✨',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">신앙 멘토링</h1>
          <p className="text-gray-600">선배 신앙인들과 함께 신앙을 성장시켜나가세요.</p>
        </div>

        {/* Mentoring Types */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">멘토링 유형</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mentoringTypes.map((type, index) => (
              <div key={index} className={`p-4 rounded-lg bg-gradient-to-br ${type.color} bg-opacity-10 border border-opacity-20`}>
                <div className="text-center">
                  <div className="text-3xl mb-3">{type.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{type.type}</h3>
                  <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                  <span className="inline-block px-2 py-1 bg-white bg-opacity-80 rounded text-xs text-gray-700">
                    {type.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Available Mentors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentors.map((mentor) => (
            <GlassCard key={mentor.id} size="md">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${mentor.avatar} flex items-center justify-center`}>
                    <span className="text-white font-bold">
                      {mentor.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.title}</p>
                    <p className="text-xs text-gray-500">{mentor.ministry}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    mentor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {mentor.available ? '예약 가능' : '예약 중'}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">전문 분야</span>
                    <span className="text-gray-900 font-medium">{mentor.specialty}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">경험</span>
                    <span className="text-gray-900 font-medium">{mentor.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">평점</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-gray-900 font-medium">{mentor.rating}</span>
                      <span className="text-gray-500">({mentor.sessions}회)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">다음 가능 시간</span>
                    <span className="text-gray-900 font-medium">{mentor.nextSlot}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-medium">전문 영역</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <button
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      mentor.available 
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!mentor.available}
                  >
                    {mentor.available ? '멘토링 신청' : '예약 대기'}
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    프로필 보기
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* My Mentoring */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">나의 멘토링 현황</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-sm text-gray-600">진행 중인 멘토링</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">12</div>
              <div className="text-sm text-gray-600">완료한 세션</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-sm text-gray-600">나의 평점</div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-4">다음 일정</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">김요한 목사님과 성경 공부</p>
                  <p className="text-sm text-gray-600">수요일 오후 7시 | 온라인</p>
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                  참여하기
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">이다윗 형제와 찬양 레슨</p>
                  <p className="text-sm text-gray-600">토요일 오후 2시 | 교회</p>
                </div>
                <button className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">
                  확인됨
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
