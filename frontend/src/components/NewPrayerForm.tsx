'use client'

import { useState } from 'react'
import { mockPrayerCategories } from '@/data/mockPrayerData'

interface NewPrayerFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (prayerData: any) => void
}

export default function NewPrayerForm({ isOpen, onClose, onSubmit }: NewPrayerFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'personal',
    tags: '',
    isPrivate: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 태그 처리
    const tagsArray = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)

    const newPrayer = {
      id: Date.now().toString(),
      title: formData.title,
      content: formData.content,
      category: formData.category,
      author: {
        name: '김민준', // 현재 사용자
        id: 'current-user'
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      isAnswered: false,
      likes: 0,
      likedBy: [],
      comments: [],
      isPrivate: formData.isPrivate,
      tags: tagsArray
    }

    // 폼 제출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000))

    onSubmit(newPrayer)
    setIsSubmitting(false)

    // 폼 초기화
    setFormData({
      title: '',
      content: '',
      category: 'personal',
      tags: '',
      isPrivate: false
    })

    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">새 기도 제목</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* 제목 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              기도 제목 *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="예: 취업을 위한 기도 부탁드립니다"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* 카테고리 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              카테고리 *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {mockPrayerCategories.map((category) => (
                <label
                  key={category.id}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.category === category.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={formData.category === category.id}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="sr-only"
                  />
                  <span className="text-lg mr-2">{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 내용 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              기도 내용 *
            </label>
            <textarea
              required
              rows={5}
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              placeholder="구체적인 기도 제목을 나누어주세요. 개인적인 내용이라면 비공개로 설정할 수 있습니다."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.content.length}/500자
            </p>
          </div>

          {/* 태그 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              태그 (선택사항)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              placeholder="취업, 건강, 가족 (쉼표로 구분)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              기도 제목을 찾기 쉽도록 관련 키워드를 입력해주세요
            </p>
          </div>

          {/* 공개 설정 */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="isPrivate"
              checked={formData.isPrivate}
              onChange={(e) => setFormData(prev => ({ ...prev, isPrivate: e.target.checked }))}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="isPrivate" className="text-sm text-gray-700">
              비공개로 설정 (목회자만 볼 수 있습니다)
            </label>
          </div>

          {/* 안내 메시지 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-xl">💙</span>
              <div>
                <h4 className="text-sm font-medium text-blue-900 mb-1">함께 기도해요</h4>
                <p className="text-sm text-blue-700">
                  길 공동체 가족들이 함께 기도하며 응원할게요.
                  하나님께서 좋은 응답을 주시길 기대합니다!
                </p>
              </div>
            </div>
          </div>

          {/* 버튼들 */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.title || !formData.content}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  기도 제목 올리는 중...
                </>
              ) : (
                '기도 제목 올리기'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
