// 기도 제목 데이터 타입 정의
export interface PrayerRequest {
  id: string
  title: string
  content: string
  category: 'personal' | 'family' | 'mission' | 'church' | 'work' | 'thanksgiving'
  author: {
    name: string
    id: string
  }
  createdAt: Date
  updatedAt: Date
  isAnswered: boolean
  answeredAt?: Date
  answeredContent?: string
  likes: number
  likedBy: string[]
  comments: PrayerComment[]
  isPrivate: boolean
  tags: string[]
}

export interface PrayerComment {
  id: string
  content: string
  author: {
    name: string
    id: string
  }
  createdAt: Date
  isEncouragement: boolean // 격려/응원 댓글인지
}

export interface PrayerCategory {
  id: string
  name: string
  description: string
  color: string
  icon: string
}

// 기도 제목 상태 관리
export type PrayerRequestStatus = 'active' | 'answered' | 'archived'

// 기도 통계
export interface PrayerStats {
  totalRequests: number
  answeredRequests: number
  thisWeekRequests: number
  myRequests: number
  myAnsweredRequests: number
}
