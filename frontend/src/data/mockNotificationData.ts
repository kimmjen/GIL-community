import { Notification, Activity } from '@/types/notifications'

// 실시간 알림 데이터
export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    type: 'prayer-request',
    title: '새로운 기도 요청',
    message: '이영희 자매님이 새로운 기도 제목을 올렸습니다',
    createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30분 전
    isRead: false,
    actionUrl: '/prayer',
    data: { userId: 'user2', prayerId: 'prayer-new' },
    icon: '🙏',
    color: 'text-blue-600'
  },
  {
    id: 'notif-2',
    type: 'prayer-answered',
    title: '기도 응답 간증',
    message: '김민준 형제님의 취업 기도가 응답되었습니다!',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2시간 전
    isRead: false,
    actionUrl: '/prayer',
    data: { userId: 'user1', prayerId: 'prayer-1' },
    icon: '🎉',
    color: 'text-green-600'
  },
  {
    id: 'notif-3',
    type: 'new-sermon',
    title: '새로운 설교',
    message: '"믿음으로 살아가는 청년" 설교가 업로드되었습니다',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5시간 전
    isRead: true,
    actionUrl: '/sermons',
    icon: '🎤',
    color: 'text-purple-600'
  },
  {
    id: 'notif-4',
    type: 'event-reminder',
    title: '모임 알림',
    message: '내일 수요일 저녁 7시 성경 공부 모임이 있습니다',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8시간 전
    isRead: true,
    actionUrl: '/events',
    icon: '📅',
    color: 'text-orange-600'
  },
  {
    id: 'notif-5',
    type: 'bible-reading',
    title: '성경 읽기 격려',
    message: '오늘의 성경 읽기를 완료하셨군요! 축하합니다 🎊',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12시간 전
    isRead: true,
    actionUrl: '/bible',
    icon: '📖',
    color: 'text-green-600'
  }
]

// 활동 피드 데이터
export const mockActivities: Activity[] = [
  {
    id: 'activity-1',
    type: 'prayer-posted',
    user: { id: 'user2', name: '이영희' },
    content: '아버지의 건강 회복을 위한 기도 제목을 올렸습니다',
    relatedItem: { id: 'prayer-2', title: '아버지의 건강 회복을 위해', type: 'prayer' },
    createdAt: new Date(Date.now() - 1000 * 60 * 45), // 45분 전
    likes: 8,
    likedBy: ['user1', 'user3', 'current-user']
  },
  {
    id: 'activity-2',
    type: 'bible-completed',
    user: { id: 'user3', name: '박서준' },
    content: '365일 성경통독 250일차를 완료했습니다',
    relatedItem: { id: 'reading-250', title: '이사야 53장', type: 'bible-reading' },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3시간 전
    likes: 12,
    likedBy: ['user1', 'user2', 'user4', 'current-user']
  },
  {
    id: 'activity-3',
    type: 'meditation-shared',
    user: { id: 'user4', name: '최다윗' },
    content: '로마서 8장에 대한 묵상을 나누었습니다',
    relatedItem: { id: 'meditation-1', title: '하나님의 사랑은 변하지 않습니다', type: 'meditation' },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6시간 전
    likes: 15,
    likedBy: ['user1', 'user2', 'user3', 'current-user']
  },
  {
    id: 'activity-4',
    type: 'prayer-answered',
    user: { id: 'user1', name: '김민준' },
    content: '취업 기도가 응답되었다는 간증을 나누었습니다',
    relatedItem: { id: 'prayer-1', title: '취업을 위한 기도', type: 'prayer' },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1일 전
    likes: 25,
    likedBy: ['user2', 'user3', 'user4', 'user5', 'current-user']
  }
]
