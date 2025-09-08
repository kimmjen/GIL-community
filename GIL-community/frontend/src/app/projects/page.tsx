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
      name: 'React Dashboard',
      description: '모던한 대시보드 UI/UX 프로젝트',
      status: '진행중',
      progress: 75,
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'E-commerce API',
      description: 'RESTful API 서버 개발',
      status: '완료',
      progress: 100,
      tech: ['Node.js', 'Express', 'MongoDB'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      name: 'Mobile App',
      description: 'React Native 모바일 앱',
      status: '계획',
      progress: 10,
      tech: ['React Native', 'Expo', 'Redux'],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">프로젝트</h1>
            <p className="text-gray-600">진행 중인 프로젝트들을 관리하세요.</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
            새 프로젝트 추가
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard key={project.id} size="md" className="group cursor-pointer">
              <div className="relative">
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${project.color}/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    project.status === '완료' ? 'bg-green-500/20 text-green-700' :
                    project.status === '진행중' ? 'bg-blue-500/20 text-blue-700' :
                    'bg-gray-500/20 text-gray-700'
                  }`}>
                    {project.status}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">진행률</span>
                      <span className="font-medium text-gray-800">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200/50 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${project.color} h-2 rounded-full transition-all duration-500 group-hover:shadow-lg`}
                        style={{width: `${project.progress}%`}}
                      ></div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/20 text-gray-700 rounded-md text-xs font-medium backdrop-blur-sm border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">총 프로젝트</h3>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">완료된 프로젝트</h3>
              <p className="text-2xl font-bold text-green-600">8</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">진행 중</h3>
              <p className="text-2xl font-bold text-purple-600">4</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </DashboardLayout>
  )
}
