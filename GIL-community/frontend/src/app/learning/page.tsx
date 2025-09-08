'use client'

import dynamic from 'next/dynamic'

const DashboardLayout = dynamic(() => import('@/layout/DashboardLayout'), { ssr: false })
const GlassCard = dynamic(() => import('@/components/ui/GlassCard'))

export default function Learning() {
  const courses = [
    {
      id: 1,
      title: 'React 마스터하기',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      instructor: '김개발',
      color: 'from-blue-500 to-blue-600',
      difficulty: '중급'
    },
    {
      id: 2,
      title: 'TypeScript 완전정복',
      progress: 60,
      totalLessons: 20,
      completedLessons: 12,
      instructor: '박타입',
      color: 'from-indigo-500 to-indigo-600',
      difficulty: '고급'
    },
    {
      id: 3,
      title: 'Next.js 실전 프로젝트',
      progress: 30,
      totalLessons: 16,
      completedLessons: 5,
      instructor: '이넥스트',
      color: 'from-purple-500 to-purple-600',
      difficulty: '중급'
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">학습</h1>
          <p className="text-gray-600">새로운 기술을 배우고 성장하세요.</p>
        </div>

        {/* Current Courses */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">진행 중인 강의</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <GlassCard key={course.id} size="md" className="group cursor-pointer">
                <div className="relative">
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${course.color}/20 rounded-full blur-xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                        course.difficulty === '초급' ? 'bg-green-500/20 text-green-700' :
                        course.difficulty === '중급' ? 'bg-yellow-500/20 text-yellow-700' :
                        'bg-red-500/20 text-red-700'
                      }`}>
                        {course.difficulty}
                      </div>
                      <div className={`w-10 h-10 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center`}>
                        <div className="w-5 h-5 bg-white/30 rounded"></div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">강사: {course.instructor}</p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">진행률</span>
                        <span className="font-medium">{course.completedLessons}/{course.totalLessons} 강의</span>
                      </div>
                      <div className="w-full bg-gray-200/50 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-500`}
                          style={{width: `${course.progress}%`}}
                        ></div>
                      </div>
                    </div>

                    <button className={`w-full py-2 bg-gradient-to-r ${course.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium`}>
                      계속 학습하기
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">완료한 강의</h3>
              <p className="text-2xl font-bold text-green-600">24</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">학습 시간</h3>
              <p className="text-2xl font-bold text-blue-600">148h</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">획득 인증서</h3>
              <p className="text-2xl font-bold text-purple-600">8</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-md"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">학습 스트릭</h3>
              <p className="text-2xl font-bold text-orange-600">15일</p>
            </div>
          </GlassCard>
        </div>

        {/* Recommended Courses */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">추천 강의</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard size="md" className="group cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/30 rounded"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Docker & Kubernetes</h3>
                  <p className="text-sm text-gray-600 mb-2">컨테이너 기술 마스터하기</p>
                  <div className="text-xs text-emerald-600 font-medium">고급 • 20강의</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard size="md" className="group cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">GraphQL & Apollo</h3>
                  <p className="text-sm text-gray-600 mb-2">현대적인 API 개발</p>
                  <div className="text-xs text-rose-600 font-medium">중급 • 16강의</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
