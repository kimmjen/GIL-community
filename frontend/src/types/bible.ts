// 성경 읽기 관련 타입 정의
export interface BibleVerse {
  id: string
  book: string
  chapter: number
  verse: number
  text: string
  translation: 'NIV' | 'ESV' | 'NASB' | '개역개정' | 'NLT'
}

export interface BibleChapter {
  id: string
  book: string
  chapter: number
  verses: BibleVerse[]
  totalVerses: number
}

export interface BibleReading {
  id: string
  title: string
  date: Date
  passages: {
    book: string
    chapter: number
    verses?: string // "1-10" or "5,7,9-12"
  }[]
  reflection?: string
  tags: string[]
  isCompleted: boolean
  completedAt?: Date
  user: {
    id: string
    name: string
  }
}

export interface ReadingPlan {
  id: string
  name: string
  description: string
  duration: number // 일 수
  totalReadings: number
  currentDay: number
  startDate: Date
  endDate: Date
  isActive: boolean
  category: 'whole-bible' | 'new-testament' | 'psalms' | 'wisdom' | 'prophets' | 'custom'
  readings: BibleReading[]
}

export interface Meditation {
  id: string
  title: string
  passage: {
    book: string
    chapter: number
    verses: string
  }
  content: string
  keyVerse: BibleVerse
  questions: string[]
  prayer: string
  tags: string[]
  date: Date
  author: {
    id: string
    name: string
  }
  likes: number
  likedBy: string[]
  comments: MeditationComment[]
}

export interface MeditationComment {
  id: string
  content: string
  author: {
    id: string
    name: string
  }
  createdAt: Date
  isEncouragement: boolean
}

export interface BibleStudyNote {
  id: string
  passage: {
    book: string
    chapter: number
    verses: string
  }
  title: string
  notes: string
  highlights: string[]
  tags: string[]
  createdAt: Date
  updatedAt: Date
  isPrivate: boolean
}
