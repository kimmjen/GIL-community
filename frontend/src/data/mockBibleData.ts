import { BibleReading, ReadingPlan, Meditation } from '@/types/bible'

// 오늘의 말씀 데이터
export const todaysVerse = {
  id: 'today-1',
  book: '시편',
  chapter: 23,
  verse: 1,
  text: '여호와는 나의 목자시니 내게 부족함이 없으리로다',
  translation: '개역개정' as const
}

// 읽기 계획 데이터
export const mockReadingPlans: ReadingPlan[] = [
  {
    id: 'plan-1',
    name: '365일 성경 통독',
    description: '1년 동안 성경 전체를 읽는 계획입니다',
    duration: 365,
    totalReadings: 365,
    currentDay: 252,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    isActive: true,
    category: 'whole-bible',
    readings: []
  },
  {
    id: 'plan-2',
    name: '시편 30일 묵상',
    description: '시편의 은혜로운 말씀들을 30일 동안 묵상합니다',
    duration: 30,
    totalReadings: 30,
    currentDay: 15,
    startDate: new Date('2024-08-15'),
    endDate: new Date('2024-09-13'),
    isActive: true,
    category: 'psalms',
    readings: []
  },
  {
    id: 'plan-3',
    name: '신약 90일 완주',
    description: '신약성경을 90일 동안 읽어보세요',
    duration: 90,
    totalReadings: 90,
    currentDay: 45,
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-09-28'),
    isActive: false,
    category: 'new-testament',
    readings: []
  }
]

// 오늘의 읽기 계획
export const todaysReadings: BibleReading[] = [
  {
    id: 'reading-1',
    title: '365일 성경통독 252일차',
    date: new Date('2024-09-09'),
    passages: [
      { book: '이사야', chapter: 55 },
      { book: '고린도후서', chapter: 4 },
      { book: '시편', chapter: 119, verses: '113-128' }
    ],
    isCompleted: false,
    user: { id: 'current-user', name: '김민준' },
    tags: ['매일읽기', '통독', '이사야', '고린도후서', '시편']
  },
  {
    id: 'reading-2',
    title: '시편 묵상 15일차',
    date: new Date('2024-09-09'),
    passages: [
      { book: '시편', chapter: 23 }
    ],
    reflection: '주님이 나의 목자가 되어주신다는 확신이 마음에 큰 평안을 줍니다.',
    isCompleted: true,
    completedAt: new Date('2024-09-09T07:30:00'),
    user: { id: 'current-user', name: '김민준' },
    tags: ['묵상', '시편', '목자']
  }
]

// 묵상 나눔 데이터
export const mockMeditations: Meditation[] = [
  {
    id: 'meditation-1',
    title: '하나님의 사랑은 변하지 않습니다',
    passage: {
      book: '로마서',
      chapter: 8,
      verses: '38-39'
    },
    content: '오늘 말씀을 묵상하면서 하나님의 사랑이 얼마나 크고 변하지 않는지 깨달았습니다. 어떤 상황에서도 우리를 사랑하시는 하나님께 감사드립니다.',
    keyVerse: {
      id: 'verse-1',
      book: '로마서',
      chapter: 8,
      verse: 39,
      text: '높음이나 깊음이나 다른 어떤 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라',
      translation: '개역개정'
    },
    questions: [
      '하나님의 사랑을 실제로 경험한 순간이 언제였나요?',
      '이 사랑이 일상에서 어떻게 나타나야 할까요?'
    ],
    prayer: '하나님 아버지, 변하지 않는 사랑을 보여주셔서 감사합니다. 이 사랑을 다른 사람들에게도 나누어줄 수 있게 해주세요.',
    tags: ['사랑', '로마서', '확신'],
    date: new Date('2024-09-08'),
    author: { id: 'user1', name: '이영희' },
    likes: 15,
    likedBy: ['user2', 'user3', 'current-user'],
    comments: [
      {
        id: 'comment-1',
        content: '정말 은혜로운 묵상이네요! 저도 이 말씀으로 큰 위로를 받았습니다.',
        author: { id: 'user2', name: '박서준' },
        createdAt: new Date('2024-09-08T10:30:00'),
        isEncouragement: true
      }
    ]
  },
  {
    id: 'meditation-2',
    title: '염려를 주께 맡기기',
    passage: {
      book: '빌립보서',
      chapter: 4,
      verses: '6-7'
    },
    content: '요즘 취업 준비로 마음이 무거웠는데, 이 말씀이 큰 위로가 되었습니다. 모든 염려를 기도로 하나님께 맡기니 마음에 평안이 옵니다.',
    keyVerse: {
      id: 'verse-2',
      book: '빌립보서',
      chapter: 4,
      verse: 7,
      text: '하나님의 평강이 모든 지각에 뛰어나서 그리스도 예수 안에서 너희 마음과 생각을 지키시리라',
      translation: '개역개정'
    },
    questions: [
      '지금 가장 염려되는 것은 무엇인가요?',
      '기도를 통해 어떤 평안을 경험했나요?'
    ],
    prayer: '주님, 제 모든 염려를 주님께 맡깁니다. 주님의 평강으로 마음을 지켜주세요.',
    tags: ['평안', '기도', '빌립보서', '염려'],
    date: new Date('2024-09-07'),
    author: { id: 'user3', name: '최다윗' },
    likes: 22,
    likedBy: ['user1', 'user2', 'user4', 'current-user'],
    comments: []
  }
]

// 성경 책 목록 (간단한 버전)
export const bibleBooks = [
  // 구약
  '창세기', '출애굽기', '레위기', '민수기', '신명기',
  '여호수아', '사사기', '룻기', '사무엘상', '사무엘하',
  '열왕기상', '열왕기하', '역대상', '역대하', '에스라',
  '느헤미야', '에스더', '욥기', '시편', '잠언',
  '전도서', '아가', '이사야', '예레미야', '예레미야애가',
  '에스겔', '다니엘', '호세아', '요엘', '아모스',
  '오바댜', '요나', '미가', '나훔', '하박국',
  '스바냐', '학개', '스가랴', '말라기',
  // 신약
  '마태복음', '마가복음', '누가복음', '요한복음', '사도행전',
  '로마서', '고린도전서', '고린도후서', '갈라디아서', '에베소서',
  '빌립보서', '골로새서', '데살로니가전서', '데살로니가후서', '디모데전서',
  '디모데후서', '디도서', '빌레몬서', '히브리서', '야고보서',
  '베드로전서', '베드로후서', '요한일서', '요한이서', '요한삼서',
  '유다서', '요한계시록'
]
