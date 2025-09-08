'use client'

import dynamic from 'next/dynamic'

const DashboardLayout = dynamic(() => import('@/layout/DashboardLayout'), { ssr: false })
const GlassCard = dynamic(() => import('@/components/ui/GlassCard'))

export default function Mentoring() {
  const mentors = [
    {
      id: 1,
      name: '김시니어',
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      experience: '8년',
      expertise: ['React', 'TypeScript', 'Next.js', 'Performance'],
      rating: 4.9,
      sessions: 127,
      price: '50,000원/시간',
      available: true,
      avatar: 'from-blue-500 to-blue-600',
      nextSlot: '오늘 오후 3시'
    },
    {
      id: 2,
      name: '박풀스택',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      experience: '6년',
      expertise: ['Node.js', 'Python', 'AWS', 'Database'],
      rating: 4.8,
      sessions: 89,
      price: '45,000원/시간',
      available: false,
      avatar: 'from-green-500 to-green-600',
      nextSlot: '내일 오전 10시'
    },
    {
      id: 3,
      name: '이아키텍트',
      title: 'Software Architect',
      company: 'Big Tech',
      experience: '12년',
      expertise: ['System Design', 'Microservices', 'DevOps', 'Leadership'],
      rating: 5.0,
      sessions: 203,
      price: '80,000원/시간',
      available: true,
      avatar: 'from-purple-500 to-purple-600',
      nextSlot: '이번 주 금요일'
    }
  ]

  const myMentoring = [
    {
      id: 1,
      type: '예약 세션',
      mentor: '김시니어',
      topic: 'React 성능 최적화',
      date: '2025-09-10',
      time: '14:00-15:00',
      status: '예정',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      type: '완료 세션',
      mentor: '박풀스택',
      topic: 'API 설계 패턴',
      date: '2025-09-05',
      time: '10:00-11:00',
      status: '완료',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">멘토링</h1>
            <p className="text-gray-600">전문가와 1:1 멘토링을 통해 성장하세요.</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white/20 text-gray-700 rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
              멘토 신청
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
              멘토링 예약
            </button>
          </div>
        </div>

        {/* My Mentoring Status */}
        <GlassCard size="md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">나의 멘토링</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myMentoring.map((session) => (
              <div key={session.id} className={`p-4 rounded-xl border transition-all duration-300 ${
                session.status === '예정' 
                  ? 'bg-blue-50/50 border-blue-200/50' 
                  : 'bg-gray-50/50 border-gray-200/50'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                    session.status === '예정' ? 'bg-blue-500/20 text-blue-700' : 'bg-gray-500/20 text-gray-700'
                  }`}>
                    {session.type}
                  </div>
                  <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                    session.status === '예정' ? 'bg-green-500/20 text-green-700' : 'bg-gray-500/20 text-gray-700'
                  }`}>
                    {session.status}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{session.topic}</h3>
                <p className="text-sm text-gray-600 mb-2">멘토: {session.mentor}</p>
                <p className="text-sm text-gray-600">{session.date} {session.time}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Available Mentors */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">추천 멘토</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <GlassCard key={mentor.id} size="md" className="group cursor-pointer">
                <div className="relative">
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${mentor.avatar}/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Status Indicator */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
                        mentor.available 
                          ? 'bg-green-500/20 text-green-700' 
                          : 'bg-red-500/20 text-red-700'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          mentor.available ? 'bg-green-500' : 'bg-red-500'
                        } animate-pulse`}></div>
                        <span>{mentor.available ? '예약 가능' : '예약 불가'}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span>{mentor.rating}</span>
                      </div>
                    </div>

                    {/* Mentor Info */}
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${mentor.avatar} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <span className="text-white font-bold text-xl">{mentor.name[0]}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{mentor.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{mentor.title}</p>
                      <p className="text-xs text-gray-500">{mentor.company} • {mentor.experience} 경력</p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {mentor.expertise.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/20 text-gray-700 rounded-md text-xs font-medium border border-white/30"
                          >
                            {skill}
                          </span>
                        ))}
                        {mentor.expertise.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100/20 text-gray-600 rounded-md text-xs">
                            +{mentor.expertise.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                      <div className="p-2 bg-white/10 rounded-lg">
                        <p className="text-xs text-gray-600">세션</p>
                        <p className="font-bold text-gray-800">{mentor.sessions}</p>
                      </div>
                      <div className="p-2 bg-white/10 rounded-lg">
                        <p className="text-xs text-gray-600">요금</p>
                        <p className="font-bold text-gray-800 text-xs">{mentor.price}</p>
                      </div>
                    </div>

                    {/* Next Available */}
                    <div className="mb-4 text-center">
                      <p className="text-xs text-gray-600">다음 예약 가능</p>
                      <p className="font-medium text-gray-800 text-sm">{mentor.nextSlot}</p>
                    </div>

                    {/* Action Button */}
                    <button className={`w-full py-3 bg-gradient-to-r ${mentor.avatar} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium text-sm ${
                      !mentor.available ? 'opacity-50 cursor-not-allowed' : ''
                    }`}>
                      {mentor.available ? '예약하기' : '대기 등록'}
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Mentoring Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">완료한 세션</h3>
              <p className="text-2xl font-bold text-blue-600">24</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">평균 평점</h3>
              <p className="text-2xl font-bold text-green-600">4.8</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">멘토 수</h3>
              <p className="text-2xl font-bold text-purple-600">156</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-md"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">다음 세션</h3>
              <p className="text-lg font-bold text-orange-600">내일</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </DashboardLayout>
  )
}
