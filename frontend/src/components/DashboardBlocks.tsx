import GlassCard from './ui/GlassCard'

export default function DashboardBlocks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Welcome Card - Large */}
      <GlassCard className="md:col-span-2 lg:col-span-2" variant="elevated" size="lg">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              길 공동체에 오신 것을 환영합니다
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              안녕하세요, 김민준님!
            </h1>
            <p className="text-gray-600 leading-relaxed">
              오늘도 멋진 하루 되세요. 새로운 도전이 기다리고 있어요!
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Activity Score Card */}
      <GlassCard variant="elevated" size="md">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">말씀</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">활동 점수</h3>
          <p className="text-3xl font-bold text-blue-600 mb-1">1,247</p>
          <div className="flex items-center justify-center space-x-1 text-sm">
            <span className="text-green-600">↗️</span>
            <span className="text-green-600 font-medium">+12%</span>
            <span className="text-gray-500">이번 주</span>
          </div>
        </div>
      </GlassCard>

      {/* Achievement Badge Card */}
      <GlassCard variant="elevated" size="md">
            <span className="text-white font-bold">기도</span>
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">🏆</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">획득 배지</h3>
          <div className="flex items-center justify-center space-x-1 text-sm">
            <span className="text-orange-600">✨</span>
            <span className="text-gray-600">새로운 배지 2개</span>
          </div>
        </div>
      </GlassCard>

      {/* Recent Activity - Wide */}
      <GlassCard className="md:col-span-2 lg:col-span-3" variant="default" size="md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">최근 활동</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">실시간</span>
          </div>
        </div>
            { action: '주일 예배 참석', time: '2일 전', category: '예배', color: 'text-blue-600' },
            { action: '청년부 모임 참여', time: '3일 전', category: '모임', color: 'text-green-600' },
            { action: '성경 스터디 완료', time: '4일 전', category: '스터디', color: 'text-purple-600' },
            { action: '중보 기도 요청', time: '1주 전', category: '기도', color: 'text-orange-600' }
            { action: '코드 리뷰 완료', time: '1일 전', icon: '👀', color: 'text-purple-600' },
            { action: '멘토링 세션 참석', time: '2일 전', icon: '🧑‍🏫', color: 'text-orange-600' }
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">{activity.category}</span>
              </div>
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-transparent hover:border-gray-200">
              <div className="text-2xl">{activity.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <div className={`text-xs font-medium ${activity.color}`}>완료</div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Progress Card */}
      <GlassCard variant="default" size="md">
        <h3 className="font-semibold text-gray-900 mb-4">학습 진도</h3>
        <div className="space-y-4">
          {[
            { name: 'React', progress: 75, color: 'bg-blue-500' },
            { name: 'TypeScript', progress: 60, color: 'bg-green-500' },
            { name: 'Next.js', progress: 45, color: 'bg-purple-500' }
          ].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-gray-600">{skill.progress}%</span>
                <div
                  className={`${book.color} h-2 rounded-full transition-all duration-300`}
                <div
                  className={`${skill.color} h-2 rounded-full transition-all duration-300`}
                  style={{width: `${skill.progress}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Quick Stats */}
      <GlassCard className="md:col-span-2" variant="outlined" size="md">
        <h3 className="font-semibold text-gray-900 mb-4">이번 주 통계</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600">완료한 작업</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">3</p>
            <p className="text-sm text-gray-600">참여한 프로젝트</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">8h</p>
            <p className="text-sm text-gray-600">학습 시간</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <p className="text-2xl font-bold text-orange-600">5</p>
            <p className="text-sm text-gray-600">코드 리뷰</p>
          </div>
        </div>
      </GlassCard>

      {/* Weather Widget */}
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">모임</span>
          </div>
        <div className="text-center">
          <div className="text-4xl mb-2">☀️</div>
          <h3 className="font-semibold text-gray-900 mb-1">서울</h3>
          <p className="text-2xl font-bold text-gray-900">24°C</p>
          <p className="text-sm text-gray-600">맑음</p>
          <p className="text-xs text-gray-500 mt-2">코딩하기 좋은 날씨예요!</p>
        </div>
      </GlassCard>

      {/* Motivation Quote */}
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">설교</span>
          </div>
        <div className="text-center">
          <div className="text-3xl mb-3">💡</div>
          <blockquote className="text-sm text-gray-700 italic leading-relaxed">
            "코드는 시를 쓰는 것과 같다. 간결하고 아름다워야 한다."
          </blockquote>
          <p className="text-xs text-gray-500 mt-2">- 개발자의 명언</p>
        </div>
      </GlassCard>
    </div>
  )
}