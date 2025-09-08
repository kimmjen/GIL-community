'use client'

import dynamic from 'next/dynamic'

const DashboardLayout = dynamic(() => import('@/layout/DashboardLayout'), { ssr: false })
const GlassCard = dynamic(() => import('@/components/ui/GlassCard'))

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      title: '30일 코딩 챌린지',
      description: '매일 알고리즘 문제를 해결하여 실력을 키워보세요',
      difficulty: '초급',
      participants: 1247,
      duration: '30일',
      reward: '코딩 마스터 배지',
      status: '진행중',
      progress: 60,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/10 to-green-600/10'
    },
    {
      id: 2,
      title: 'React 프로젝트 마라톤',
      description: '7일 동안 완전한 React 애플리케이션 구축하기',
      difficulty: '중급',
      participants: 892,
      duration: '7일',
      reward: 'React 전문가 배지',
      status: '모집중',
      progress: 0,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-600/10'
    },
    {
      id: 3,
      title: '오픈소스 기여 챌린지',
      description: '한 달 동안 5개의 오픈소스 프로젝트에 기여하기',
      difficulty: '고급',
      participants: 456,
      duration: '30일',
      reward: '오픈소스 컨트리뷰터 배지',
      status: '종료',
      progress: 100,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10'
    }
  ]

  const achievements = [
    { name: '첫 번째 커밋', icon: '⭐', completed: true },
    { name: '일주일 연속 코딩', icon: '🔥', completed: true },
    { name: '코드 리뷰 마스터', icon: '👑', completed: false },
    { name: '버그 헌터', icon: '🐛', completed: true }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">챌린지</h1>
            <p className="text-gray-600">도전을 통해 실력을 향상시키고 성취를 달성하세요.</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
            새 챌린지 제안
          </button>
        </div>

        {/* Active Challenges */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">진행 중인 챌린지</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <GlassCard key={challenge.id} size="md" className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${challenge.bgColor} rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Status and Difficulty */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        challenge.status === '진행중' ? 'bg-green-500/20 text-green-700' :
                        challenge.status === '모집중' ? 'bg-blue-500/20 text-blue-700' :
                        'bg-gray-500/20 text-gray-700'
                      }`}>
                        {challenge.status}
                      </div>
                      <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                        challenge.difficulty === '초급' ? 'bg-green-100/50 text-green-700' :
                        challenge.difficulty === '중급' ? 'bg-yellow-100/50 text-yellow-700' :
                        'bg-red-100/50 text-red-700'
                      }`}>
                        {challenge.difficulty}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{challenge.description}</p>

                    {/* Challenge Info */}
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">참여자</span>
                        <span className="font-medium text-gray-800">{challenge.participants.toLocaleString()}명</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">기간</span>
                        <span className="font-medium text-gray-800">{challenge.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">보상</span>
                        <span className="font-medium text-gray-800">{challenge.reward}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {challenge.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">진행률</span>
                          <span className="font-medium text-gray-800">{challenge.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200/50 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${challenge.color} h-2 rounded-full transition-all duration-500 group-hover:shadow-md`}
                            style={{width: `${challenge.progress}%`}}
                          ></div>
                        </div>
                      </div>
                    )}

                    <button className={`w-full py-3 bg-gradient-to-r ${challenge.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium text-sm ${
                      challenge.status === '종료' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}>
                      {challenge.status === '진행중' ? '계속하기' : 
                       challenge.status === '모집중' ? '참여하기' : '완료됨'}
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Achievement Board */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">성취 현황</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard size="md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">획득한 배지</h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-3 rounded-xl border transition-all duration-300 ${
                    achievement.completed 
                      ? 'bg-white/20 border-white/30 shadow-sm' 
                      : 'bg-gray-100/20 border-gray-300/30 opacity-50'
                  }`}>
                    <div className="text-center">
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <p className="text-xs font-medium text-gray-700">{achievement.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard size="md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">통계</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-sm text-gray-600">완료한 챌린지</span>
                  <span className="font-bold text-green-600 text-lg">12</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-sm text-gray-600">현재 참여 중</span>
                  <span className="font-bold text-blue-600 text-lg">3</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-sm text-gray-600">획득한 배지</span>
                  <span className="font-bold text-purple-600 text-lg">8</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-sm text-gray-600">총 포인트</span>
                  <span className="font-bold text-orange-600 text-lg">2,450</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Leaderboard */}
        <GlassCard size="md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">이번 달 리더보드</h3>
          <div className="space-y-3">
            {[
              { rank: 1, name: '김개발', points: 2890, badge: '🏆' },
              { rank: 2, name: '박코딩', points: 2650, badge: '🥈' },
              { rank: 3, name: '이프론트', points: 2420, badge: '🥉' },
              { rank: 4, name: '김민준', points: 2450, badge: '⭐' },
              { rank: 5, name: '최백엔드', points: 2200, badge: '' }
            ].map((user, index) => (
              <div key={index} className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                user.name === '김민준' ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-white/5 hover:bg-white/10'
              }`}>
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold text-gray-600 w-6">#{user.rank}</span>
                  <span className="text-lg">{user.badge}</span>
                  <span className="font-medium text-gray-800">{user.name}</span>
                </div>
                <span className="font-bold text-gray-700">{user.points.toLocaleString()}pt</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
