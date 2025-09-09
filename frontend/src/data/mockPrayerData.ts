import { PrayerRequest, PrayerCategory } from '@/types/prayer'

// 임시 데이터 - 나중에 실제 API로 대체
export const mockPrayerCategories: PrayerCategory[] = [
  {
    id: 'personal',
    name: '개인 기도',
    description: '개인적인 기도 제목을 나누어주세요',
    color: 'bg-blue-500',
    icon: '🙏'
  },
  {
    id: 'family',
    name: '가족 기도',
    description: '가족과 사랑하는 사람들을 위한 기도',
    color: 'bg-green-500',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 'mission',
    name: '선교 기도',
    description: '선교사님들과 복음 전파를 위한 기도',
    color: 'bg-purple-500',
    icon: '🌍'
  },
  {
    id: 'church',
    name: '교회 기도',
    description: '교회와 목회자를 위한 기도 제목',
    color: 'bg-red-500',
    icon: '⛪'
  },
  {
    id: 'work',
    name: '직장 기도',
    description: '직장과 학업에 관한 기도 제목',
    color: 'bg-teal-500',
    icon: '💼'
  },
  {
    id: 'thanksgiving',
    name: '감사 기도',
    description: '하나님께 감사드리는 기도',
    color: 'bg-orange-500',
    icon: '🎯'
  }
]

export const mockPrayerRequests: PrayerRequest[] = [
  {
    id: '1',
    title: '취업을 위한 기도 부탁드립니다',
    content: '졸업을 앞두고 있는데 아직 취업이 되지 않아서 마음이 무겁습니다. 하나님께서 저에게 맞는 직장을 예비해주시고, 면접에서도 좋은 결과가 있기를 기도해주세요.',
    category: 'work',
    author: {
      name: '김민준',
      id: 'user1'
    },
    createdAt: new Date('2024-09-05'),
    updatedAt: new Date('2024-09-05'),
    isAnswered: false,
    likes: 12,
    likedBy: ['user2', 'user3', 'user4'],
    comments: [
      {
        id: 'c1',
        content: '하나님께서 좋은 길로 인도해주실 거예요! 함께 기도하겠습니다 🙏',
        author: { name: '이영희', id: 'user2' },
        createdAt: new Date('2024-09-05'),
        isEncouragement: true
      }
    ],
    isPrivate: false,
    tags: ['취업', '진로', '졸업']
  },
  {
    id: '2',
    title: '아버지의 건강 회복을 위해 기도해주세요',
    content: '아버지께서 최근 건강이 좋지 않으셔서 입원 중이십니다. 빠른 회복과 치료 과정이 순조롭게 진행되기를 간절히 기도합니다.',
    category: 'family',
    author: {
      name: '박서준',
      id: 'user3'
    },
    createdAt: new Date('2024-09-03'),
    updatedAt: new Date('2024-09-03'),
    isAnswered: false,
    likes: 18,
    likedBy: ['user1', 'user2', 'user4', 'user5'],
    comments: [
      {
        id: 'c2',
        content: '아버님의 건강 회복을 위해 기도하겠습니다. 하나님께서 치료해주시길!',
        author: { name: '최다윗', id: 'user4' },
        createdAt: new Date('2024-09-03'),
        isEncouragement: true
      }
    ],
    isPrivate: false,
    tags: ['건강', '가족', '아버지']
  },
  {
    id: '3',
    title: '감사합니다! 장학금을 받게 되었어요',
    content: '지난번에 장학금 신청을 위해 기도 부탁드렸는데, 하나님의 은혜로 장학금을 받게 되었습니다! 기도해주신 모든 분들께 감사드립니다.',
    category: 'thanksgiving',
    author: {
      name: '정한나',
      id: 'user5'
    },
    createdAt: new Date('2024-09-01'),
    updatedAt: new Date('2024-09-07'),
    isAnswered: true,
    answeredAt: new Date('2024-09-07'),
    answeredContent: '하나님께서 응답해주셨습니다! 장학금으로 학업에 더욱 열심히 임하겠습니다.',
    likes: 25,
    likedBy: ['user1', 'user2', 'user3', 'user4'],
    comments: [
      {
        id: 'c3',
        content: '정말 축하드려요! 하나님께 영광 돌립니다 🎉',
        author: { name: '김민준', id: 'user1' },
        createdAt: new Date('2024-09-07'),
        isEncouragement: true
      }
    ],
    isPrivate: false,
    tags: ['감사', '장학금', '응답']
  }
]
