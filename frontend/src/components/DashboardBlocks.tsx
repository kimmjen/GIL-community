import GlassCard from './ui/GlassCard'
// import GlassCard from './ui/GlassCard'
// export default function DashboardBlocks() {
//   return (
    

export default function DashboardBlocks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Welcome Card - Large */}
      <GlassCard className="md:col-span-2 lg:col-span-2" size="lg">
        <div className="relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 text-sm font-medium mb-4">
              환영합니다
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              안녕하세요, 김민준님!
            </h1>
            <p className="text-gray-600">
              오늘도 멋진 하루 되세요. 새로운 도전이 기다리고 있어요!
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Activity Score Card */}
      <GlassCard size="md">
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-md"></div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">활동 점수</h3>
            <p className="text-2xl font-bold text-blue-600">1,247</p>
            <p className="text-sm text-green-600">+12% 이번 주</p>
          </div>
        </div>
      </GlassCard>

      {/* Achievement Badge Card */}
      <GlassCard size="md">
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">획득 배지</h3>
            <p className="text-2xl font-bold text-purple-600">8</p>
            <p className="text-sm text-green-600">새로운 배지 2개</p>
          </div>
        </div>
      </GlassCard>

      {/* Recent Activity - Wide */}
      <GlassCard className="md:col-span-2 lg:col-span-3" size="md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">최근 활동</h3>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <div className="space-y-3">
          {[
            { action: '새로운 프로젝트 생성', time: '2시간 전', color: 'bg-blue-500' },
            { action: 'React 스터디 참여', time: '5시간 전', color: 'bg-green-500' },
            { action: '코드 리뷰 완료', time: '1일 전', color: 'bg-purple-500' },
            { action: '멘토링 세션 참석', time: '2일 전', color: 'bg-orange-500' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
              <div className={`w-3 h-3 ${activity.color} rounded-full`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                <p className="text-xs text-gray-600">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Progress Card */}
      <GlassCard size="md">
        <div className="relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <h3 className="font-semibold text-gray-800 mb-4">학습 진도</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700">React</span>
                  <span className="text-blue-600 font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700">TypeScript</span>
                  <span className="text-green-600 font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Quick Actions */}
      <GlassCard className="md:col-span-2" size="md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">빠른 액션</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: '새 프로젝트', color: 'from-blue-500 to-blue-600' },
            { name: '질문하기', color: 'from-green-500 to-green-600' },
            { name: '스터디 참여', color: 'from-purple-500 to-purple-600' },
            { name: '멘토 찾기', color: 'from-orange-500 to-orange-600' }
          ].map((action, index) => (
            <button 
              key={index}
              className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-all duration-200 group"
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center text-white text-sm mb-2 group-hover:scale-110 transition-transform`}>
                <div className="w-4 h-4 bg-white/30 rounded"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">{action.name}</span>
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Community Stats */}
      <GlassCard size="md">
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-lg"></div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">커뮤니티</h3>
            <p className="text-2xl font-bold text-green-600">1,543</p>
            <p className="text-sm text-gray-600">활성 멤버</p>
          </div>
        </div>
      </GlassCard>

      {/* Weather Card */}
      <GlassCard size="md">
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-2xl"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">오늘 날씨</h3>
            <p className="text-2xl font-bold text-orange-600">23°C</p>
            <p className="text-sm text-gray-600">맑음, 서울</p>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}