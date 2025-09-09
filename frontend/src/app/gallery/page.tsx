'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

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

interface Photo {
  id: string
  title: string
  category: 'worship' | 'retreat' | 'event' | 'volunteer' | 'small-group' | 'conference'
  date: Date
  photographer: string
  description: string
  tags: string[]
  likes: number
  likedBy: string[]
  comments: number
  thumbnail: string // 실제로는 이미지 URL이 들어갈 자리
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  // 임시 사진 데이터 (실제로는 서버에서 가져올 데이터)
  const mockPhotos: Photo[] = [
    {
      id: 'photo-1',
      title: '9월 첫째 주 주일예배',
      category: 'worship',
      date: new Date('2024-09-01'),
      photographer: '미디어팀',
      description: '은혜로운 주일예배 현장입니다. 청년들이 하나님께 예배드리는 모습이 아름다웠습니다.',
      tags: ['주일예배', '찬양', '청년부'],
      likes: 24,
      likedBy: ['user1', 'user2', 'current-user'],
      comments: 8,
      thumbnail: '🛐' // 실제로는 이미지 URL
    },
    {
      id: 'photo-2',
      title: '여름 수련회 단체사진',
      category: 'retreat',
      date: new Date('2024-08-15'),
      photographer: '박서준',
      description: '2박3일 여름 수련회에서 찍은 단체사진입니다. 모든 분들의 밝은 웃음이 인상적이네요!',
      tags: ['수련회', '단체사진', '여름'],
      likes: 45,
      likedBy: ['user1', 'user2', 'user3', 'user4', 'current-user'],
      comments: 15,
      thumbnail: '🏕️'
    },
    {
      id: 'photo-3',
      title: '독거노인분들과 함께한 봉사',
      category: 'volunteer',
      date: new Date('2024-08-20'),
      photographer: '이영희',
      description: '지역 독거노인분들을 위한 봉사활동 현장입니다. 함께 나누는 기쁨이 가득했습니다.',
      tags: ['봉사', '독거노인', '섬김'],
      likes: 38,
      likedBy: ['user1', 'user3', 'user4', 'current-user'],
      comments: 12,
      thumbnail: '🤝'
    },
    {
      id: 'photo-4',
      title: '소그룹 성경공부 모습',
      category: 'small-group',
      date: new Date('2024-09-05'),
      photographer: '최다윗',
      description: '매주 수요일 소그룹 성경공부 시간입니다. 말씀을 나누며 은혜받는 시간이었어요.',
      tags: ['소그룹', '성경공부', '수요일'],
      likes: 18,
      likedBy: ['user2', 'user3', 'current-user'],
      comments: 6,
      thumbnail: '📖'
    },
    {
      id: 'photo-5',
      title: '청년 부모님 초청 행사',
      category: 'event',
      date: new Date('2024-09-08'),
      photographer: '정한나',
      description: '청년들의 부모님을 초청한 특별한 시간이었습니다. 가족의 소중함을 느낄 수 있었어요.',
      tags: ['가족', '부모님', '초청행사'],
      likes: 32,
      likedBy: ['user1', 'user2', 'user4', 'current-user'],
      comments: 10,
      thumbnail: '👨‍👩‍👧‍👦'
    },
    {
      id: 'photo-6',
      title: '선교 컨퍼런스 현장',
      category: 'conference',
      date: new Date('2024-08-30'),
      photographer: '미디어팀',
      description: '세계 선교에 대한 마음을 품을 수 있었던 귀한 시간이었습니다.',
      tags: ['선교', '컨퍼런스', '비전'],
      likes: 28,
      likedBy: ['user1', 'user3', 'user5', 'current-user'],
      comments: 9,
      thumbnail: '🌍'
    }
  ]

  const [photos, setPhotos] = useState<Photo[]>(mockPhotos)

