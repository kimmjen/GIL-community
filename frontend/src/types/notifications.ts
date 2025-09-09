// 알림 시스템 타입 정의
export interface Notification {
  id: string
  type: 'prayer-request' | 'prayer-answered' | 'new-sermon' | 'event-reminder' | 'bible-reading' | 'community-post' | 'mention'
  title: string
  message: string
  createdAt: Date
  isRead: boolean
  actionUrl?: string
  data?: {
    userId?: string
    postId?: string
    eventId?: string
    prayerId?: string
  }
  icon: string
  color: string
}

export interface NotificationPreferences {
  userId: string
  emailNotifications: boolean
  pushNotifications: boolean
  categories: {
    prayerRequests: boolean
    sermons: boolean
    events: boolean
    bibleReading: boolean
    communityPosts: boolean
    mentions: boolean
  }
}

// 활동 피드 타입
export interface Activity {
  id: string
  type: 'prayer-posted' | 'prayer-answered' | 'bible-completed' | 'meditation-shared' | 'event-joined' | 'project-created'
  user: {
    id: string
    name: string
    avatar?: string
  }
  content: string
  relatedItem?: {
    id: string
    title: string
    type: string
  }
  createdAt: Date
  likes: number
  likedBy: string[]
}
