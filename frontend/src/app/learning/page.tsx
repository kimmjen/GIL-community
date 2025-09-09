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

export default function Learning() {
  const studies = [
    {
      id: 1,
      title: '창세기 깊이 읽기',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      leader: '김요한 목사님',
      color: 'from-blue-500 to-blue-600',
      difficulty: '초급',
      participants: 12,
      schedule: '매주 수요일 저녁 7시',
      type: '성경 공부'
    },
    {
      id: 2,
      title: '로마서 강해',
      progress: 60,
      totalLessons: 20,
      completedLessons: 12,
      leader: '이바울 전도사님',
      color: 'from-indigo-500 to-indigo-600',
      difficulty: '중급',
      participants: 8,
      schedule: '매주 금요일 저녁 8시',
      type: '성경 공부'
    },
    {
      id: 3,
      title: '찬양 인도 스쿨',
      progress: 30,
      totalLessons: 16,
      completedLessons: 5,
      leader: '박다윗 형제',
      color: 'from-purple-500 to-purple-600',
      difficulty: '초급',
      participants: 6,
      schedule: '매주 토요일 오후 2시',
      type: '찬양 교육'
    },
    {
      id: 4,
      title: '기도의 깊이',
      progress: 85,
      totalLessons: 12,
      completedLessons: 10,
      leader: '최한나 자매',
      color: 'from-green-500 to-green-600',
      difficulty: '중급',
      participants: 10,
      schedule: '매주 화요일 오전 10시',
      type: '영성 훈련'
    }
  ]

  const studyTypes = [
    {
      type: '성경 공부',
      description: '체계적인 성경 말씀 연구와 묵상',
      icon: '📖',
      color: 'from-blue-500 to-blue-600',
      count: 8
    },
    {
      type: '찬양 교육',
      description: '찬양 인도와 악기 연주 교육',
      icon: '🎵',
      color: 'from-purple-500 to-purple-600',
      count: 4
    },
    {
      type: '영성 훈련',
      description: '기도와 묵상 등 영성 깊이 기르기',
      icon: '🙏',
      color: 'from-green-500 to-green-600',
      count: 6
    },
    {
      type: '전도 훈련',
      description: '효과적인 전도 방법과 간증 나누기',
      icon: '✨',
      color: 'from-orange-500 to-orange-600',
      count: 3
    }
  ]

  const upcomingStudies = [
    {
      title: '요한복음 강해',
      leader: '김베드로 목사님',
      startDate: '2024-10-15',
      duration: '12주',
      type: '성경 공부'
    },
    {
      title: '새가족 성경 학교',
      leader: '이마리아 자매',
      startDate: '2024-10-20',
      duration: '8주',
      type: '새가족 교육'
    },
    {
      title: '청년 리더십 스쿨',
      leader: '박바울 형제',
      startDate: '2024-11-01',
      duration: '10주',
      type: '리더십 훈련'
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">신앙 학습</h1>
            <p className="text-gray-600">함께 배우고 성장하는 소그룹 스터디에 참여하세요.</p>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            새 스터디 제안
          </button>
        </div>

        {/* Study Types */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">스터디 유형</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {studyTypes.map((study, index) => (
              <div key={index} className={`p-4 rounded-lg bg-gradient-to-br ${study.color} bg-opacity-10 border border-opacity-20 cursor-pointer hover:bg-opacity-20 transition-all`}>
                <div className="text-center">
                  <div className="text-3xl mb-3">{study.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{study.type}</h3>
                  <p className="text-sm text-gray-600 mb-3">{study.description}</p>
                  <span className="inline-block px-2 py-1 bg-white bg-opacity-80 rounded text-xs text-gray-700">
                    {study.count}개 진행 중
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Current Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <GlassCard key={study.id} size="md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${study.color}`}></div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                      {study.type}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    study.difficulty === '초급' ? 'bg-green-100 text-green-800' :
                    study.difficulty === '중급' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {study.difficulty}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>👤 인도자: {study.leader}</p>
                    <p>👥 참여자: {study.participants}명</p>
                    <p>📅 일정: {study.schedule}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">진행률</span>
                    <span className="text-gray-900 font-medium">
                      {study.completedLessons}/{study.totalLessons} ({study.progress}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${study.color} h-2 rounded-full transition-all duration-300`}
                      style={{width: `${study.progress}%`}}
                    ></div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    스터디 참여
                  </button>
                  <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    자세히 보기
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Upcoming Studies */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">곧 시작하는 스터디</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingStudies.map((study, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{study.title}</h4>
                    <p className="text-sm text-gray-600">인도자: {study.leader}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-600">시작일: <span className="font-medium text-gray-900">{study.startDate}</span></p>
                    <p className="text-gray-600">기간: <span className="font-medium text-gray-900">{study.duration}</span></p>
                    <p className="text-gray-600">유형: <span className="font-medium text-gray-900">{study.type}</span></p>
                  </div>
                  <button className="w-full px-3 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors">
                    사전 신청
                  </button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* My Learning Progress */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">나의 학습 현황</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
              <div className="text-sm text-gray-600">참여 중인 스터디</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">8</div>
              <div className="text-sm text-gray-600">완료한 스터디</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-1">156</div>
              <div className="text-sm text-gray-600">학습 시간</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">2</div>
              <div className="text-sm text-gray-600">인도한 스터디</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
