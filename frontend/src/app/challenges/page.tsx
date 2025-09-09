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

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      title: '30일 성경 통독 챌린지',
      description: '매일 정해진 분량의 성경을 읽고 묵상하기',
      difficulty: '초급',
      participants: 127,
      duration: '30일',
      reward: '성경 통독 배지',
      status: '진행중',
      progress: 60,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/10 to-green-600/10'
    },
    {
      id: 2,
      title: '21일 기도 생활 챌린지',
      description: '매일 정해진 시간에 기도하며 하나님과의 관계 깊어가기',
      difficulty: '초급',
      participants: 89,
      duration: '21일',
      reward: '기도 용사 배지',
      status: '모집중',
      progress: 0,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-600/10'
    },
    {
      id: 3,
      title: '찬양 암송 챌린지',
      description: '한 달 동안 10개의 찬양을 외우고 나누기',
      difficulty: '중급',
      participants: 56,
      duration: '30일',
      reward: '찬양 리더 배지',
      status: '진행중',
      progress: 35,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10'
    },
    {
      id: 4,
      title: '봉사 실천 챌린지',
      description: '14일 동안 매일 작은 봉사 실천하기',
      difficulty: '중급',
      participants: 43,
      duration: '14일',
      reward: '섬김의 손 배지',
      status: '모집중',
      progress: 0,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/10 to-orange-600/10'
    }
  ]

  const achievements = [
    { name: '성경 통독 완주', count: 15, icon: '📖' },
    { name: '기도 용사', count: 8, icon: '🙏' },
    { name: '찬양 리더', count: 5, icon: '🎵' },
    { name: '섬김의 손', count: 12, icon: '🤝' }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">신앙 챌린지</h1>
          <p className="text-gray-600">함께 도전하며 신앙을 성장시켜나가요.</p>
        </div>

        {/* Active Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <GlassCard key={challenge.id} size="md">
              <div className={`p-4 rounded-lg bg-gradient-to-br ${challenge.bgColor} mb-4`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${challenge.color} text-white`}>
                    {challenge.status}
                  </span>
                  <span className="text-sm text-gray-600">{challenge.difficulty}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{challenge.description}</p>

                {challenge.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">진행률</span>
                      <span className="text-gray-900 font-medium">{challenge.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${challenge.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>👥 {challenge.participants}명 참여</span>
                  <span>⏱️ {challenge.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">보상:</span>
                  <span className="text-xs font-medium text-yellow-600">{challenge.reward}</span>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    challenge.status === '진행중'
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : challenge.status === '모집중'
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gray-500 text-white cursor-not-allowed'
                  }`}
                  disabled={challenge.status === '종료'}
                >
                  {challenge.status === '진행중' ? '계속하기' : challenge.status === '모집중' ? '참여하기' : '완료됨'}
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Achievements Section */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">달성한 배지</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{achievement.name}</h4>
                <p className="text-sm text-gray-600">{achievement.count}명 달성</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Personal Progress */}
        <GlassCard size="md">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">나의 챌린지 현황</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">참여 중인 챌린지</h4>
                <p className="text-sm text-gray-600">현재 2개의 챌린지에 참여 중</p>
              </div>
              <div className="text-2xl font-bold text-blue-600">2</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">완료한 챌린지</h4>
                <p className="text-sm text-gray-600">지금까지 완주한 챌린지</p>
              </div>
              <div className="text-2xl font-bold text-green-600">5</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">획득한 배지</h4>
                <p className="text-sm text-gray-600">노력의 결실들</p>
              </div>
              <div className="text-2xl font-bold text-yellow-600">8</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
