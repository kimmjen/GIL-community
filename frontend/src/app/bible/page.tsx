'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { todaysVerse, mockReadingPlans, todaysReadings, mockMeditations } from '@/data/mockBibleData'

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

export default function Bible() {
  const [readingPlans, setReadingPlans] = useState(mockReadingPlans)
  const [meditations, setMeditations] = useState(mockMeditations)
  const [completedReadings, setCompletedReadings] = useState<string[]>(['reading-2'])

  // 읽기 완료 토글
  const toggleReadingComplete = (readingId: string) => {
    setCompletedReadings(prev =>
      prev.includes(readingId)
        ? prev.filter(id => id !== readingId)
        : [...prev, readingId]
    )
  }

  // 묵상 좋아요 토글
  const toggleMeditationLike = (meditationId: string) => {
    setMeditations(prev => prev.map(meditation => {
      if (meditation.id === meditationId) {
        const isLiked = meditation.likedBy.includes('current-user')
        return {
          ...meditation,
          likes: isLiked ? meditation.likes - 1 : meditation.likes + 1,
          likedBy: isLiked
            ? meditation.likedBy.filter(id => id !== 'current-user')
            : [...meditation.likedBy, 'current-user']
        }
      }
      return meditation
    }))
  }

  // 시간 포맷팅
  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (days === 0) return '오늘'
    if (days === 1) return '1일 전'
    if (days < 7) return `${days}일 전`
    return `${Math.floor(days / 7)}주 전`
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* 헤더 */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">성경 읽기</h1>
          <p className="text-gray-600">하나님의 말씀과 함께하는 시간을 가져보세요.</p>
        </div>

        {/* 오늘의 말씀 */}
        <GlassCard size="lg">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              오늘의 말씀
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-4 leading-relaxed">
              "{todaysVerse.text}"
            </blockquote>
            <p className="text-gray-600">
              {todaysVerse.book} {todaysVerse.chapter}:{todaysVerse.verse} ({todaysVerse.translation})
            </p>
          </div>
        </GlassCard>

        {/* 통계 카드들 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GlassCard size="sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {readingPlans.filter(p => p.isActive).length}
              </div>
              <div className="text-sm text-gray-600">진행 중인 계획</div>
            </div>
          </GlassCard>
          <GlassCard size="sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {readingPlans.reduce((sum, p) => sum + p.currentDay, 0)}
              </div>
              <div className="text-sm text-gray-600">총 읽은 일수</div>
            </div>
          </GlassCard>
          <GlassCard size="sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {completedReadings.length}
              </div>
              <div className="text-sm text-gray-600">오늘 완료</div>
            </div>
          </GlassCard>
          <GlassCard size="sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {meditations.length}
              </div>
              <div className="text-sm text-gray-600">묵상 나눔</div>
            </div>
          </GlassCard>
        </div>

        {/* 오늘의 읽기 계획 */}
        <GlassCard size="lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">오늘의 읽기 계획</h2>
            <span className="text-sm text-gray-500">
              {new Date().toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          <div className="space-y-4">
            {todaysReadings.map((reading) => (
              <div key={reading.id} className={`p-4 border rounded-lg transition-colors ${
                completedReadings.includes(reading.id)
                  ? 'bg-green-50 border-green-200'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{reading.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {reading.passages.map((passage, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                          {passage.book} {passage.chapter}{passage.verses && `:${passage.verses}`}
                        </span>
                      ))}
                    </div>
                    {reading.reflection && (
                      <p className="text-sm text-gray-700 italic mt-2">
                        "💭 {reading.reflection}"
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => toggleReadingComplete(reading.id)}
                    className={`ml-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      completedReadings.includes(reading.id)
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {completedReadings.includes(reading.id) ? '완료됨 ✓' : '읽기 시작'}
                  </button>
                </div>

                {reading.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {reading.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </GlassCard>

        {/* 읽기 계획 진행 상황 */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">나의 읽기 계획</h2>
          <div className="space-y-4">
            {readingPlans.map((plan) => (
              <div key={plan.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      plan.isActive 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {plan.isActive ? '진행 중' : '완료'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">진행률</span>
                    <span className="text-gray-900 font-medium">
                      {plan.currentDay}/{plan.totalReadings}일 ({Math.round((plan.currentDay / plan.totalReadings) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{width: `${(plan.currentDay / plan.totalReadings) * 100}%`}}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>시작: {plan.startDate.toLocaleDateString('ko-KR')}</span>
                    <span>종료: {plan.endDate.toLocaleDateString('ko-KR')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* 묵상 나눔 */}
        <GlassCard size="lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">묵상 나눔</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              묵상 나누기
            </button>
          </div>

          <div className="space-y-6">
            {meditations.map((meditation) => (
              <div key={meditation.id} className="border border-gray-200 rounded-lg p-6">
                {/* 헤더 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {meditation.author.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{meditation.author.name}</p>
                      <p className="text-sm text-gray-500">{formatTimeAgo(meditation.date)}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    {meditation.passage.book} {meditation.passage.chapter}:{meditation.passage.verses}
                  </span>
                </div>

                {/* 제목과 내용 */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{meditation.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{meditation.content}</p>

                  {/* 핵심 구절 */}
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg mb-4">
                    <p className="text-sm font-medium text-yellow-800 mb-1">📖 핵심 구절</p>
                    <blockquote className="text-gray-800 italic">
                      "{meditation.keyVerse.text}"
                    </blockquote>
                    <p className="text-xs text-gray-600 mt-1">
                      {meditation.keyVerse.book} {meditation.keyVerse.chapter}:{meditation.keyVerse.verse}
                    </p>
                  </div>

                  {/* 묵상 질문 */}
                  {meditation.questions.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-800 mb-2">🤔 묵상 질문</p>
                      <ul className="space-y-1">
                        {meditation.questions.map((question, index) => (
                          <li key={index} className="text-sm text-gray-700">
                            {index + 1}. {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 기도 */}
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 mb-1">🙏 기도</p>
                    <p className="text-blue-700 text-sm italic">{meditation.prayer}</p>
                  </div>
                </div>

                {/* 태그 */}
                {meditation.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {meditation.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* 액션 버튼들 */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleMeditationLike(meditation.id)}
                      className={`flex items-center space-x-1 text-sm transition-colors ${
                        meditation.likedBy.includes('current-user')
                          ? 'text-red-600 hover:text-red-700'
                          : 'text-gray-600 hover:text-red-600'
                      }`}
                    >
                      <span>{meditation.likedBy.includes('current-user') ? '❤️' : '🤍'}</span>
                      <span>은혜 ({meditation.likes})</span>
                    </button>
                    <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <span>💬</span>
                      <span>나눔 ({meditation.comments.length})</span>
                    </button>
                  </div>
                  <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    공유하기
                  </button>
                </div>

                {/* 댓글 */}
                {meditation.comments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {meditation.comments.map((comment) => (
                      <div key={comment.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                            <span className="text-white text-xs">
                              {comment.author.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{comment.author.name}</p>
                            <p className="text-sm text-gray-700">{comment.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