  const categories = [
    { id: 'all', name: '전체', icon: '📁', count: photos.length },
    { id: 'worship', name: '예배', icon: '🛐', count: photos.filter(p => p.category === 'worship').length },
    { id: 'retreat', name: '수련회', icon: '🏕️', count: photos.filter(p => p.category === 'retreat').length },
    { id: 'event', name: '행사', icon: '🎉', count: photos.filter(p => p.category === 'event').length },
    { id: 'volunteer', name: '봉사', icon: '🤝', count: photos.filter(p => p.category === 'volunteer').length },
    { id: 'small-group', name: '소그룹', icon: '👥', count: photos.filter(p => p.category === 'small-group').length },
    { id: 'conference', name: '컨퍼런스', icon: '🌍', count: photos.filter(p => p.category === 'conference').length }
  ]

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory)

  // 좋아요 토글
  const toggleLike = (photoId: string) => {
    setPhotos(prev => prev.map(photo => {
      if (photo.id === photoId) {
        const isLiked = photo.likedBy.includes('current-user')
        return {
          ...photo,
          likes: isLiked ? photo.likes - 1 : photo.likes + 1,
          likedBy: isLiked
            ? photo.likedBy.filter(id => id !== 'current-user')
            : [...photo.likedBy, 'current-user']
        }
      }
      return photo
    }))
  }

  // 시간 포맷팅
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">활동 사진</h1>
            <p className="text-gray-600">길 공동체의 소중한 순간들을 함께 나누어요.</p>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            사진 업로드
          </button>
        </div>

        {/* 통계 카드들 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GlassCard size="sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {photos.length}
              </div>
              <div className="text-sm text-gray-600">전체 사진</div>
            </div>
          </GlassCard>
          <GlassCard size="sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {categories.length - 1}
              </div>
              <div className="text-sm text-gray-600">앨범 카테고리</div>
            </div>
          </GlassCard>
          <GlassCard size="sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {photos.reduce((sum, p) => sum + p.likes, 0)}
              </div>
              <div className="text-sm text-gray-600">총 좋아요</div>
            </div>
          </GlassCard>
          <GlassCard size="sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {photos.filter(p => {
                  const weekAgo = new Date()
                  weekAgo.setDate(weekAgo.getDate() - 7)
                  return p.date >= weekAgo
                }).length}
              </div>
              <div className="text-sm text-gray-600">이번 주 업로드</div>
            </div>
          </GlassCard>
        </div>

        {/* 카테고리 필터 */}
        <GlassCard size="md">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">앨범 카테고리</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span>({category.count})</span>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* 사진 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <GlassCard
              key={photo.id}
              size="md"
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="space-y-4">
                {/* 사진 썸네일 (실제로는 이미지가 들어갈 자리) */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">{photo.thumbnail}</span>
                </div>

                {/* 사진 정보 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 line-clamp-1">{photo.title}</h3>
                    <span className="text-xs text-gray-500">{formatDate(photo.date)}</span>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{photo.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">📷 {photo.photographer}</span>
                    <div className="flex items-center space-x-3 text-sm">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(photo.id)
                        }}
                        className={`flex items-center space-x-1 transition-colors ${
                          photo.likedBy.includes('current-user')
                            ? 'text-red-600 hover:text-red-700'
                            : 'text-gray-600 hover:text-red-600'
                        }`}
                      >
                        <span>{photo.likedBy.includes('current-user') ? '❤️' : '🤍'}</span>
                        <span>{photo.likes}</span>
                      </button>
                      <span className="flex items-center space-x-1 text-gray-600">
                        <span>💬</span>
                        <span>{photo.comments}</span>
                      </span>
                    </div>
                  </div>

                  {/* 태그 */}
                  {photo.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-2">
                      {photo.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                      {photo.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{photo.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* 빈 상태 */}
        {filteredPhotos.length === 0 && (
          <GlassCard size="lg">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {selectedCategory === 'all' ? '아직 업로드된 사진이 없습니다' : '이 카테고리에 사진이 없습니다'}
              </h3>
              <p className="text-gray-600 mb-6">
                길 공동체의 소중한 순간들을 사진으로 남겨보세요!
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                첫 번째 사진 업로드하기
              </button>
            </div>
          </GlassCard>
        )}

        {/* 사진 상세보기 모달 */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedPhoto.title}</h2>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* 큰 사진 */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-8xl">{selectedPhoto.thumbnail}</span>
                </div>

                {/* 상세 정보 */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">📷 {selectedPhoto.photographer}</span>
                    <span className="text-sm text-gray-600">{formatDate(selectedPhoto.date)}</span>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{selectedPhoto.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {selectedPhoto.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => toggleLike(selectedPhoto.id)}
                        className={`flex items-center space-x-2 transition-colors ${
                          selectedPhoto.likedBy.includes('current-user')
                            ? 'text-red-600 hover:text-red-700'
                            : 'text-gray-600 hover:text-red-600'
                        }`}
                      >
                        <span>{selectedPhoto.likedBy.includes('current-user') ? '❤️' : '🤍'}</span>
                        <span>좋아요 {selectedPhoto.likes}개</span>
                      </button>
                      <span className="flex items-center space-x-2 text-gray-600">
                        <span>💬</span>
                        <span>댓글 {selectedPhoto.comments}개</span>
                      </span>
                    </div>
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      공유하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
