'use client'

import dynamic from 'next/dynamic'

const DashboardLayout = dynamic(() => import('@/layout/DashboardLayout'), { ssr: false })
const GlassCard = dynamic(() => import('@/components/ui/GlassCard'))

export default function Resources() {
  const resourceCategories = [
    {
      id: 1,
      title: '개발 도구',
      description: '개발에 필요한 필수 도구들',
      icon: 'from-blue-500 to-blue-600',
      count: 24,
      resources: [
        { name: 'VS Code', description: '무료 코드 에디터', url: 'https://code.visualstudio.com/', type: '도구' },
        { name: 'GitHub', description: '코드 버전 관리', url: 'https://github.com/', type: '플랫폼' },
        { name: 'Postman', description: 'API 테스팅 도구', url: 'https://postman.com/', type: '도구' },
        { name: 'Figma', description: 'UI/UX 디자인 도구', url: 'https://figma.com/', type: '디자인' }
      ]
    },
    {
      id: 2,
      title: '학습 자료',
      description: '프로그래밍 학습 리소스',
      icon: 'from-green-500 to-green-600',
      count: 18,
      resources: [
        { name: 'MDN Web Docs', description: '웹 기술 문서', url: 'https://developer.mozilla.org/', type: '문서' },
        { name: 'freeCodeCamp', description: '무료 프로그래밍 강의', url: 'https://freecodecamp.org/', type: '강의' },
        { name: 'Codecademy', description: '인터랙티브 코딩 학습', url: 'https://codecademy.com/', type: '강의' },
        { name: 'Stack Overflow', description: '개발자 Q&A 커뮤니티', url: 'https://stackoverflow.com/', type: '커뮤니티' }
      ]
    },
    {
      id: 3,
      title: '프레임워크',
      description: '인기있는 개발 프레임워크',
      icon: 'from-purple-500 to-purple-600',
      count: 15,
      resources: [
        { name: 'React', description: '사용자 인터페이스 라이브러리', url: 'https://reactjs.org/', type: '라이브러리' },
        { name: 'Next.js', description: 'React 풀스택 프레임워크', url: 'https://nextjs.org/', type: '프레임워크' },
        { name: 'Vue.js', description: '프로그레시브 프레임워크', url: 'https://vuejs.org/', type: '프레임워크' },
        { name: 'Express', description: 'Node.js 웹 프레임워크', url: 'https://expressjs.com/', type: '프레임워크' }
      ]
    },
    {
      id: 4,
      title: '유틸리티',
      description: '개발 효율성을 높이는 도구들',
      icon: 'from-orange-500 to-orange-600',
      count: 12,
      resources: [
        { name: 'npm', description: 'Node.js 패키지 매니저', url: 'https://npmjs.com/', type: '도구' },
        { name: 'Yarn', description: '빠른 패키지 매니저', url: 'https://yarnpkg.com/', type: '도구' },
        { name: 'Prettier', description: '코드 포매터', url: 'https://prettier.io/', type: '도구' },
        { name: 'ESLint', description: 'JavaScript 린터', url: 'https://eslint.org/', type: '도구' }
      ]
    }
  ]

  const popularResources = [
    {
      id: 1,
      title: 'React 공식 문서',
      description: 'React의 모든 것을 배울 수 있는 공식 문서',
      url: 'https://reactjs.org/',
      category: '문서',
      rating: 4.9,
      views: '1.2M',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'JavaScript.info',
      description: '모던 JavaScript 튜토리얼',
      url: 'https://javascript.info/',
      category: '튜토리얼',
      rating: 4.8,
      views: '890K',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 3,
      title: 'CSS-Tricks',
      description: 'CSS 팁과 트릭 모음',
      url: 'https://css-tricks.com/',
      category: '가이드',
      rating: 4.7,
      views: '650K',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'GitHub Awesome Lists',
      description: '카테고리별 최고의 라이브러리 모음',
      url: 'https://github.com/sindresorhus/awesome',
      category: '모음집',
      rating: 4.9,
      views: '2.1M',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const bookmarks = [
    { id: 1, name: 'React 공식 문서', type: '문서', added: '2일 전' },
    { id: 2, name: 'TypeScript 핸드북', type: '가이드', added: '1주 전' },
    { id: 3, name: 'Tailwind CSS', type: '프레임워크', added: '3일 전' },
    { id: 4, name: 'Next.js 튜토리얼', type: '튜토리얼', added: '5일 전' }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">리소스</h1>
            <p className="text-gray-600">개발에 필요한 모든 자료를 한곳에서 찾아보세요.</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white/20 text-gray-700 rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
              북마크
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
              리소스 추가
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <GlassCard size="md">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="리소스를 검색해보세요..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder-gray-500"
              />
            </div>
            <div className="flex space-x-2">
              <select className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-700">
                <option>모든 카테고리</option>
                <option>개발 도구</option>
                <option>학습 자료</option>
                <option>프레임워크</option>
                <option>유틸리티</option>
              </select>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
                검색
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Popular Resources */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">인기 리소스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularResources.map((resource) => (
              <GlassCard key={resource.id} size="md" className="group cursor-pointer">
                <div className="relative">
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${resource.color}/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="w-6 h-6 bg-white/30 rounded"></div>
                    </div>
                    
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {resource.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-2 py-1 bg-white/20 text-gray-700 rounded-md text-xs font-medium border border-white/30">
                        {resource.category}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-3">조회수: {resource.views}</p>
                    
                    <button className="w-full py-2 text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-300 font-medium text-sm">
                      바로가기
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">카테고리별 리소스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceCategories.map((category) => (
              <GlassCard key={category.id} size="lg" className="group cursor-pointer">
                <div className="relative">
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.icon}/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${category.icon} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <div className="w-7 h-7 bg-white/30 rounded-lg"></div>
                      </div>
                      <div className="px-3 py-1 bg-white/20 text-gray-700 rounded-full text-sm font-medium border border-white/30">
                        {category.count}개
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {category.resources.map((resource, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800 text-sm">{resource.name}</h4>
                            <p className="text-xs text-gray-600">{resource.description}</p>
                          </div>
                          <span className="px-2 py-1 bg-white/20 text-gray-600 rounded text-xs">
                            {resource.type}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full py-3 text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-300 font-medium">
                      전체 보기
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* My Bookmarks */}
        <GlassCard size="md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">내 북마크</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              전체 보기
            </button>
          </div>
          
          <div className="space-y-3">
            {bookmarks.map((bookmark) => (
              <div key={bookmark.id} className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/30 rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {bookmark.name}
                    </h4>
                    <p className="text-xs text-gray-600">{bookmark.type} • {bookmark.added}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <div className="w-4 h-4 bg-current rounded"></div>
                </button>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">전체 리소스</h3>
              <p className="text-2xl font-bold text-blue-600">1,247</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">카테고리</h3>
              <p className="text-2xl font-bold text-green-600">12</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">북마크</h3>
              <p className="text-2xl font-bold text-purple-600">28</p>
            </div>
          </GlassCard>

          <GlassCard size="md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-md"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">새로운 리소스</h3>
              <p className="text-2xl font-bold text-orange-600">15</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </DashboardLayout>
  )
}
